<template>
  <div id="user-person-update">
    <Toolbar :key="keyRerender"/>
    <div class="container">
      <div class="content-container">
        <header class="header-container">
          <h1 id="title">Atualize seus dados!</h1>
          <p>Nunca foi tão fácil.</p>
        </header>
        <div class="main-container">
          <main>
            <FormUserPersonUpdate />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormUserPersonUpdate from "../../components/FormUserPersonUpdate";
import Toolbar from '../../components/Toolbar.vue';

export default {
  name: "UserPersonUpdate",

  components: {
    FormUserPersonUpdate,
    Toolbar,
  },

  data() {
    return {
      keyRerender: 0,
    }
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

  .body-content {
    margin-top: 200px;
  }
}
</style>