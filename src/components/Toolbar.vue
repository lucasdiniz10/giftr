<template>
  <div class="q-pa-md q-gutter-y-sm" id="container">
    <!-- tollbar para não logados -->
    <q-toolbar v-if="teste === false" class="text-primary" id="toolbar">
      <!-- menu mobile -->
      <div class="menu">
        <q-btn-dropdown flat round dense icon="menu" id="menu-button">
          <q-list class="menu-items">
            <!-- botão doar -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/">
                  <q-item-label class="label">Doar</q-item-label>
                </router-link>
              </q-item-section>
            </q-item>

            <!-- botão quem somos? -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/AboutUs"
                  ><q-item-label class="label"
                    >Quem Somos?</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>

            <!-- botão login -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/login"
                  ><q-item-label class="label"
                    >Entrar</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>

            <!-- botão cadastro -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/register"
                  ><q-item-label class="label"
                    >Cadastre-se</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="logo-container">
        <img
          alt="Logo do Giftr"
          src="../assets/logo-giftr.svg"
          id="logo"
          @click="$router.push('/')"
        />
      </div>

      <!-- menu desktop -->
      <div class="menu-desktop">
        <!-- botão doar -->
        <q-btn
          flat
          class="button-desktop"
          label="Doar"
          @click="$router.push('/')"
        />

        <!-- botão quem somos? -->
        <q-btn
          flat
          class="button-desktop"
          label="Quem Somos?"
          @click="$router.push('/AboutUs')"
        />

        <!-- botão login -->
        <q-btn
          flat
          class="button-desktop"
          label="Entrar"
          @click="$router.push('/login')"
        />

        <!-- botão cadastro -->
        <q-btn
          flat
          class="button-desktop"
          label="Cadastre-se"
          @click="$router.push('/register')"
        />
      </div>
    </q-toolbar>

    <!-- tollbar para usuários logados -->
    <q-toolbar v-else class="text-primary" id="toolbar">
      <!-- menu mobile -->
      <div class="menu">
        <q-btn-dropdown flat round dense icon="menu" id="menu-button">
          <q-list class="menu-items">
            <!-- botão doar -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/">
                  <q-item-label class="label">Doar</q-item-label>
                </router-link>
              </q-item-section>
            </q-item>

            <!-- botão Quem Somos? -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/AboutUs"
                  ><q-item-label class="label"
                    >Quem Somos?</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>

            <!-- botão minha conta -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="/user"
                  ><q-item-label class="label"
                    >Minha Conta</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>

            <!-- botão sair -->
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="label" @click="logout = true"
                  >Sair</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="logo-container">
        <img
          alt="Logo do Giftr"
          src="../assets/logo-giftr.svg"
          id="logo"
          @click="$router.push('/')"
        />
      </div>

      <!-- menu desktop -->
      <div class="menu-desktop">
        <!-- botão doar -->
        <q-btn
          flat
          class="button-desktop"
          label="Doar"
          @click="$router.push('/')"
        />

        <!-- botão quem somos? -->
        <q-btn
          flat
          class="button-desktop"
          label="Quem Somos?"
          @click="$router.push('/AboutUs')"
        />

        <!-- botão minha conta -->
        <q-btn
          flat
          class="button-desktop"
          label="Minha Conta"
          @click="$router.push('/user')"
        />

        <!-- botão sair -->
        <q-btn
          flat
          class="button-desktop"
          label="Sair"
          @click="logout = true"
        />
      </div>

      <!-- dialog box logout -->
      <q-dialog v-model="logout">
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              icon="sentiment_very_dissatisfied"
              color="primary"
              text-color="white"
            />
            <span class="q-ml-sm">Você deseja sair da sua conta?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" v-close-popup />
            <q-btn
              @click="onClick()"
              flat
              label="Sair"
              color="primary"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-toolbar>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Toolbar",

  data() {
    return {
      teste: Boolean,
      logout: false,
    };
  },

  methods: {
    onClick() {
      store.dispatch("auth/ActionSingOut");
      this.$router.push("/login");
    },
  },

  created() {
    if (!store.getters["auth/hasToken"]) {
      try {
        store.dispatch("auth/ActionCheckToken");

        console.log(store.getters["auth/hasToken"]);

        if (store.getters["auth/hasToken"]) {
          return (this.teste = true);
        } else {
          return (this.teste = false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
#container {
  margin: 0;
  margin-bottom: 2.4rem;
  padding: 0.2rem;
  display: flex;
  height: 10vh;
}

#toolbar {
  margin: 0;
  padding: 0.2rem;
}

.menu {
  position: absolute;
}

#menu-button {
  margin-left: 1rem;
  color: var(--color-primary);
}

.menu-items {
  font: 800 1.2rem Montserrat;
}

.label {
  color: var(--color-primary);
}

.logo-container {
  margin: 0 auto;
}

#logo {
  height: 3.5rem;
  cursor: pointer;
}

#label, a {
  text-decoration: none;
}

.menu-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .menu {
    display: none;
  }

  .menu-desktop {
    display: flex;
    justify-content: space-between;
  }

  .button-desktop {
    font: 700 1.2rem Montserrat;
    margin-left: 2rem;
    width: auto;
    height: 0%;
  }

  #toolbar {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 6.4rem;
    margin: 0 auto;
    margin-top: 3.2rem;
    max-width: 1440px;
  }

  .logo-container {
    margin: 0;
  }

  #logo {
    height: 5rem;
    cursor: pointer;
  }
}
</style>