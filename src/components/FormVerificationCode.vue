<template>
  <div id="form">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <!-- campo email -->
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.codigo.email.$error }"
      >
        <q-input
          ref="code"
          filled
          type="text"
          v-model.trim="$v.codigo.email.$model"
          hint="Digite o código!"
          lazy-rules
        />
      </div>

      <!-- validação email -->
      <div class="error" v-if="!$v.codigo.email.required">
        Código é obrigatório.
      </div>
      <div class="error" v-if="!$v.codigo.email.maxLength">
        Código deve ter no máximo
        {{ $v.codigo.email.$params.maxLength.max }} letras.
      </div>

      <!-- botão -->
      <div class="button">
        <q-btn id="submit-button"
          label="Enviar"
          type="submit"
          color="primary"
          :disabled="user.submitStatus === 'PENDING'"
        />
        <!-- botao reenviar código senha -->
        <a id="resend-code" @click="$router.push('/password-recovery/email-validation')">Enviar código novamente</a>

      </div>
      <p class="typo__p" id="ok" v-if="user.submitStatus === 'OK'">
        Código enviado com sucesso!!
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
import { required, maxLength } from "vuelidate/lib/validators";
import { mapState } from "vuex";

export default {
  name: "FormVerificationCode",

  data() {
    return {
      codigo: {
        email: "",
        submitStatus: null,
      },
    };
  },

  validations: {
    codigo: {
      email: {
        required,
        maxLength: maxLength(50),
      },
    },
  },

  computed: {
    ...mapState("auth", ["user"]),
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.codigo.submitStatus = "ERROR";
        console.log("errou");
      } else {
        // do your submit logic here
        if (this.codigo.email == this.user.codigo) {
          this.$router.push("/password-recovery/new-password");
        }
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

#resend-code {
  text-decoration underline
  font: 400 1.3rem Montserrat;
  color: var(--color-primary);
  margin-left 12px
}

#resend-code:hover {
  color: var(--color-secondary);
  cursor: pointer;
}
</style>