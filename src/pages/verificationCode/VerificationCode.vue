<template>
  <div id="email-validation">
    <Toolbar :key="keyRerender"/>
    <div class="container">
      <div class="content-container">
        <div class="header-container">
          <header>
            <h1 id="title">Qual o seu código?</h1>
            <p>Digite abaixo o código de recuperação, que lhe enviamos no seu email. Caso não tenha recebido, clique no botão "Enviar código novamente".</p>
          </header>
        </div>
        <div class="main-container">
          <main>
            <FormVerificationCode />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormVerificationCode from "../../components/FormVerificationCode";
import Toolbar from "../../components/Toolbar";

export default {
  name: "VerificationCode",

  components: {
    FormVerificationCode,
    Toolbar,
  },

  data() {
    return {
      keyRerender: 0,
    };
  },

  methods: {
    forceRerender() {
      this.keyRerender += 1;
    }
  },

  created() {
    this.forceRerender()
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
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.2rem;
  }

  header {
    text-align: left;
    margin: 0;
  }

  header h1 {
    text-align: left;
  }
}
</style>