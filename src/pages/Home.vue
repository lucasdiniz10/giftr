<template>
  <q-page class="flex flex-center">
    <link rel="stylesheet" href="../styles/colors.css" />
    <div class="container" id="home">
      <header>
        <div id="header-text">
          <h1 class="title" id="home-welcome">
            Bem-vindo ao <span>giftr</span>, sua plataforma de doações.
          </h1>
          <p id="home-description">
            Acreditamos nas pessoas e no poder do amor ao próximo. Contribua em
            alguma das instituições parceiras.
          </p>
        </div>
        <img
          alt="Giftr Love"
          src="../assets/vectors/home/home-hero-image.svg"
          id="hero-img"
        />
        <div class="button-container">
          <q-btn label="Doar Agora" class="buttons" id="button-donate" />
          <q-btn label="Saiba Mais" class="buttons" id="button-more" />
        </div>
      </header>

      <body>
        <div class="body-content">
          <h1 class="title" id="cause-title">Escolha uma Causa:</h1>
          <div class="cards">
            <div id="cards" v-for="cardCause in cardCauses" :key="cardCause.id">
              <CardCause :cardCause="cardCause" />
            </div>
          </div>
        </div>
      </body>
    </div>
  </q-page>
</template>

<script>
import CardCause from "../components/CardCause";

export default {
  name: "Home",

  components: {
    CardCause,
  },

  data() {
    return {
      cardCauses: [
        {
          id: 1,
          name: "Saúde",
          image: require("../assets/vectors/home/avatar-saude.svg"),
          description:
          "Milhões de pessoas no Brasil e no mundo vivem sem condições mínimas de saneamento básico e nutrição, vítimas da miséria ou de tragédias como a de Mariana. Ajude agora as instituições que trabalham pela dignidade e saúde dessas pessoas.",
        },
        {
          id: 2,
          name: "Meio Ambiente",
          image: require("../assets/vectors/home/avatar-meio-ambiente.svg"),
          description: "Página Meio-Ambiente",
        },
        {
          id: 3,
          name: "Proteção Animal",
          image: require("../assets/vectors/home/avatar-protecao-animal.svg"),
          description: "Página Proteção Animal",
        },
        {
          id: 4,
          name: "Educação",
          image: require("../assets/vectors/home/avatar-educacao.svg"),
          description: "Página Educação",
        },
        {
          id: 5,
          name: "Esporte",
          image: require("../assets/vectors/home/avatar-esporte.svg"),
          description: "Página Esporte",
        },
        {
          id: 6,
          name: "Acolhimento",
          image: require("../assets/vectors/home/avatar-acolhimento.svg"),
          description: "Página Acolhimento",
        },
        {
          id: 7,
          name: "Arte e Cultura",
          image: require("../assets/vectors/home/avatar-arte-cultura.svg"),
          description: "Página Arte e Cultura",
        },
        {
          id: 8,
          name: "Direitos Humanos",
          image: require("../assets/vectors/home/avatar-direitos-humanos.svg"),
          description: "Página Direitos Humanos",
        },
      ],
    };
  },
};
</script>



<style lang="stylus">
.body-content {
  margin-top: 6.4rem;
}

header img {
  display: block;
  margin-top: 6.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6.4rem;
  width: 90%;
  max-width: 400px;
}

#header-text {
  color: var(-color-dark);
  text-align: center;
}

.title {
  font: 800 3.2rem Montserrat;
}

header h1 span {
  color: var(--color-primary);
}

header p {
  font: 400 1.6rem Quicksand;
  line-height 2.4rem
}

.button-container {
  font: 800 1.6rem Montserrat;
}

.button-container q-btn {
  width: 100%;
}

.button-container #button-donate {
  display: block;
  margin-bottom: 1.2rem;
  width: 100%;
  background: var(--color-secondary);
  color: var(--color-light);
}

.button-container #button-more {
  margin-bottom: 1.2rem;
  width: 100%;
  background: var(--color-primary);
  color: var(--color-light);
}

@media (min-width: 1024px) {
  header {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 250px 1fr;
    grid-template-areas: titulo image;
    button: button;
  }

  #home-welcome {
    margin-top: 0;
  }

  #header-text {
    text-align: left;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    max-width: 240px;
  }

  #button-donate {
    margin-right: 2.4rem;
  }

  header img {
    margin: 0 auto;
    height: 300px;
  }

  .body-content {
    margin-top: 200px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2.5rem;
  }
}
</style>