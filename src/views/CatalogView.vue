<template>
  <div id="catalog" class="catalog">
    <BaseHeader />
  </div>

  <!-- <BaseSelect :options="selectOptions"/>
  <BaseButton>Base Button</BaseButton>
  <BaseButton small>Base Button</BaseButton>
  <BaseButton large>Base Button</BaseButton>
  <BaseButton outlined>Base Button</BaseButton>
  <BaseButton icon="heart" text />
  <BaseButton icon="search" text>Поиск</BaseButton> -->

  <!-- <BaseInput v-model="state.email" placeholder="ВАШ E-MAIL"/> -->
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import BaseSelect from "../components/inputs/BaseSelect.vue";
import BaseButton from "../components/buttons/BaseButton.vue";
import BaseInput from "../components/inputs/BaseInput.vue";
import BaseHeader from "../layout/BaseHeader.vue";

export default defineComponent({
  name: "Catalog",
  components: {
    BaseSelect,
    BaseButton,
    BaseInput,
    BaseHeader,
  },

  setup() {
    const state = reactive({
      email: "",
    });
    const selectOptions = [
      { text: "option1 option1 option1 option1 option1", value: "option1" },
      { text: "option2", value: "option2" },
      { text: "option3", value: "option3" },
    ];
    return {
      selectOptions,
      state,
    };
  },
});
</script>

<style lang="scss"></style>
