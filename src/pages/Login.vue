<template>
  <div class="container" id="login">
    <header class="header-container">
      <h1 id="title">Olá, seja bem-vindo de volta!</h1>
      <p>Digite seu nome completo, email e senha.</p>
    </header>
    <main class="main-container">
      <FormLogin />
    </main>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin'

export default {
  name: 'Login',

  components: {
    FormLogin,
  },
}
</script>

<style lang='stylus' scoped>
  
  header {
    text-align center
    margin-bottom 5rem
    display block
    justify-content center
  }
  
  header #title {
    font: 800 3.2rem Montserrat;
  }
</style>