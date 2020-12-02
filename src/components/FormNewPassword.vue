<template>
  <div id="form">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- campo senha -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.user.password.$error }"
      >
        <q-input
          ref="password"
          filled
          :type="isPwd? 'password' : 'text'"
          v-model.trim="$v.user.password.$model"
          hint="Nova Senha"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
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
        <q-btn
          id="submit-button"
          label="Enviar"
          type="submit"
          color="primary"
          :disabled="user.submitStatus === 'PENDING'"
        />
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
  name: "FormNewPassword",

  data() {
    return {
      user: {
        password: "",
        submitStatus: null,
      },
      isPwd: true,
    };
  },

  validations: {
    user: {
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
  cursor: pointer;
}
</style>