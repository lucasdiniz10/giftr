<template>
  <div id="form">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- campo email -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.user.email.$error }"
      >
        <q-input
          ref="email"
          filled
          type="email"
          v-model.trim="$v.user.email.$model"
          label="Email"
          hint="Digite seu email"
          lazy-rules
        />
      </div>

      <!-- validação email -->
      <div class="error" v-if="!$v.user.email.required">
        Email é obrigatório.
      </div>
      <div class="error" v-if="!$v.user.email.minLength">
        Email deve ter no mínimo
        {{ $v.user.email.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.user.email.maxLength">
        Email deve ter no máximo
        {{ $v.user.email.$params.maxLength.max }} letras.
      </div>

      <!-- botão -->
      <div class="button">
        <q-btn
          id="submit-button"
          label="Enviar"
          type="submit"
          color="primary"
          :disabled="user.submitStatus === 'PENDING'"
        />
      </div>
      <p class="typo__p" id="ok" v-if="user.submitStatus === 'OK'">
        Email enviado com sucesso!!
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'ERROR'">
        Por favor, preencha os campos corretamente.
      </p>
      <!-- <p class="typo__p" v-if="user.submitStatus === 'ERRORPASSWORD'">
        Senha Incorreta.
      </p> -->
      <p class="typo__p" v-if="user.submitStatus === 'ERRORUSER'">
        Usuário incorreto ou não existe.
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'PENDING'">Enviando...</p>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "FormEmailValidation",

  data() {
    return {
      user: {
        email: "",
        codigo: "",
        submitStatus: null,
      },
    };
  },

  validations: {
    user: {
      email: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(50),
      },
    },
  },

  methods: {
    ...mapActions("auth", ["ActionSetUser"]),
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.user.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        axios
          .post("https://giftrback.herokuapp.com/userCheck", this.user, {
            headers: {},
          })
          .then((res) => {
            console.log(res);

            //COLOCAR O EMAIL LOGIC HERE

            const codigo = Math.floor(Math.random() * 65536);

            const email =
              "https://giftrback.herokuapp.com/send/" +
              this.user.email +
              "/" +
              codigo;

            this.user.codigo = codigo;

            this.ActionSetUser(this.user);

            axios.get(email);

            this.$router.push("/password-recovery/verification-code");
          })
          .catch((err) => {
            console.log(err.response.data);
            const getError = err.response.data.error;

            if (getError == "User not foud!") {
              this.user.submitStatus = "ERRORUSER";
              this.$refs.email.$el.focus();
              console.log(getError);
            } else {
              this.user.submitStatus = "PENDING";
              setTimeout(() => {
                this.user.submitStatus = "OK";
              }, 500);
            }
          });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
#form {
  margin: 3.2rem auto;
}

.error {
  color: var(--color-secondary);
}

.typo__p {
  color: var(--color-secondary);
}

.typo__p #ok {
  color: var(--color-primary);
}

.password-recovery-container {
  margin-top: 3.2rem;
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#password-recovery-button {
  text-decoration: underline;
  font: 400 1.3rem Montserrat;
  color: var(--color-primary);
  margin-left: 12px;
}

#password-recovery-button:hover {
  color: var(--color-secondary);
}
</style>