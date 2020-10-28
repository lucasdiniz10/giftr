<template>
  <div class="container" id="ongs">
    <div class="ong-title">
      <h1>Instituições:</h1>
      <div class="filter"></div>
    </div>
    <div class="cause-container" >
      <header>
        <h1>{{ cause.name }}</h1>
        <p>{{ cause.description }}</p>
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

      cardOngs: [
        {
          id: 1,
          name: "AACD",
          description: "Reabilitação de pessoas com deficiência física.",
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

      cause: {
        name: "Saúde",
        description:
          "Milhões de pessoas no Brasil e no mundo vivem sem condições mínimas de saneamento básico e nutrição, vítimas da miséria ou de tragédias como a de Mariana. Ajude agora as instituições que trabalham pela dignidade e saúde dessas pessoas.",
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
  }
};
</script>

<style>
</style>