<template>
  <div id="about-us">
    <div id="card" v-for="(user, index) in users" :key="index">
      <q-card class="my-card">
        <div class="avatar-container">
          <a>{{ user.name }}</a>
          <q-separator />
          <a>{{ user.email }}</a>
          <q-separator />
          <a>{{ user.password }}</a>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },

  beforeMount() {
    axios
      .get("http://localhost:3333/users")
      .then((res) => {
        console.log(res.data.User[1].email);
        this.$data.users = res.data.User
        console.log(this.users);
      })
      .catch((error) => {
        console.log(error);
      });

    
  },
};
</script>

<style lang="stylus" scoped>
#card {
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
  margin: 1.2rem;
}

#cause-button {
  background: #3457dc;
  color: #ffffff;
  width: 100%;
  padding: 0.4rem;
}

@media (min-width: 840px) {
  .my-card {
    max-height: 250px;
    min-height: 250px;
  }

  .avatar-container {
    padding: 2.4rem;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

  #cause-button {
    margin: auto;
  }
}
</style>