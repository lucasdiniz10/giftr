<template>
  <div id="user-page">
    <Toolbar :key="keyRerender"/>
    <div class="container">
      <div class="content-container">
        <div class="header-container">
          <header>
            <div id="header-text">
              <h1 class="title" id="user-welcome">Olá, {{ user.name }}</h1>
              <p id="user-description">
                Bem-vindo a sua área de usuário, aqui você pode consultar e
                gerenciar todos os seus dados de doações e pessoais.
              </p>
            </div>
          </header>
        </div>

        <body>
          <div class="body-content">
            <div id="user-topic-container">
              <router-link to="/user/historic">
                <q-btn
                  color="primary"
                  label="Histórico de Doações"
                  id="button"
                />
              </router-link>
            </div>

            <div id="user-topic-container">
              <router-link to="/user/total">
                <q-btn color="primary" label="Valor Total Doado" id="button" />
              </router-link>
            </div>

            <div id="user-topic-container">
              <router-link to="/user/recurrent">
                <q-btn
                  color="primary"
                  label="Doações Recorrentes"
                  id="button"
                />
              </router-link>
            </div>

            <div id="user-topic-container">
              <router-link to="/user/topdonate">
                <q-btn color="primary" label="Maior Doação" id="button" />
              </router-link>
            </div>

            <div id="user-topic-container">
              <router-link to="/user/person-update">
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
import { mapState } from "vuex";
import Toolbar from "../../components/Toolbar.vue";

export default {
  name: "User",

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
    }
  },

  created() {
    this.forceRerender()
  },

  computed: {
    ...mapState("auth", ["user"]),
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

.title {
  font: 800 3.2rem Montserrat;
}

header p {
  font: 400 1.6rem Quicksand;
  line-height: 2.4rem;
}

#user-topic-container {
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

  #user-welcome {
    margin-top: 0;
  }

  .body-content {
    margin-top: 150px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2.5rem;
  }

  #button {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>