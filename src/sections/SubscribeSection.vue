<template>
  <section class="subscribe">
    <div class="subscribe__content">
      <h3 class="subscribe__sub-heading text-21-400">
        Полезные советы и персональные предложения
      </h3>
      <h2 id="form-heading" class="subscribe__heading text-notoserif">
        Эксклюзивная рассылка
      </h2>

      <div class="subscribe__offer">
        <ul class="subscribe__benefits">
          <li><BaseIcon icon="list-marker" />Личный менеджер</li>
          <li><BaseIcon icon="list-marker" />Доставка и оформление</li>
          <li><BaseIcon icon="list-marker" />Индивидуальный дизайн</li>
        </ul>
        <form
          @submit.prevent="subscribe"
          aria-labelledby="form-heading"
          class="subscribe-form"
        >
          <div class="subscribe-form__content">
            <BaseInput
              v-model="state.email"
              type="email"
              required
              placeholder="ВАШ E-MAIL"
            />
            <BaseButton type="submit">Отправить</BaseButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import BaseButton from "../components/buttons/BaseButton.vue";
import BaseInput from "../components/inputs/BaseInput.vue";
import BaseIcon from "../components/icons/BaseIcon.vue";

export default defineComponent({
  name: "Catalog",
  components: {
    BaseButton,
    BaseInput,
    BaseIcon,
  },

  setup() {
    const state = reactive({
      email: "",
    });

    async function subscribe() {
      const url = `https://example.com/subscribe`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: state.email,
        });

        if (!response.ok) {
          throw new Error("Ошибка при отправке запроса");
        }

        const data = await response.json();

        console.log("Успешно подписаны:", data);
      } catch (error) {
        console.error("Произошла ошибка:", error.message);
      }
    }

    return {
      state,
      subscribe,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.subscribe {
  display: flex;
  justify-content: center;
  background-image: url(../../public/images/Background.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px $horizontal-padding;
  user-select: none;
  color: $bg;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__sub-heading {
    text-align: center;
    margin-bottom: 16px;
  }

  &__heading {
    margin-bottom: 24px;
  }

  &__offer {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    width: 100%;
    max-width: 770px;
  }

  &-form {
    padding: 12px;
    border: 1px solid $bg;
  }

  &-form__content {
    padding: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: $bg;
    gap: 16px;
  }

  &__benefits {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media screen and (min-width: $desktop) {
    padding: 80px $desktop-horizontal-padding;

    &__content {
      max-width: $desktop;
      flex-grow: 1;
    }

    &__offer {
      gap: 80px;
    }

    &__heading {
      margin-bottom: 48px;
    }
  }
}
</style>
