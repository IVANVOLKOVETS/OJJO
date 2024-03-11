<template>
  <Transition name="sidebar">
    <aside
      v-show="show"
      class="sidebar"
      tabindex="0"
      @blur="onBlur"
      ref="sidebar"
    >
      <nav>
        <ul class="sidebar__nav">
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="sidebar__link text-21-400"
            >
              Контрагентам
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="sidebar__link text-21-400"
            >
              Дизайнерам
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="sidebar__link text-21-400"
            >
              Вакансии
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              tabindex="0"
              class="sidebar__link text-21-400"
            >
              Вход/Регистрация
            </a>
          </li>
        </ul>
      </nav>

      <div class="sidebar__controls">
        <BaseButton
          class="sidebar__profile-button"
          icon="profile"
          text
        ></BaseButton>
        <BaseButton
          class="sidebar__favorites-button"
          icon="heart"
          text
        ></BaseButton>
      </div>
      <MediaLinksList />
    </aside>
  </Transition>
</template>

<script>
import { defineComponent, ref, computed, watch, nextTick } from "vue";
import BaseButton from "../buttons/BaseButton.vue";
import BaseIcon from "../icons/BaseIcon.vue";
import MediaLinksList from "../media/MediaLinksList.vue";

export default defineComponent({
  emits: ["close"],

  components: {
    BaseButton,
    BaseIcon,
    MediaLinksList,
  },

  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const sidebar = ref(null);
    const show = computed(() => props.showSidebar);

    function closeSidebar() {
      emit("close");
    }

    function onBlur(event) {
      if (
        event.relatedTarget instanceof HTMLElement &&
        event.relatedTarget.id !== "toggle-sidebar" &&
        !event.relatedTarget.classList.contains("sidebar__link")
      ) {
        emit("close");
      } else {
        console.log("focus sidebar");
        // sidebar.value?.focus()
      }
    }

    watch(
      () => show.value,
      (newValue) => {
        console.log("sidebar");
        if (newValue) {
          console.log("truthy");

          console.log(newValue);
          nextTick(() => sidebar.value?.focus());
        }
      }
    );

    return {
      sidebar,
      show,
      closeSidebar,
      onBlur,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.sidebar {
  position: fixed;
  z-index: 20;
  height: calc(100dvh - 110px);
  top: $header-h;
  left: 0;
  right: 0;
  transition: all 1s ease;
  padding: 16px 24px 64px;
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  transition: all 0.3s ease-out;
  overflow: auto;
  background: $primary;

  &__nav {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $border;
  }

  &__link {
    display: block;
    width: 100%;
    color: $bg;
    white-space: nowrap;
    user-select: none;
    padding: 0 0 36px;

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
    display: flex;
    gap: 32px;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid $border;

    svg {
      width: 40px;
    }
  }

  .media {
    max-width: 305px;
  }
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media screen and (min-width: $tablet) {
  .sidebar-wrapper {
    justify-content: center;

    .sidebar {
      max-width: 709px;

      &-controls {
      }
    }
  }
}

@media screen and (min-width: $desktop) {
  .sidebar {
    display: none;
  }
}
</style>
