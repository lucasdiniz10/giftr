<template>
  <div class="q-pa-md q-gutter-y-sm" id="container">
    <q-toolbar class="text-primary" id="toolbar">
      <q-btn flat round dense icon="menu" id="menu-button" />
      <div class="logo-container">
        <img alt="Logo do Giftr" src="../assets/logo-giftr.svg" id="logo" />
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

<style>
:root {
  font-size: 60%;
}
#container {
  margin: 0;
  margin-bottom: 2.4rem;
  padding: 0;
  display: flex;
  height: 10vh;
  justify-content: center;
}

#toolbar {
  margin: 0;
  padding: 0.2rem;
  display: flex;
}

#menu-button {
  margin-left: 1rem;
  color: #3457dc;
}

.logo-container {
  margin: 0 auto;
}

#logo {
  height: 3rem;
}
</style>