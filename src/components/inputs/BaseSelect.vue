<template>
  <div
    ref="select"
    tabindex="0"
    @blur="closeSelect"
    @click="toggleDropdown"
    @keydown.space.prevent="toggleDropdown"
    :class="selectClass"
  >
    <p :title="selectedOption" class="select__value text-16-400">
      {{ selectedOption }}
    </p>

    <BaseIcon icon="triangle" class="select__icon" />

    <div v-show="isDropdownOpen" class="select__options">
      <p
        v-for="(option, index) in newOptions"
        :key="option.value"
        :value="option.value"
        :title="option.text"
        tabindex="0"
        :ref="(el) => (optionsRef[index] = el)"
        @click.stop="selectOption(option.text, option.value)"
        @blur="closeSelect"
        class="select__option text-16-400"
      >
        {{ option.text }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { SelectOptionsValidator } from "../../helpers/validators";
import BaseIcon from "../icons/BaseIcon.vue";

export default {
  emits: ["select"],
  components: {
    BaseIcon,
  },
  props: {
    options: {
      type: Array,
      required: true,
      validator: SelectOptionsValidator,
    },
    placeholder: {
      type: String,
      default: 'Select'
    }
  },
  setup(props, { emit }) {
    const select = ref(null);
    const optionsRef = ref({});
    const focusedOption = ref(0);
    const isDropdownOpen = ref(false);
    const selectedOption = ref(props.placeholder);

    const newOptions = computed(() => props.options);
    const selectClass = computed(() => {
      return {
        select: true,
        select_opened: isDropdownOpen.value,
      };
    });

    const toggleDropdown = (event) => {
      if (event && event.target.classList.contains("select__option")) {
        const text = event.target.attributes.title.value;
        const value = event.target.attributes.value.value
        selectOption(text, value)
        select.value.focus()
        return
      }
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const selectOption = (text, value) => {
      selectedOption.value = text;
      emit("select", value);
      console.log('hoba')
      
      closeSelect();
    };

    const closeSelect = (event) => {
      if (event && event.relatedTarget?.classList.contains("select__option")) {
        return;
      } else {
        isDropdownOpen.value = false;
      }
    };

    return {
      select,
      optionsRef,
      focusedOption,
      isDropdownOpen,
      selectedOption,
      newOptions,
      selectClass,
      toggleDropdown,
      closeSelect,
      selectOption,
    };
  },
};
</script>

<style lang="scss">
@import "/src/assets/styles/global/colors";

.select {
  display: flex;
  align-items: flex-start;
  width: 160px;
  height: 34px;
  padding-right: 14px;
  position: relative;
  border-bottom: 1px solid $border;
  cursor: pointer;

  &__icon {
    position: absolute;
    right: 0;
    top: 38%;
    transform: translateY(-38%);
    transition: all 0.3s ease;
  }

  &__value {
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: $primary;
    user-select: none;

    &:hover {
      opacity: 0.7;

      & + svg {
        opacity: 0.7;
      }
    }

    &:active {
      opacity: 0.3;

      & + svg {
        opacity: 0.3;
      }
    }
  }

  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: $bg;
    border: 1px solid $border;
    border-top: none;
    z-index: 2;
  }

  &__option {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    height: 34px;
    color: $primary;
    border-top: 1px solid $border;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.3;
    }

    &:focus-visible {
      box-shadow: inset 0 0 0 3px $primary;
    }
  }

  &_opened {
    .select__icon {
      transform: rotate(180deg);
    }
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 3px $primary;
  }
}
</style>
