<template>
  <div>
    <h2>{{ appel.pseudo }}</h2>
    <span>{{ appel.numero }}</span>
    <span>{{ appel.heure }}</span>
    <button @click="lancerAppel" type="submit">appeler</button>
  </div>
</template>
<script>
export default {
  name: "CarteAppel",
  props: ["appel"],
  methods: {
    lancerAppel() {
      this.$emit("lancerAppel", {
        pseudo: this.appel.pseudo,
        numero: this.appel.numero,
        heure: new Date().toLocaleString(),
      });
    },
  },
};
</script>
<style scoped>
div {
  margin: 10px;
  width: 350px;
  height: 50px;
  background-color: #42b983;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
h2 {
  display: flex;
  align-items: center;
  font-size: 15px;
}
span {
  display: flex;
  align-items: center;
  font-size: 10px;
}
</style>
