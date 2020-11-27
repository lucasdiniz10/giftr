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

      <!-- campo senha -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.user.password.$error }"
      >
        <q-input
          ref="password"
          filled
          type="password"
          v-model.trim="$v.user.password.$model"
          hint="Senha"
        />
      </div>

      <!-- validação senha -->
      <div class="error" v-if="!$v.user.password.required">
        Senha é obrigatória.
      </div>
      <div class="error" v-if="!$v.user.password.minLength">
        Senha deve ter no mínimo
        {{ $v.user.password.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.user.password.maxLength">
        Senha deve ter no máximo
        {{ $v.user.password.$params.maxLength.max }} letras.
      </div>

      <!-- botão -->
      <div class="button">
        <q-btn id="submit-button"
          label="Enviar"
          type="submit"
          color="primary"
          :disabled="user.submitStatus === 'PENDING'"
        />
        <!-- botao recuperar senha -->
        <a id="password-recovery-button" @click="$router.push('password-recovery/email-validation')">Esqueceu a Senha?</a>
      </div>
      <p class="typo__p" id="ok" v-if="user.submitStatus === 'OK'">
        Cadastro completo com sucesso!!
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'ERROR'">
        Por favor, preencha os campos corretamente.
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'ERRORPASSWORD'">
        Senha Incorreta.
      </p>
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
  name: "FormLogin",

  data() {
    return {
      user: {
        email: "",
        password: "",
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
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15),
      },
    },
  },

  methods: {
    ...mapActions("auth", ["ActionSetUser"]),
    ...mapActions("auth", ["ActionSetToken"]),
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.user.submitStatus = "ERROR";
        console.log("errou");
      } else {
        // do your submit logic here
        axios
          .post("http://localhost:3333/users/session", this.user, {
            headers: {},
          })
          .then((res) => {
            console.log(res);
            this.ActionSetUser(res.data.user);
            this.ActionSetToken(res.data.token);
            this.$router.push("/user");
          })
          .catch((err) => {
            console.log(err.response.data);
            const getError = err.response.data.error;

            if (getError == "Password not match!") {
              this.user.submitStatus = "ERRORPASSWORD";
              this.$refs.password.$el.focus();
              console.log(getError);
            } else if (getError == "User not foud!") {
              this.user.submitStatus = "ERRORUSER";
              this.$refs.email.$el.focus();
              /* this.user.email = ""; */
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
  justify-content space-between
  align-items center
}

#password-recovery-button {
  text-decoration underline
  font: 400 1.3rem Montserrat;
  color: var(--color-primary);
  margin-left 12px
}

#password-recovery-button:hover {
  color: var(--color-secondary);
}
</style>