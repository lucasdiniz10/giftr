<template>
  <div class="container" id="user-total">
    <div class="content-container">
      <div class="header-container">
        <header>
          <h1 id="title">Valor total das suas doações!</h1>
          <p>Juntando cada uma delas, você ajudou ao próximo com: </p>
        </header>
      </div>
      <div class="body-container">
        <body>
          <h1 id="valor">R$ {{ valor }}</h1>
        </body>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserTotal",
  
  data() {
    return {
      valor: "122,90"
    }
  }
};
</script>
  
<style lang="stylus" scoped>
  header {
  text-align: center;
  margin-bottom: 5rem;
  display: block;
  justify-content: center;
}

header #title {
  font: 800 3.2rem Montserrat;
}

p {
  margin-bottom 6.4rem
}

#valor {
  font: 800 6.4rem Montserrat;
  text-align center
}

@media (min-width: 1024px) {
  .content-container {
    margin-top 120px
  }

  header {
    text-align: left;
    margin 0;
  }

  header h1 {
    text-align: left;
  }

  .body-content {
    margin-top: 200px;
  }

  #valor {
    text-align left 
  }
}
</style>