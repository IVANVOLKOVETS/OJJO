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
import EmailIcon from "./simple/EmailIcon.vue";
import TelephoneIcon from "./simple/TelephoneIcon.vue";
import VisaIcon from "./simple/VisaIcon.vue";
import MasterCardIcon from "./simple/MasterCardIcon.vue";
import DeliveryIcon from "./simple/DeliveryIcon.vue";
import EarringsIcon from "./simple/EarringsIcon.vue";
import HangerIcon from "./simple/HangerIcon.vue";
import ListIcon from "./simple/ListIcon.vue";

const SIMPLE_ICONS = {
  delivery: DeliveryIcon,
  earrings: EarringsIcon,
  etsy: EtsyIconVue,
  email: EmailIcon,
  facebook: FacebookIconVue,
  hanger: HangerIcon,
  heart: HeartIcon,
  list: ListIcon,
  logo: LogoIcon,
  'list-marker': ListMarkerIcon,
  mastercard: MasterCardIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  telegram: TelegramIconVue,
  telephone: TelephoneIcon,
  triangle: TriangleIcon,
  'you-tube': YouTubeIcon,
  visa: VisaIcon,
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
