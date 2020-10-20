<template>
  <q-layout view="lHh Lpr lFf">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Quicksand:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <Toolbar />

    <router-view />

  </q-layout>
</template>

<script>
import Toolbar from "./components/Toolbar";

export default {
  name: "LayoutDefault",

  components: {
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

  --color-background: #e5e5e5;
  --color-primary: #3457dc;
  --color-secondary: #e93a57;
  --color-secondary-text-color: #637de1;
  --color-dark: #00160a;

  background: var(--color-background);
}

html,
body {
  height: 100vh;
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
</style>
