<template>
  <div id="form">
    <q-form
      action= 'http://localhost:8080/?#/User'
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
        type="password"
        v-model="user.password"
        hint="Senha"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="user.passwordRepeat"
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
import axios from 'axios';

async function  post(user) {
    await axios.post('http://localhost:3333/users/post', user, {
    headers: {
    }
    }).then(res => {
    console.log(res); 
    }).catch(err => {
    console.log(err.response);
    });
} 

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
      console.log(this.user, evt);

      evt.target.submit(this.user);

      post(this.user);
      
    },

  },

};
</script>

<style lang="stylus" scoped>
#form {
  margin: 3.2rem auto;
}
</style>