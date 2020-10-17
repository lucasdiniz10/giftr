<template>
  <div id="card">
    <q-card class="my-card">
      <div class="avatar">
        <img alt="Saúde" src="../assets/vectors/home/avatar-saude.svg" />
      </div>

      <q-separator />

      <q-card-actions>
        <div class="card-button-container">
          <q-btn color="primary" id="cause-button">{{ title }}</q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "CardCause",
  data() {
    return {
      id: 1,
      title: "Saúde",
    };
  },
};
</script>

<style>
#card {
  justify-content: center;
  text-align: center;
  font: 400 1.6rem Montserrat;
  width: 100%;
}

.avatar {
  padding: 3.2rem;
}

.avatar img {
  width: 60%;
  max-width: 150px;
}

.card-button-container {
  width: 100%;
  margin: 1.2rem;
}

#cause-button {
  background: #3457dc;
  color: #ffffff;
  width: 100%;
}
</style>