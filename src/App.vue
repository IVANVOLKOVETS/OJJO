<template>
  <CatalogView />
</template>

<script>
import { defineComponent } from "vue";
import CatalogView from "./views/CatalogView.vue";

export default defineComponent({
  name: "App",
  components: {
    CatalogView,
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss">
h1 {
  color: aqua;
}
</style>
