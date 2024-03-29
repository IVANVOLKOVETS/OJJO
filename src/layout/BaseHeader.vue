<template>
  <header class="header" tabindex="0">
    <div class="header__content">
      <nav class="header__nav">
        <a
          href="#"
          target="_blank"
          tabindex="0"
          class="header__link text-14-400"
        >
          Контрагентам
        </a>
        <a
          href="#"
          target="_blank"
          tabindex="0"
          class="header__link text-14-400"
        >
          Дизайнерам
        </a>
        <a
          href="#"
          target="_blank"
          tabindex="0"
          class="header__link text-14-400"
        >
          Вакансии
        </a>
      </nav>

      <BaseIcon class="header__logo" icon="logo" />

      <div class="header__controls">
        <div class="header__search">
          <BaseButton class="header__search-button" icon="search" text
            >Поиск</BaseButton
          >
        </div>
        <BaseButton class="header__auth-button" text
          >Вход/Регистрация</BaseButton
        >
        <BaseButton
          class="header__profile-button"
          icon="profile"
          text
        ></BaseButton>
        <BaseButton
          class="header__favorites-button"
          icon="heart"
          text
        ></BaseButton>
      </div>

      <div
        tabindex="0"
        id="toggle-sidebar"
        class="header__menu-button"
        :class="showSidebarClass"
        @click.stop="toggleSidebar"
        @keydown.space.prevent="toggleSidebar"
      >
        <span></span>
      </div>

      <Teleport v-if="isMounted" to="#catalog">
        <BaseSidebar :show-sidebar="showSidebar" @close="closeSidebar" />
      </Teleport>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, reactive, computed, onMounted } from "vue";
import BaseSelect from "../components/inputs/BaseSelect.vue";
import BaseButton from "../components/buttons/BaseButton.vue";
import BaseInput from "../components/inputs/BaseInput.vue";
import BaseIcon from "../components/icons/BaseIcon.vue";
import BaseSidebar from "../components/sidebar/BaseSidebar.vue";

export default defineComponent({
  name: "Header",
  components: {
    BaseSelect,
    BaseButton,
    BaseInput,
    BaseIcon,
    BaseSidebar,
  },

  setup(props) {
    const state = reactive({
      email: "",
    });
    const selectOptions = [
      { text: "option1 option1 option1 option1 option1", value: "option1" },
      { text: "option2", value: "option2" },
      { text: "option3", value: "option3" },
    ];

    const showSidebar = ref(false);

    const showSidebarClass = computed(() =>
      showSidebar.value ? "opened" : ""
    );
    function toggleSidebar() {
      showSidebar.value = !showSidebar.value;
      console.log("toggle sidebar");
    }

    function closeSidebar() {
      console.log("close sidebar");
      showSidebar.value = false;
    }
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return {
      isMounted,
      showSidebar,
      showSidebarClass,
      selectOptions,
      state,
      toggleSidebar,
      closeSidebar,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 21;
  height: $header-h;
  padding: 0 $horizontal-padding;
  background-color: $primary;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    max-width: 100%;
    flex-grow: 1;
  }

  &__nav {
    display: none;
    justify-content: space-between;
    gap: 16px;
    max-width: 321px;
    flex-grow: 1;
  }

  &__link {
    color: $bg;
    white-space: nowrap;
    user-select: none;

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

  &__controls {
    display: none;
    justify-content: space-between;
    gap: 16px;
    max-width: 321px;
    flex-grow: 1;
  }

  &__menu-button {
    position: relative;
    display: flex;
    width: 30px;
    height: 20px;
    user-select: none;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.3;
    }

    &:focus-visible {
      box-shadow: inset 0 0 0 1px $border;
    }

    span {
      display: block;
      background-color: $bg;
      position: absolute;
      width: 60%;
      height: 4px;
      left: 0;
      top: 9px;
      transition: all 0.3s ease 0s;
      border-radius: 8px;
    }

    &:before,
    &:after {
      content: "";
      background-color: $bg;
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      transition: all 0.3s ease 0s;
      border-radius: 8px;
    }
    &:before {
      top: -2px;
    }
    &:after {
      bottom: -5px;
    }
  }

  &__menu-button.opened {
    span {
      transform: scale(0);
    }

    &:before {
      transform: rotate(45deg);
      top: 8px;
    }
    &:after {
      transform: rotate(-45deg);
      bottom: 8px;
    }
  }

  @media screen and (min-width: $desktop) {
    padding: 0 $desktop-horizontal-padding;

    &__content {
      max-width: $desktop;
      flex-grow: 1;
    }

    &__nav {
      display: flex;
    }

    &__controls {
      display: flex;

      svg {
        width: 16px;
      }
    }

    &__menu-button {
      display: none;
    }
  }
}
</style>
