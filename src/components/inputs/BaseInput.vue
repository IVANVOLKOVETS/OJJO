<template>
  <div class="input" :class="inputClass">
    <label :for="props.id" class="input__label" :aria-label="props.label">
      <input
        v-model="value"
        v-bind="$attrs"
        :autocomplete="props.autocomplete"
        class="input__element text-14-500"
      />
    </label>
  </div>
</template>

<script>
import { ref, computed, defineComponent, watch } from "vue";

import { removeWhitespaces } from "../../helpers/text";

export default defineComponent({
  components: {},
  props: {
    autocomplete: {
      type: String,
      default: "off",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [Number, String, null],
      default: "",
    },
  },

  setup(props, { emit }) {
    const validatorError = ref(null);
    const changed = ref(false);

    const isError = computed(() => {
      return changed.value ? null : validatorError?.value || props.error;
    });

    const value = computed({
      get() {
        if (props.trim && typeof props.modelValue === "string") {
          return removeWhitespaces(props.modelValue);
        }

        return props.modelValue;
      },
      set(val) {
        let inputValue = val;
        if (props.trim && typeof inputValue === "string") {
          inputValue = removeWhitespaces(inputValue);
        }

        if (props.validator) {
          validatorError.value = props.validator(inputValue);
          emit("error", validatorError.value);
        }

        changed.value = !validatorError.value;

        emit("input", inputValue);
        emit("update:modelValue", inputValue);
      },
    });

    const inputClass = computed(() => ({
      input_error: !!isError.value,
      input_disabled: props.disabled,
    }));

    function clearInput() {
      value.value = "";
    }

    watch(
      () => props.error,
      () => {
        changed.value = false;
      }
    );

    return {
      props,

      validatorError,

      value,
      inputClass,
      isError,

      clearInput,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/colors";

.input {
  padding: 0 20px;
  border: 1px solid $border;
  width: 200px;
  user-select: none;

  &__label {
  }

  &__element {
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    background-color: transparent;
  }
}
</style>
