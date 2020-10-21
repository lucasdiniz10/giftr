<template>
  <div class="container" id="login">
    <header class="header-container">
      <h1 id="title">Olá, seja bem-vindo de volta!</h1>
      <p>Digite seu nome completo, email e senha.</p>
    </header>
    <main class="main-container">
      <FormRegister />
    </main>
  </div>
</template>

<script>
import FormRegister from '../components/FormRegister'

export default {
  name: 'Login',

  components: {
    FormRegister,
  },
}
</script>

<style lang='stylus' scoped>
  
  header {
    text-align center
    margin-bottom 3.2rem
  }
  
  header #title {
    font: 800 3.2rem Montserrat;
  }
</style>