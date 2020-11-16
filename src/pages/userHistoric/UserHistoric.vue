<template>
  <div class="container" id="user-historic">
    <div class="content-container">
      <div class="header-container">
        <header>
          <h1 id="title">Suas Doações!</h1>
          <p>Histórico:</p>
        </header>
      </div>
      <div class="body-container">
        <body>
          <CardExpansive />
        </body>
      </div>
    </div>
  </div>
</template>

<script>
import CardExpansive from "../../components/CardExpansive"

export default {
  name: "UserHistoric",

  components: {
    CardExpansive,
  },

  data() {
    return {
      
    }
  },
}
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

@media (min-width: 1024px) {
  .content-container {
    margin-top 120px
/*     display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap  3.2rem */
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
}
</style>