<template>
  <div id="card">
    <q-card class="my-card">
      <div class="avatar-container">
        <img :alt="cardCause.name" :src="cardCause.image"/>
      </div>

      <q-separator />

      <q-card-actions>
        <div class="card-button-container">
          <q-btn color="primary" id="cause-button">{{ cardCause.name }}</q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "CardCause",

  props: {
    cardCause: Object,
  }

};
</script>

<style lang="stylus" scoped>
#card {
  justify-content: center;
  text-align: center;
  font: 400 1.6rem Montserrat;
  width: 100%;
  margin-bottom 3.2rem;
}

.avatar-container {
  padding: 2.4rem;
  width: 100%;
  height: 25%vh;
  display: flex;
  justify-content: center;
}

.avatar-container img {
  width: 60%;
  max-width: 150px;
  min-width 100px
}

.card-button-container {
  width: 100%;
  margin: 1.2rem;
}

#cause-button {
  background: #3457dc;
  color: #ffffff;
  width: 100%;
  padding: 0.4rem;
}
</style>