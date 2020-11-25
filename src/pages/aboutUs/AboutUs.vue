<template>
  <div id="about-us">
    <Toolbar :key="keyRerender" />
    <div class="container">
      <div class="content-container">
        <div class="header-container">
          <header>
            <div id="header-text">
              <h1 class="title" id="about-us-welcome">Sobre Nós</h1>
              <div class="topic">
                <h3 class="subtitle">Nossa História</h3>
                <p id="about-us-history-description">
                  Bem-vindo a sua área de usuário, aqui você pode consultar e
                  gerenciar todos os seus dados de doações e pessoais.
                </p>
              </div>
            </div>
          </header>
        </div>

        <body>
          <div class="team">
            <h3 class="subtitle">Nosso Time</h3>
          </div>
          <div class="body-content">
            <div id="about-us-topic-container">
              <router-link to="/user/historic">
                <q-btn
                  color="primary"
                  label="Histórico de Doações"
                  id="button"
                />
              </router-link>
            </div>

            <div id="about-us-topic-container">
              <router-link to="/user/total">
                <q-btn color="primary" label="Valor Total Doado" id="button" />
              </router-link>
            </div>

            <div id="about-us-topic-container">
              <router-link to="/user/recurrent">
                <q-btn
                  color="primary"
                  label="Doações Recorrentes"
                  id="button"
                />
              </router-link>
            </div>

            <div id="about-us-topic-container">
              <router-link to="/user/topdonate">
                <q-btn color="primary" label="Maior Doação" id="button" />
              </router-link>
            </div>

            <div id="about-us-topic-container">
              <router-link to="/user/topdonate">
                <q-btn
                  color="primary"
                  label="Alterar Dados Pessoais"
                  id="button"
                />
              </router-link>
            </div>
          </div>
        </body>
      </div>
    </div>
  </div>
</template>


<script>
import Toolbar from "../../components/Toolbar.vue";

export default {
  name: "AboutUs",

  components: {
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
    },
  },

  created() {
    this.forceRerender();
  },
};
</script>

<style lang="stylus" scoped>
header {
  text-align: center;
  margin-bottom: 5rem;
  display: block;
  justify-content: center;
}

.body-content {
  text-align: center;
  margin-top: 6.4rem;
}

#header-text {
  color: var(-color-dark);
  text-align: center;
}

.subtitle {
  font: 400 2.6rem Montserrat;
}

.title {
  font: 800 3.2rem Montserrat;
}

p {
  font: 400 1.6rem Quicksand;
  line-height: 2.4rem;
}

#about-us-topic-container {
  font: 400 3.2rem Montserrat;
}

a {
  text-decoration: none;
}

#button {
  width: 60%;
  margin: 0.8rem 0;
}

@media (min-width: 1024px) {
  .content-container {
    margin-top: 120px;
  }

  #about-us-welcome {
    margin-top: 0;
  }

  .body-content {
    margin-top: 150px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2.5rem;
  }

  .topic {
    text-align left 
  }

  #button {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>