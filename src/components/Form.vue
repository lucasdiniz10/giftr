<template>
  <div id="form">
    <q-form action="http://localhost:3333/users/post" method="post" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Nome"
        hint="Nome Completo"
        lazy-rules
      />
<!-- :rules="[(val) => (val && val.length > 0) || 'Please type something']" -->
      <q-input
        filled
        type="email"
        v-model="email"
        label="Email"
        hint="Seu Melhor Email"
        lazy-rules
      />

      <q-input filled v-model="password" type="password" hint="Senha" />
      <q-input
        filled
        v-model="passwordRepeat"
        type="password"
        hint="Repita sua Senha"
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

      <q-toggle v-model="accept" label="Eu aceito os termos e licença." />

      <div>
        <q-btn label="Enviar" type="submit" color="primary"/>
        <q-btn
          label="Limpar Campos"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Form",

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