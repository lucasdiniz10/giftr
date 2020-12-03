<template>
  <div id="new-password">
    <Toolbar :key="keyRerender"/>
    <div class="container">
      <div class="content-container">
        <div class="header-container">
          <header>
            <h1 id="title">Nova Senha</h1>
            <p>Digite a senha desejada.</p>
          </header>
        </div>
        <div class="main-container">
          <main>
            <FormNewPassword />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormNewPassword from "../../../components/FormNewPassword";
import Toolbar from "../../../components/Toolbar.vue";
import axios from 'axios'

export default {
  name: "NewPassword",

  components: {
    FormNewPassword,
    Toolbar,
  },

  data() {
    return {
      keyRerender: 0,
    };
  },

  methods: {
    forceRerender() {
      this.keyRerender += 1;
    }
  },

  created() {
    this.forceRerender()
    axios
          /* .post("http://localhost:3333/users/session", this.user, {
            headers: {},
          })
          .then((res) => {
            console.log(res);
            this.ActionSetUser(res.data.user);
            this.ActionSetToken(res.data.token);
            this.$router.push("/user");
          })
          .catch((err) => {
            console.log(err.response.data);
            const getError = err.response.data.error;
      
            if (getError == "Password not match!") {
              this.user.submitStatus = "ERRORPASSWORD";
              this.$refs.password.$el.focus();
              console.log(getError);
            } else if (getError == "User not foud!") {
              this.user.submitStatus = "ERRORUSER";
              this.$refs.email.$el.focus();
              console.log(getError);
            } else {
              this.user.submitStatus = "PENDING";
              setTimeout(() => {
                this.user.submitStatus = "OK";
              }, 500);
            }
          }); */
  },
};
</script>

<style lang='stylus' scoped>
header {
  text-align: center;
  margin-bottom: 5rem;
  display: block;
  justify-content: center;
}

header #title {
  font: 800 3.2rem Montserrat;
}

@media (min-width: 1024px) {
  .content-container {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.2rem;
  }

  header {
    text-align: left;
    margin: 0;
  }

  header h1 {
    text-align: left;
  }
}
</style>