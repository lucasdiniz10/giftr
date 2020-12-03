<template>
  <div id="form">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- campo senha -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.userPass.password.$error }"
      >
        <q-input
          ref="password"
          filled
          :type="isPwd? 'password' : 'text'"
          v-model.trim="$v.userPass.password.$model"
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
      <div class="error" v-if="!$v.userPass.password.required">
        Senha é obrigatória.
      </div>
      <div class="error" v-if="!$v.userPass.password.minLength">
        Senha deve ter no mínimo
        {{ $v.userPass.password.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.userPass.password.maxLength">
        Senha deve ter no máximo
        {{ $v.userPass.password.$params.maxLength.max }} letras.
      </div>

      <!-- botão -->
      <div class="button">
        <q-btn
          id="submit-button"
          label="Enviar"
          type="submit"
          color="primary"
          :disabled="userPass.submitStatus === 'PENDING'"
        />
      </div>

      <p class="typo__p" id="ok" v-if="userPass.submitStatus === 'OK'">
        Cadastro completo com sucesso!!
      </p>
      <p class="typo__p" v-if="userPass.submitStatus === 'ERROR'">
        Por favor, preencha os campos corretamente.
      </p>
      <p class="typo__p" v-if="userPass.submitStatus === 'ERRORPASSWORD'">
        Senha Incorreta.
      </p>
      <p class="typo__p" v-if="userPass.submitStatus === 'ERRORUSER'">
        Usuário incorreto ou não existe.
      </p>
      <p class="typo__p" v-if="userPass.submitStatus === 'PENDING'">Enviando...</p>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapState } from "vuex";

export default {
  name: "FormNewPassword",

  data() {
    return {
      userPass: {
        password: "",
        submitStatus: null,
      },
      isPwd: true,
    };
  },

   computed: {
    ...mapState("auth", ["user"]),
  },

  validations: {
    userPass: {
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15),
      },
    },
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.userPass.submitStatus = "ERROR";
        console.log("errou");
      } else {
        // do your submit logic here
        const url = "http://localhost:3333/users/update/" + this.user.email

        axios
          .put(url, this.userPass, {
            headers: {},
          })
          .then((res) => {
            console.log(res);
            this.$router.push("/login");
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