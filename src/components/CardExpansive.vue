<template>
  <div id="card-expansive">
    <div class="q-pa-md" id="card">
      <q-table :data="donate" row-key="ong" rows-per-page-label="Itens por página:"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardExpansive",

  data() {
    return {
      donate: [
        {
          ong: "AACD",
          valor: 1200,
          data: "10/02/2020",
        },
        {
          ong: "ECO D",
          valor: 300,
          data: "15/02/2020",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#card-expansive {
  font: 400 3.2rem Montserrat;
}

#card {
  padding: 0;
}
</style>