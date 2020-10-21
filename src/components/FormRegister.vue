<template>
  <div id="form">
    <q-form
      action="http://localhost:3333/users/post"
      method="post"
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="text"
        v-model="user.name"
        label="Nome"
        hint="Nome Completo"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="text"
        v-model="user.email"
        label="Email"
        hint="Seu Melhor Email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="text"
        v-model="user.password"
        hint="Senha"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="user.passwordRepeat"
        type="text"
        hint="Repita sua Senha"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <!-- <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      /> -->

      <div>
        <q-btn label="Enviar" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "FormRegister",

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
      },
    };
  },

  methods: {
    onSubmit(evt) {
      console.log("@submit - do something here", evt);

      evt.target.submit();
    },
  },
};
</script>

<style lang="stylus" scoped>
#form {
  margin: 3.2rem auto;
}
</style>