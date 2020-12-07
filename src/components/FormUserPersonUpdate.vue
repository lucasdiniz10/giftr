<template>
  <div id="form">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- campo nome -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.user.name.$error }"
      >
        <q-input
          ref="name"
          filled
          type="text"
          v-model.trim="$v.user.name.$model"
          label="Nome"
          hint="Nome Completo"
          :disable ="disable"
          lazy-rules
        />
      </div>
      <!-- validação nome -->
      <div class="error" v-if="!$v.user.name.required">Nome é obrigatório.</div>
      <div class="error" v-if="!$v.user.name.minLength">
        Nome deve ter no mínimo
        {{ $v.user.name.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.user.name.maxLength">
        Nome deve ter no máximo
        {{ $v.user.name.$params.maxLength.max }} letras.
      </div>

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
          hint="Seu Melhor Email"
          :disable ="disable"
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
          :type="isPwd ? 'password' : 'text'"
          v-model.trim="$v.user.password.$model"
          hint="Nova Senha"
          :disable ="disable"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <!-- validação senha -->
      <!-- <div class="error" v-if="!$v.user.password.required">
        Senha é obrigatória.
      </div> -->
      <div class="error" v-if="!$v.user.password.minLength">
        Senha deve ter no mínimo
        {{ $v.user.password.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.user.password.maxLength">
        Senha deve ter no máximo
        {{ $v.user.password.$params.maxLength.max }} letras.
      </div>

      <!-- campo repete senha -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.user.passwordRepeat.$error }"
      >
        <q-input
          filled
          :type="isPwdRepeat ? 'password' : 'text'"
          v-model.trim="$v.user.passwordRepeat.$model"
          hint="Repita Nova Senha"
          :disable ="disable"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdRepeat ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdRepeat = !isPwdRepeat"
            />
          </template>
        </q-input>
      </div>

      <!-- validação repete senha -->
      <div class="error" v-if="!$v.user.passwordRepeat.sameAsPassword">
        Senha deve ser Igual.
      </div>
      <div class="error" v-if="!$v.user.passwordRepeat.minLength">
        Senha deve ter no mínimo
        {{ $v.user.passwordRepeat.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.user.passwordRepeat.maxLength">
        Senha deve ter no máximo
        {{ $v.user.passwordRepeat.$params.maxLength.max }} letras.
      </div>

      <div class="togle-button">
        <q-toggle id="edit-mode-button" v-model="disable" :label="disable ? 'Modo Leitura' : 'Modo Edição'"/>
      </div>

      <!-- botão -->
      <div class="button">
        <q-btn
          label="Salvar Dados"
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
      <p class="typo__p" v-if="user.submitStatus === 'ERRORUSER'">
        Email já cadastrado ou inválido.
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'PENDING'">Enviando...</p>


      <!-- botão deletar conta -->
      <div class="button" id="delete-button">
        <hr>
        <q-btn
          label="Deletar Minha Conta"
          type="submit"
          color="secondary"
          :disabled="user.submitStatus === 'PENDING'"
        />
      </div>
      <p class="typo__p" id="ok" v-if="user.submitStatus === 'OK'">
        Cadastro completo com sucesso!!
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'ERROR'">
        Por favor, preencha os campos corretamente.
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'ERRORUSER'">
        Email já cadastrado ou inválido.
      </p>
      <p class="typo__p" v-if="user.submitStatus === 'PENDING'">Enviando...</p>
    </q-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  name: "FormUserPersonUpdate",

  data() {
    return {
      /* user: {
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
        submitStatus: null,
      }, */
      isPwd: true,
      isPwdRepeat: true,
      disable: true,
    };
  },

  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(100),
      },
      email: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(50),
      },
      password: {
        minLength: minLength(6),
        maxLength: maxLength(15),
      },
      passwordRepeat: {
        minLength: minLength(6),
        maxLength: maxLength(15),
        sameAsPassword: sameAs("password"),
      },
    },
  },

  computed: {
    ...mapState("auth", ["user"]),
  },

  created() {
    axios
      .get("http://localhost:3333/users/" + this.user._id, this.user, {
        headers: {},
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
        const getError = err.response.data.error;

        if (getError == "User already exists") {
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
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.user.submitStatus = "ERROR";
        console.log("errou");
      } else {
        // do your submit logic here
        axios
          .post("http://localhost:3333/users/post", this.user, {
            headers: {},
          })
          .then((res) => {
            console.log(res);
            this.$router.push("/user");
          })
          .catch((err) => {
            console.log(err.response);
            const getError = err.response.data.error;

            if (getError == "User already exists") {
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

#delete-button {
  margin-top 2.8rem
}

@media (max-width: 1024px) {
  button {
    width 100%
  }
}
</style>