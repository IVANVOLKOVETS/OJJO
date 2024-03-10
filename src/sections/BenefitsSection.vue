<template>
  <section class="benefits">
    <article class="benefits__article">
      <p class="benefits__text text-16-400" :class="textClass">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu
        commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla
        porttitor amet quam elit, mauris. Tortor egestas dignissim augue
        suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet
        faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et
        augue. Sed dignissim amet ut vitae at ornare sed. Commodo sagittis at
        amet faucibus faucibus id. Bibendum placerat convallis gravida eu
        quisque et augue. Sed dignissim amet ut vitae at ornare sed. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo
        porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor
        amet quam elit, mauris. Tortor egestas dignissim augue suspendisse
        rutrum pretium lobortis dolor. Commodo sagittis at amet
      </p>
      <BaseButton outlined class="benefits__more" @click.stop="toggleText">{{
        buttonText
      }}</BaseButton>
    </article>
    <div class="benefits__cards">
      <div class="benefits__cards-group">
        <div class="benefits__card">
          <BaseIcon icon="delivery" />
          <p class="benefits__name text-14-600">Бесплатная доставка</p>
        </div>
        <div class="benefits__card">
          <BaseIcon icon="list" />
          <p class="benefits__name text-14-600">Индивидуальный дизайн</p>
        </div>
      </div>

      <div class="benefits__cards-group">
        <div class="benefits__card">
          <BaseIcon icon="hanger" />
          <p class="benefits__name text-14-600">Бесплатная примерка</p>
        </div>
        <div class="benefits__card">
          <BaseIcon icon="earrings" />
          <p class="benefits__name text-14-600">Личный подход</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import BaseIcon from "../components/icons/BaseIcon.vue";
import BaseButton from "../components/buttons/BaseButton.vue";

export default {
  components: {
    BaseIcon,
    BaseButton,
  },
  props: {},

  setup(props) {
    const fullTextVisible = ref(false);
    const buttonText = computed(() =>
      fullTextVisible.value ? "СВЕРНУТЬ" : "ЧИТАТЬ ПОЛНОСТЬЮ"
    );
    const textClass = computed(() => {
      return {
        benefits__text_full: fullTextVisible.value,
      };
    });
    function toggleText() {
      fullTextVisible.value = !fullTextVisible.value;
    }
    return {
      buttonText,
      textClass,
      toggleText,
    };
  },
};
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.benefits {
  display: flex;
  gap: 50px;
  flex-wrap: wrap-reverse;
  justify-content: center;

  &__article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__text {
    position: relative;
    max-width: 540px;
    height: 240px;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      transition: all 0.3s ease;
      box-shadow: inset 0 -150px 50px -60px white;
    }

    &_full {
      height: auto;

      &::after {
        box-shadow: none;
      }
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 277px;
  }

  &__cards-group {
    display: flex;
    gap: 24px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 127px;
  }

  &__name {
    text-align: center;
  }

  @media screen and (min-width: $desktop) {
    &__article {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
