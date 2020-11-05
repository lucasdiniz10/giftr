<template>
  <div id="card" >
    <q-card class="my-card">
      <div class="avatar-container">
        <img :alt="cause.name" :src="cause.image" />
      </div>

      <div class="card-button-container">
        <q-separator />
        <q-card-actions >
          <q-btn @click="onClick()" color="primary" id="cause-button">{{ cause.name }} </q-btn>
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

  data() {
    return {
      cause: this.cardCause,
    }
  },
  
  methods: {
    onClick(){

      var causeNames = [1, 2, 3, 4, 5, 6, 7, 8];
      var causeUrl = ['/saude', '/meioAmbiente']

      const doidera = this.cause.id;

      const self = this;

      causeNames.map(function(name){
        console.log('gordo')
        if (doidera == name){
          console.log(name - 1)
          self.$router.push(causeUrl[name - 1]);
        }
        
      })

      


      
      
    },
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