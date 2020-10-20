<template>
  <q-page class="flex flex-center">
    <link rel="stylesheet" href="../styles/colors.css" />
    <div id="home">
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
          alt="Hero Image"
          src="../assets/vectors/home/home-hero-image.svg"
          id="hero-img"
        />
        <div class="button-container">
          <q-btn
            style="background: #e93a57; color: #ffffff"
            label="Doar Agora"
            id="button-donate"
          />
          <q-btn
            style="background: #3457dc; color: #ffffff"
            label="Saiba Mais"
            id="button-more"
          />
        </div>
      </header>

      <body>
        <div class="body-content">
          <h1 class="title" id="cause-title">Escolha uma Causa:</h1>

          <div v-for="cardCause in cardCauses" :key="cardCause.id">
            <CardCause :cardCause="cardCause"/>
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
        },
        {
          id: 2,
          name: "Meio Ambiente",
          image: require("../assets/vectors/home/avatar-meio-ambiente.svg"),
        },
        {
          id: 3,
          name: "Proteção Animal",
          image: require("../assets/vectors/home/avatar-protecao-animal.svg"),
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

#home {
  padding: 0 3.2rem;
  margin: 0 3.2rem;
  margin-bottom: 6.4rem;  max-width: 720px;
  justify-content: center;
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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.button-container #button-more {
  margin-bottom: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}


</style>