<template>
  <q-layout view="lHh Lpr lFf">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Quicksand:wght@400;700&display=swap"
      rel="stylesheet"
    />


    <q-page-container>
      <Toolbar />
      <Home />
    </q-page-container>
  </q-layout>
</template>

<script>
import Home from "./pages/Home"
import Toolbar from "./components/Toolbar"

export default {
  name: "LayoutDefault",

  components: {
    Home,
    Toolbar,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
:root {
  font-size: 60%;
  }
</style>
