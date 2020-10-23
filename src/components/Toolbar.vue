<template>
  <div class="q-pa-md q-gutter-y-sm" id="container">
    <q-toolbar class="text-primary" id="toolbar">
      <div class="menu">
        <q-btn-dropdown flat round dense icon="menu" id="menu-button">
          <q-list class="menu-items">
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="label">Doar</q-item-label>
              </q-item-section>
            </q-item>
            <hr />
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="AboutUs"
                  ><q-item-label class="label"
                    >Quem Somos?</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>
            <hr />
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="Login"
                  ><q-item-label class="label"
                    >Entrar</q-item-label
                  ></router-link
                >
              </q-item-section>
            </q-item>
            <hr />
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link to="Register"
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

      <div class="menu-desktop">
        <q-btn
          class="button-desktop"
          label="Doar"
        />

        <router-link to="AboutUs">
          <q-btn
            class="button-desktop"
            label="Quem Somos?"
          />
        </router-link>

        <router-link to="Login">
          <q-btn
            class="button-desktop"
            label="Entrar"
          />
        </router-link>

        <router-link to="Register">
          <q-btn
            class="button-desktop"
            label="Cadastre-se"
          />
        </router-link>
      </div>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
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
    justify-content space-between
  }

  .button-desktop {
    font: 800 1.2rem Montserrat;
    color: var(--color-primary);
    
  }

  #toolbar {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 6.4rem;
    margin-top: 3.2rem;
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