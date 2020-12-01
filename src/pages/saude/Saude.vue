<template>
  <div id="ongs">
    <Toolbar :key="keyRerender" />
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
          <div class="search-container">
            <!-- campo busca -->
            <q-input
              class="filter"
              v-model="busca"
              filled
              type="search"
              hint="Buscar uma instituição por Nome"
              placeholder="Todas"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <!-- botão busca -->
            <q-btn id="search-button" color="primary" label="BUSCAR" @click="search"/>

          </div>
        </header>
        <div class="cards">
          <div id="cards" v-for="(ong, index) in filteredOngs" :key="index">
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
import Toolbar from "../../components/Toolbar";

export default {
  name: "Ongs",

  components: {
    CardOng,
    Toolbar,
  },

  data() {
    return {
      ongs: [],
      filteredOngs: [],
      busca: "",
      keyRerender: 0,
    };
  },

  methods: {
    forceRerender() {
      this.keyRerender += 1;
    },
    search() {
      this.filteredOngs = this.ongs;
      if (this.busca == '' || this.busca == ' ') {
        this.filteredOngs = this.ongs;
        console.log("busca campo vazio")
        console.log(this.filteredOngs)
      } else {
        this.filteredOngs = this.ongs.filter(ong => ong.name == this.busca);
        console.log("busca filtrada")
        console.log(this.filteredOngs)
      }
    },
  },

  created() {
    this.forceRerender();
  },

  beforeMount() {
    axios
      .get("http://localhost:3333/Ongs/causeName/Saúde")
      .then((res) => {
        console.log(res.data.Ongs);
        this.$data.ongs = res.data.Ongs;
        this.$data.filteredOngs = res.data.Ongs;
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

#search-button {
  margin-top: 2rem;
  width 100%
}

@media (min-width: 1024px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2.5rem;
  }

  .search-container {
    display flex
    justify-content center
  }

  .filter {
    max-width: 350px;
  }

  #search-button {
  margin-left : 2.4rem;
  margin-top 0
  width 100px;
  height 56px
}
}
</style>