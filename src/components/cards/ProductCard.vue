<template>
  <article class="product-card">
    <div class="product-card__image">
      <img :src="props.imageSrc" :alt="props.name" />
    </div>
    <div class="product-card__info">
      <p class="product-card__category text-16-400">{{ props.category }}</p>
      <h4 class="product-card__brand text-24-600">{{ props.name }}</h4>
      <BaseButton small>{{ getPriceWithCurrency(props.price) }}</BaseButton>
    </div>
  </article>
</template>

<script>
import { defineComponent } from "vue";

import BaseButton from "../buttons/BaseButton.vue";

export default defineComponent({
  name: "Product Card",

  components: {
    BaseButton,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: [String, null],
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    //Move this to the separate folder helpers
    const formatCurrency = (number) => {
      const formatter = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
      });
      return formatter.format(number);
    };

    function getPriceWithCurrency(price) {
      const number = Number(price);
      return formatCurrency(number)
    }
    return {
      props,
      getPriceWithCurrency,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  gap: 18px;

  &__image {
    max-width: 280px;

    img {
      max-width: 280px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: $primary;
  }
}
</style>
