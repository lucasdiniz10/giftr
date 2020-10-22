<template>
  <div class="container" id="register">
    <header class="header-container">
      <h1 id="title">Obrigado por dar esse passo!</h1>
      <p>Bem-vindo ao cadastro!<br>Digite seu nome completo, email e senha.</p>
    </header>
    <main class="main-container">
      <FormRegister />
    </main>
  </div>
</template>

<script>
import FormRegister from '../components/FormRegister'

export default {
  name: 'Register',

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