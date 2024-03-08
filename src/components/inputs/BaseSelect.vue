<template>
  <div
    ref="select"
    tabindex="0"
    @blur="closeSelect"
    @click="toggleDropdown"
    :class="selectClass"
  >
    <p :title="selectedOption" class="select__value text-16-400">
      {{ selectedOption }}
    </p>

    <BaseIcon icon="triangle" class="select__icon" />

    <div v-if="isDropdownOpen" class="select__options">
      <p
        v-for="option in newOptions"
        :key="option.value"
        :title="option.text"
        @click.stop="selectOption(option.value)"
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
  },
  setup(props, { emit }) {
    const select = ref(null);
    const isDropdownOpen = ref(false);
    const selectedOption = ref("Select an option option option option");
    const newOptions = computed(() => props.options);
    const selectClass = computed(() => {
      return {
        select: true,
        select_opened: isDropdownOpen.value,
      };
    });

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const selectOption = (value) => {
      selectedOption.value = value;
      emit("select", value);

      if (select.value) {
        select.value.blur();
      }
    };

    const closeSelect = () => {
      isDropdownOpen.value = false;
    };

    return {
      select,
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
  }

  &_opened {
    .select__icon {
      transform: rotate(180deg);
    }
  }
}
</style>
