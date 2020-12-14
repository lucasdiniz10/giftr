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
          :disable="disable"
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
          :disable="disable"
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
        :class="{ 'form-group--error': $v.userData.password.$error }"
      >
        <q-input
          ref="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          v-model.trim="$v.userData.password.$model"
          hint="Nova Senha"
          :disable="disable"
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
      <!-- <div class="error" v-if="!$v.userData.password.required">
        Senha é obrigatória.
      </div> -->
      <div class="error" v-if="!$v.userData.password.minLength">
        Senha deve ter no mínimo
        {{ $v.userData.password.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.userData.password.maxLength">
        Senha deve ter no máximo
        {{ $v.userData.password.$params.maxLength.max }} letras.
      </div>

      <!-- campo repete senha -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.userData.passwordRepeat.$error }"
      >
        <q-input
          filled
          :type="isPwdRepeat ? 'password' : 'text'"
          v-model.trim="$v.userData.passwordRepeat.$model"
          hint="Repita Nova Senha"
          :disable="disable"
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
      <div class="error" v-if="!$v.userData.passwordRepeat.sameAsPassword">
        Senha deve ser Igual.
      </div>
      <div class="error" v-if="!$v.userData.passwordRepeat.minLength">
        Senha deve ter no mínimo
        {{ $v.userData.passwordRepeat.$params.minLength.min }} letras.
      </div>
      <div class="error" v-if="!$v.userData.passwordRepeat.maxLength">
        Senha deve ter no máximo
        {{ $v.userData.passwordRepeat.$params.maxLength.max }} letras.
      </div>

      <div class="togle-button">
        <q-toggle
          id="edit-mode-button"
          v-model="disable"
          :label="disable ? 'Modo Leitura' : 'Modo Edição'"
        />
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
        <hr />
        <q-btn
          label="Deletar Minha Conta"
          @click="deleteUser = true"
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

    <!-- dialog box logout -->
    <q-dialog v-model="deleteUser">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="sentiment_very_dissatisfied"
            color="primary"
            text-color="white"
          />
          <span class="q-ml-sm">Você deseja excluir sua conta PERMANENTEMENTE?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancelar" color="primary" v-close-popup />
          <q-btn
            @click="deleterUsuario()"
            flat
            label="Sim"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import axios from "axios";
import store from "../store";
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
      userData: {
        password: "",
        passwordRepeat: "",
        submitStatus: null,
      },
      isPwd: true,
      isPwdRepeat: true,
      disable: true,
      deleteUser: false,
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
    },
    userData: {
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

  methods: {
    ...mapActions("auth", ["ActionSetUser"]),
    ...mapActions("auth", ["ActionSetToken"]),
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("errou");
      } else {
        // do your submit logic here

        this.user.password = this.userData.password;

        var userUpdated;

        if (!this.user.password) {
          userUpdated = { nameNew: this.user.name, emailNew: this.user.email };
        } else {
          userUpdated = {
            nameNew: this.user.name,
            emailNew: this.user.emai,
            passwordNew: this.user.password,
          };
        }

        axios
          .put("http://localhost:3333/users/" + this.user._id, userUpdated)
          .then((res) => {
            console.log(res);
            this.ActionSetUser(res.data.user);
            this.ActionSetToken(res.data.token);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    },
    deleterUsuario() {
      axios.delete("http://localhost:3333/users/delete/" + this.user._id);
      store.dispatch("auth/ActionSingOut");
      this.$router.push("/");
      console.log("deletou");
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
  margin-top: 2.8rem;
}

@media (max-width: 1024px) {
  button {
    width: 100%;
  }
}
</style>