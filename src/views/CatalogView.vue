<template>
  <div class="layout">
    <BaseHeader />
    <div id="catalog" class="catalog">
      <div class="catalog__content">
        <ProductsListSection />
        <BenefitsSection />
      </div>
    </div>
    <SubscribeSection/>
    <BaseFooter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseSelect from "../components/inputs/BaseSelect.vue";
import BaseButton from "../components/buttons/BaseButton.vue";
import BaseInput from "../components/inputs/BaseInput.vue";
import BaseHeader from "../layout/BaseHeader.vue";
import BaseFooter from "../layout/BaseFooter.vue";
import BenefitsSection from "../sections/BenefitsSection.vue";
import ProductsListSection from "../sections/ProductsListSection.vue";
import SubscribeSection from "../sections/SubscribeSection.vue";

export default defineComponent({
  name: "Catalog",
  components: {
    BaseSelect,
    BaseButton,
    BaseInput,
    BaseHeader,
    BaseFooter,
    BenefitsSection,
    ProductsListSection,
    SubscribeSection,
  },

  setup() {
    return {
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.layout {
  padding: $header-h 0 0;

  .catalog {
    padding: 40px $horizontal-padding;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    @media screen and (min-width: $desktop) {
      max-width: $desktop;
      padding: 100px $horizontal-padding;;

      &__content {
        gap: 80px;
      }
    }
  }
}
</style>
