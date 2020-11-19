<template>
  <div id="card">
    <q-card class="my-card">
      <div class="avatar-container">
        <img id="avatar" :alt="cardOng.name" :src="cardOng.image" />
      </div>

      <div class="card-button-container">
        <q-separator />
        <q-card-actions>
          <q-btn color="primary" id="cause-button" @click="card = true">{{ cardOng.name }}</q-btn>
        </q-card-actions>
      </div>
    </q-card>

    <!-- modal -->
    <div id="modal-ong">
<!--     <q-btn label="Card" color="primary" @click="card = true" /> -->
    <q-dialog v-model="card">
      <q-card class="my-card" id="modal">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="favorite"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center" id="modal-title-container">
            <div class="col text-h6 ellipsis" id="modal-title">
              {{ cardOng.name }}
            </div>
          </div>

          <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            {{ cardOng.description }}
          </div>
<!--           <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div> -->
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Doar" id="donate-button"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

  </div>
</template>

<script>
export default {
  name: "CardOng",

  data() {
    return {
      card: false,

      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
    }
  },

  props: {
    cardOng: Object,
  },
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

.avatar-container #avatar {
  width: 100%;
  max-width: 300px;
  min-width: 150px;
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

#modal {
  max-height none
}

#modal-title {
  font: 700 1.8rem Montserrat;
}

@media (min-width: 1024px) {
  .my-card {
    max-height: 250px;
    min-width: 200px;
    margin: 0;
  }

  .avatar-container {
    padding: 2.4rem;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

  .avatar-container #avatar {
    width: 50px;

  }

  #cause-button {
    padding: 0.4rem;
    margin: 1.2rem;
  }

  .text-subtitle1 {
    font: 400 1.4rem Montserrat;
  }
}
</style>