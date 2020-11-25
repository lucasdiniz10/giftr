<template>
  <div id="ongs">
    <Toolbar :key="keyRerender"/>
    <div class="container">
      <div class="title">
        <h1>Instituições:</h1>
        <div class="filter"></div>
      </div>
      <div class="cause-container">
        <header class="header-container">
          <h1>Saúde</h1>
          <p>
            Milhões de pessoas no Brasil e no mundo vivem sem condições mínimas
            de saneamento básico e nutrição, vítimas da miséria ou de tragédias
            como a de Mariana. Ajude agora as instituições que trabalham pela
            dignidade e saúde dessas pessoas.
          </p>

          <q-input
            class="filter"
            v-model="busca"
            filled
            type="search"
            hint="Buscar uma instituição por Nome"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </header>
        <div class="cards">
          <div id="cards" v-for="(ong, index) in ongs" :key="index">
            <div><CardOng :cardOng="ong" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardOng from "../../components/CardOng";
import axios from "axios";
import Toolbar from '../../components/Toolbar';

export default {
  name: "Ongs",

  components: {
    CardOng,
    Toolbar,
  },

  data() {
    return {
      ongs: [],
      busca: "",
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

  beforeMount() {
    axios
      .get("http://localhost:3333/Ongs/causeName/Saúde")
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
.title h1 {
  font: 800 3.2rem Montserrat;
  color: var(-color-dark);
  text-align: center;
  margin-bottom: 6.4rem;
}

.header-container {
  color: var(-color-dark);
  text-align: center;
  margin-bottom: 4.6rem;
}

.header-container h1 {
  font: 800 3.2rem Montserrat;
}

.header-container p {
  font: 400 1.6rem Quicksand;
  line-height: 2.4rem;
  margin-bottom: 3.2rem;
}

@media (min-width: 1024px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2.5rem;
  }

  .filter {
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>