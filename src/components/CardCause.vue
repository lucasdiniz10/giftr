<template>
  <div id="card" >
    <q-card class="my-card">
      <div class="avatar-container">
        <img :alt="cardCause.name" :src="cardCause.image" />
      </div>

      <div class="card-button-container">
        <q-separator />
        <q-card-actions >
          <q-btn @click="onClick" color="primary" id="cause-button">{{ cardCause.name }}</q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script>

export default {
  name: "CardCause",

  props: {
    cardCause: Object,
  },
  
  methods: {
    onClick(){
      this.$router.push("/Ongs", );
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-card {
  justify-content: center;
  text-align: center;
  font: 400 1.6rem Montserrat;
  width: 100%;
  margin-bottom: 3.2rem;
}

.avatar-container {
  padding: 2.4rem;
  width: 100%;
  height: 25% vh;
  display: flex;
  justify-content: center;
}

.avatar-container img {
  width: 60%;
  max-width: 150px;
  min-width: 100px;
}

.card-button-container {
  width: 100%;
}

#cause-button {
  background: #3457dc;
  color: #ffffff;
  width: 100%;
  padding: 0.4rem;
  margin: 1.2rem;
}

@media (min-width: 1024px) {
  .my-card {
    max-height: 250px;
    min-width 200px
    margin 0
  }

  .avatar-container {
    padding: 2.4rem;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

  #cause-button {
    padding: 0.4rem;
    margin: 1.2rem;
  }
}
</style>