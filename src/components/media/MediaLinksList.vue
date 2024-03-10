<template>
  <ul class="media" :class="mediaLinksClass">
    <li v-for="link in MEDIA_LINKS_LIST" :key="link.key">
      <a
        :href="link.href"
        target="_blank"
        tabindex="0"
        class="media__link text-21-400"
      >
        <BaseIcon :icon="link.key" />
      </a>
    </li>
  </ul>
</template>

<script>
import { computed, ref } from "vue";
import BaseIcon from "../icons/BaseIcon.vue";

const MEDIA_LINKS_LIST = [
  {
    key: "you-tube",
    href: "https://www.youtube.com/",
  },
  {
    key: "vk",
    href: "https://vk.com/id85052677",
  },
  {
    key: "facebook",
    href: "https://www.facebook.com/",
  },
  {
    key: "telegram",
    href: "https://t.me/IvanVolkovets",
  },
  {
    key: "etsy",
    href: "https://www.etsy.com/",
  },
];

export default {
  components: {
    BaseIcon,
  },
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const mediaLinksClass = computed(() => {
      return {
        media_style_primary: props.primary,
      };
    });

    return {
      MEDIA_LINKS_LIST,
      mediaLinksClass,
    };
  },
};
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.media {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;

  &__link {
    display: flex;

    svg {
      height: 36px;
      width: 40px;
      fill: $bg;
    }

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.3;
    }

    &:focus-visible {
      box-shadow: inset 0 0 0 1px $border;
    }
  }

  &_style_primary {
    .media__link {
      svg {
        fill: $primary;
        width: 26px;
        height: 26px;
      }

      &:focus-visible {
        box-shadow: inset 0 0 0 1px $primary;
      }
    }
  }
}
</style>
