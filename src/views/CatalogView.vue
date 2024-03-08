<template>
  <h1>OJJO JEWELRY</h1>
  <BaseSelect :options="selectOptions"/>
</template>

<script>
import { defineComponent, ref } from "vue";
import BaseSelect from "../components/inputs/BaseSelect.vue";

export default defineComponent({
  name: "Catalog",
  components: {
    BaseSelect,
  },

  setup() {
    const selectOptions = [
        {text: "option1 option1 option1 option1 option1", value: "option1"},
        {text: "option2", value: "option2"},
        {text: "option3", value: "option3"},
    ]
    return {
        selectOptions
    };
  },
});
</script>

<style lang="scss">
h1 {
  color: aqua;
}
</style>
