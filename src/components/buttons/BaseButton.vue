<template>
  <button
    class="button"
    :class="buttonClass"
    :disabled="disabled"
    @focus="onFocus"
    @blur="onBlur"
  >
    <div class="button__content">
      <span :class="buttonTextClass">
        <slot />
      </span>
    </div>
  </button>
</template>

<script>
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const isFocus = ref(false);

    const buttonClass = computed(() => ({
      button: true,
      button_small: props.small,
      button_large: props.large,
      button_style_outlined: props.outlined,
    }));

    const buttonTextClass = computed(() => ({
      button__text: true,
      "text-14-500": props.small,
      "text-18-400": !props.small && !props.large,
      "text-18-500": props.large || props.outlined,
    }));

    function onFocus() {
      isFocus.value = true;
    }

    function onBlur() {
      isFocus.value = false;
    }

    return {
      buttonClass,
      buttonTextClass,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/colors";

.button {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 35px;
  background-color: $primary;
  cursor: pointer;

  &__text {
    color: $bg;
    user-select: none;
  }

  &_small {
    height: 41px;
    padding: 0 20px;
  }

  &_large {
    height: 51px;
    padding: 0 35px;
  }

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.3;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 3px $border;
  }

  &_style_outlined {
    height: 26px;
    background-color: transparent;
    border-bottom: 1px dashed $primary;
    padding: 0;

    .button__text {
      color: $primary;
    }

    &:focus-visible {
      box-shadow: inset 0 0 0 3px $primary;
    }
  }
}
</style>
