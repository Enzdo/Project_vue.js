import { createStore } from "vuex";

export default createStore({
  state: {
    compteur: 0,
    personnages: [
      {
        pseudo: " Marc",
        numero: " 06 07 05 04 04",
      },
      {
        pseudo: " Enzo",
        numero: " 06 07 05 04 04",
      },
      {
        pseudo: " Arthur",
        numero: " 06 07 05 04 04",
      },
    ],
    called: [
      {
        pseudo: "inconnu",
        numero: " 06 07 05 04 04",
        Heure: "",
      },
      {
        pseudo: " inconnu",
        numero: " 06 5 04 04",
        Heure: "",
      },
      {
        pseudo: " inconnu",
        numero: " 06 07 05 04 04",
        Heure: "",
      },
    ],
  },
  getters: {},
  mutations: {
    call(state, called) {
      state.called.push(called);
    },
    ajoutPerso(state, personnages) {
      state.personnages.push(personnages);
    },
  },
  actions: {},
  modules: {},
});
