<template>
  <div class="container" id="ongs">
    <div class="title">
      <h1>Instituições:</h1>
      <div class="filter"></div>
    </div>
    <div class="cause-container">
      <header class="header-container">
        <h1>{{ cardCause.name }}</h1>
        <p>{{ cardCause.description }}</p>
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
import CardOng from "../../components/CardOng";
import axios from "axios";

export default {
  name: "Ongs",

  components: {
    CardOng,
  },

  data() {
    return {
      ongs: [],

      cardOngs: [
        {
          id: 1,
          name: "AACD",
          description:
            "Promover a prevenção, habilitação e reabilitação de pessoas com deficiência física, especialmente de crianças, adolescentes e jovens, favorecendo a integração social.",
          image:
            "https://www.paypal-brasil.com.br/doe/assets/20160120_083447467_accd.jpg",
        },
        {
          id: 2,
          name: "Acredite",
          description: "Reabilitação de pessoas com deficiência física.",
          image:
            "https://www.paypal-brasil.com.br/doe/assets/20180612_142305975_logo_acredite_sem_fundo_branco.png",
        },
      ],

      cause: [],
    };
  },

  beforeMount() {
    axios
      .get("https://giftrback.herokuapp.com/Ongs")
      .then((res) => {
        console.log(res.data.Ongs);
        this.$data.ongs = res.data.Ongs;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="stylus" scoped>
.title {
}

.title h1 {
  font: 800 3.2rem Montserrat;
  color: var(-color-dark);
  text-align: center;
  margin-bottom: 6.4rem;
}

.header-container {
  color: var(-color-dark);
  text-align: center;
  margin-bottom: 3.2rem;
}

.header-container h1 {
  font: 800 3.2rem Montserrat;
}

.header-container p {
  font: 400 1.6rem Quicksand;
  line-height: 2.4rem;
}
</style>