<template>
  <div class="container" id="ongs">
    <div class="title">
      <h1>Instituições:</h1>
      <div class="filter">
        
      </div>
    </div>
    <div class="cause-container">
      <header class="header-container">
        <h1>Meio Ambiente</h1>
        <p>Página Meio-Ambiente</p>
      </header>
      <div class="cards">
        <div id="cards" v-for="(ong, index) in ongs" :key="index">
          <CardOng :cardOng="ong" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardOng from "../components/CardOng";
import axios from 'axios';

export default {
  name: "Ongs",

  components: {
    CardOng,
  },

  data() {
    return {
      ongs: [],

      cause: {
        id: Number,
        name: "",
        description: "",
      },
    };
  },

  beforeMount(){
    axios
      .get("http://localhost:3333/Ongs")
      .then((res) => {
        console.log(res.data.Ongs);
        this.$data.ongs = res.data.Ongs
        console.log(this.ongs);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  created() {
    this.$eventBus.$on('event', (cardCause) => {
      this.cause = cardCause
    })
  }
};
</script>

<style lang="stylus" scoped>

.title {

}

.title h1 {
  font: 800 3.2rem Montserrat;
  color: var(-color-dark);
  text-align: center;
  margin-bottom 6.4rem
}

.header-container {
  color: var(-color-dark);
  text-align: center;
  margin-bottom 3.2rem
}

.header-container h1 {
  font: 800 3.2rem Montserrat;
}

.header-container p {
  font: 400 1.6rem Quicksand;
  line-height 2.4rem
}

</style>