<template>
  <div id="new-password">
    <Toolbar :key="keyRerender"/>
    <div class="container">
      <div class="content-container">
        <div class="header-container">
          <header>
            <h1 id="title">Nova Senha</h1>
            <p>Digite a senha desejada.</p>
          </header>
        </div>
        <div class="main-container">
          <main>
            <FormNewPassword />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormNewPassword from "../../../components/FormNewPassword";
import Toolbar from "../../../components/Toolbar.vue";

export default {
  name: "NewPassword",

  components: {
    FormNewPassword,
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