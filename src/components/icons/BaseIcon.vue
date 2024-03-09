<template>
  <component :is="currentIcon" v-bind="iconColor" class="icon" />
</template>

<script>
import { defineComponent, computed } from "vue";
import TriangleIcon from "./simple/TriangleIcon.vue";
import SearchIcon from "./simple/SearchIcon.vue";
import HeartIcon from "./simple/HeartIcon.vue";
import ProfileIcon from "./simple/ProfileIcon.vue";
import ListMarkerIcon from "./simple/ListMarkerIcon.vue";
import LogoIcon from "./simple/LogoIcon.vue";
import YouTubeIcon from "./simple/YouTubeIcon.vue";
import VkIcon from "./simple/VkIcon.vue";
import EtsyIconVue from "./simple/EtsyIcon.vue";
import FacebookIconVue from "./simple/FacebookIcon.vue";
import TelegramIconVue from "./simple/TelegramIcon.vue";

const SIMPLE_ICONS = {
  etsy: EtsyIconVue,
  facebook: FacebookIconVue,
  heart: HeartIcon,
  logo: LogoIcon,
  'list-marker': ListMarkerIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  telegram: TelegramIconVue,
  triangle: TriangleIcon,
  'you-tube': YouTubeIcon,
  vk: VkIcon,
};

export const DEFAULT_ICON_COLOR = "#333333";
export const SIMPLE_ICONS_LIST = Object.keys(SIMPLE_ICONS);

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: true,
      validator: (val) => SIMPLE_ICONS_LIST.includes(val),
    },
  },

  setup(props) {
    const currentIcon = computed(() => SIMPLE_ICONS[props.icon]);
    const iconColor = computed(() => {
      const colorProperty = "fill";

      return {
        [colorProperty]: props.color || DEFAULT_ICON_COLOR,
      };
    });

    return {
      currentIcon,
      iconColor,
    };
  },
});
</script>
