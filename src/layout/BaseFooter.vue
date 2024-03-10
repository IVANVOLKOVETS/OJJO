<template>
  <footer class="footer">
    <div class="footer__content">
      <nav class="footer__item">
        <h3 class="text-18-500">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
        <ul class="footer__nav">
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="footer__link text-14-400"
            >
              Доставка
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="footer__link text-14-400"
            >
              Оплата
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="footer__link text-14-400"
            >
              Акции
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="footer__link text-14-400"
            >
              Политика конфиденциальности
            </a>
          </li>
        </ul>
      </nav>
      <div class="footer__item">
        <h3 class="text-18-500">ОПЛАТА</h3>
        <p class="text-14-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          justo, nec, pellentesque.
        </p>
        <div class="payment-systems">
          <BaseIcon icon="visa" />
          <BaseIcon icon="mastercard" />
        </div>
      </div>
      <div class="footer__item">
        <h3 class="text-18-500">КОНТАКТЫ</h3>
        <div class="footer-contacts">
          <div
            v-for="contact in CONTACTS_LIST"
            class="footer-contacts__item text-14-400"
            :key="contact.key"
          >
            <BaseIcon :icon="contact.key" />
            <a :href="contact.href" class="text-14-400">{{ contact.text }}</a>
          </div>
        </div>
      </div>
      <div class="footer__item">
        <h3 class="text-18-500">СОЦИАЛЬНЫЕ СЕТИ</h3>
        <p class="text-14-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          justo, nec, pellentesque.
        </p>
        <MediaLinksList primary />
      </div>
      <ul class="footer__legal">
        <li class="text-14-400">(c) 2020 OJJO jewelry</li>
        <li>
          <a
            href="#"
            target="_blank"
            tabindex="0"
            class="footer__link text-14-400"
          >
            Договор публичной офферты
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            tabindex="0"
            class="footer__link text-14-400"
          >
            Контрагентам
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/"
            target="_blank"
            tabindex="0"
            class="footer__link text-14-600"
          >
            Сделано Figma.info
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import MediaLinksList from "../components/media/MediaLinksList.vue";
import BaseIcon from "../components/icons/BaseIcon.vue";

const CONTACTS_LIST = [
  {
    key: "telephone",
    href: "tel:8 (812) 234-56-55",
    text: "8 (812) 234-56-55",
  },
  {
    key: "telephone",
    href: "tel:8 (812) 234-56-55",
    text: "8 (812) 234-56-55",
  },
  {
    key: "email",
    href: "mailto:ojjo@ojjo.ru",
    text: "ojjo@ojjo.ru",
  },
];

export default {
  components: {
    MediaLinksList,
    BaseIcon,
  },
  setup() {
    return {
      CONTACTS_LIST,
    };
  },
};
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.footer {
  display: flex;
  justify-content: center;
  background-color: $bg;
  padding: 40px $horizontal-padding 24px;
  user-select: none;

  a {
    user-select: none;
    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.3;
    }

    &:focus-visible {
      box-shadow: inset 0 0 0 1px $primary;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    max-width: 100%;
    flex-grow: 1;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 255px;

    h3 {
      padding-bottom: 6px;
      border-bottom: 1px solid $primary;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__legal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    border-top: 1px solid $primary;

    li {
      white-space: nowrap;
    }
  }

  &-contacts {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__item {
      display: flex;
      align-items: center;
      gap: 16px;

      svg {
        width: 20px;
      }
    }
  }

  .payment-systems {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: $tablet) {
    &__content {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    &__legal {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: $desktop) {
    padding: 60px $desktop-horizontal-padding 24px;

    &__content {
      max-width: $desktop;
      flex-grow: 1;
    }
  }
}
</style>
