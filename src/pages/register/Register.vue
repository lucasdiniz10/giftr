<template>
  <div class="container" id="register">
    <div class="content-container">
      <header class="header-container">
        <h1 id="title">Obrigado por dar esse passo!</h1>
        <p>Bem-vindo ao cadastro! Digite seu nome completo, email e senha.</p>
      </header>
      <div class="main-container">
        <main>
          <FormRegister />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import FormRegister from "../../components/FormRegister";

export default {
  name: "Register",

  components: {
    FormRegister,
  },
};
</script>

<style lang='stylus' scoped>
header {
  text-align: center;
  margin-bottom: 5rem;
  display: block;
  justify-content: center;
}

header #title {
  font: 800 3.2rem Montserrat;
}

@media (min-width: 1024px) {
  .content-container {
    margin-top 120px
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap  3.2rem
  }

  header {
    text-align: left;
    margin 0;
  }

  header h1 {
    text-align: left;
  }

  .body-content {
    margin-top: 200px;
  }
}
</style>