<template>
  <q-page class="flex flex-center">
    <link rel="stylesheet" href="../styles/colors.css" />

    <header>
      <div class="content">
        <div id="header-text">
          <h1 class="title">
            Bem-vindo ao <span>giftr</span>, sua plataforma de doações.
          </h1>
          <p>
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
      </div>
    </header>

    <body>
      <div class="content">
        <h1 class="title">Escolha uma Causa:</h1>
      </div>
    </body>
  </q-page>
</template>

<script>
export default {
  name: "Home",
};
</script>



<style>
:root {
  font-size: 60%;
}

body {
  background: #e5e5e5;
}

.content {
  padding: 0 3.2rem;
  margin: 0 3.2rem;
  margin-bottom: 6.4rem;
  justify-content: center;
}

header img {
  display: block;
  margin-top: 6.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3.2rem;
  width: 90%;
}

#header-text {
  color: #00160a;
  text-align: center;
}

.title {
  font: 800 3.2rem Montserrat;
}
header h1 span {
  color: #3457dc;
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