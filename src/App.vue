<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Quicksand:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <!-- <Toolbar /> -->
    </q-page-container>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

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
  --color-light: #ffffff;

  background: var(--color-background);
}

html,
body {
  height: 100vh;
}

.container {
  padding: 0 3.2rem;
  margin: 0 auto;
  margin-bottom: 6.4rem;  max-width: 720px;
  justify-content: center;
  font: 400 1.6rem Montserrat;
}

@media (min-width: 840px) {
  :root {
    font-size: 62.5%;
  }

  .container {
    padding: 0 8.6rem;
    max-width: 1100px;
  }
}
</style>
