import { defineStore } from "pinia";
export const useWebsiteStore = defineStore("websiteStore", {
  state: () => ({
    name: "",
    description: "",
  }),
  actions: {
    async fetch() {
      const infos = await $fetch("https://api.nuxt.com/modules/pinia");

      console.log("infos", infos);

      this.name = infos.name;
      this.description = infos.description;
    },
  },
});
