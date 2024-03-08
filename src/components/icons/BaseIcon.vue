<template>
  <component :is="currentIcon" v-bind="iconColor" class="icon" />
</template>

<script>
import { defineComponent, computed } from "vue";
import TriangleIcon from "./simple/TriangleIcon.vue";

const SIMPLE_ICONS = {
  triangle: TriangleIcon
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
