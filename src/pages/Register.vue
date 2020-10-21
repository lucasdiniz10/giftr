<template>
  <div class="container" id="login">
    <header class="header-container">
      <h1 id="title">Obrigado por dar esse passo!</h1>
      <p>Bem vindo ao seu cadastro.</p>
    </header>
    <main class="main-container">
      <Form />
    </main>
  </div>
</template>

<script>
import Form from '../components/Form'

export default {
  name: 'Register',

  components: {
    Form,
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