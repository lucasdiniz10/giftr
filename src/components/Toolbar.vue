<template>
  <div class="q-pa-md q-gutter-y-sm" id="container">
    <q-toolbar class="text-primary" id="toolbar">
      <div class="menu">
        <q-btn-dropdown flat round dense icon="menu" id="menu-button">
          <q-list class="menu-items">
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Doar</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Quem Somos?</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Entar</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Cadastre-se</q-item-label> 
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- <q-btn flat round dense icon="menu" id="menu-button" /> -->
      <div class="logo-container">
        <a href="">
          <img alt="Logo do Giftr" src="../assets/logo-giftr.svg" id="logo" />
        </a>
      </div>
      <!-- <q-btn flat round dense icon="more_vert" /> -->
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
  padding: 0;
  display: flex;
  height: 10vh;
}

#toolbar {
  margin: 0;
  padding: 0.2rem;
}

#menu-button {
  margin-left 1rem;
  color var(--color-primary);
}

.menu-items {
  font 800 1.2rem Montserrat;
  color var(--color-primary);
}

.logo-container {
  margin: 0 auto;
}

#logo {
  height: 3rem;
}

</style>