<template>
  <section class="products">
    <div class="products__filters-control">
      <BaseButton outlined @click.stop="toggleFilters">{{
        toggleFiltersButtonText
      }}</BaseButton>
    </div>

    <ul v-if="isFiltersVisible" class="products__filters">
      <li v-for="(query, key) in QUERY_OPTIONS" :key="key">
        <BaseSelect
          :options="query.options"
          :placeholder="query.placeholder"
          @select="onFilterSelect($event, key)"
        />
      </li>
    </ul>

    <ul class="products__list">
      <li v-for="product in state.productsList" :key="product.id">
        <ProductCard
          :image-src="product.image"
          :price="product.price"
          :category="product.product_type"
          :name="product.title"
        />
      </li>
    </ul>

    <BaseButton large @click.stop="incrementPage" class="products__load-button"
      >ПОКАЖИТЕ ЕЩЕ</BaseButton
    >
  </section>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";

import BaseButton from "../components/buttons/BaseButton.vue";
import BaseSelect from "../components/inputs/BaseSelect.vue";
import getProducts from "../mocks/products";
import ProductCard from "../components/cards/ProductCard.vue";

const QUERY_OPTIONS = {
  brand: {
    placeholder: "Бренд",
    options: [
      { text: "Марка 1", value: "brand1" },
      { text: "Марка 2", value: "brand2" },
      { text: "Марка 3", value: "brand3" },
    ],
  },
  price: {
    placeholder: "Цена",
    options: [
      { text: "Цена 1", value: "price1" },
      { text: "Цена 2", value: "price2" },
      { text: "Цена 3", value: "price3" },
    ],
  },
  sex: {
    placeholder: "Для кого",
    options: [
      { text: "Мужчинам", value: "sex1" },
      { text: "Женщинам", value: "sex2" },
    ],
  },
  category: {
    placeholder: "Коллекция",
    options: [
      { text: "Коллекция 1", value: "category1" },
      { text: "Коллекция 2", value: "category2" },
      { text: "Коллекция 3", value: "category3" },
    ],
  },
  season: {
    placeholder: "Сезон",
    options: [
      { text: "Сезон 1", value: "season1" },
      { text: "Сезон 2", value: "season2" },
      { text: "Сезон 3", value: "season3" },
    ],
  },
  event: {
    placeholder: "Событие",
    options: [
      { text: "Событие 1", value: "event1" },
      { text: "Событие 2", value: "event2" },
      { text: "Событие 3", value: "event3" },
    ],
  },
};
export default defineComponent({
  name: "Products List",

  components: {
    BaseButton,
    BaseSelect,
    ProductCard,
  },

  props: {},
  setup(props) {
    const page = ref(1);
    const isFiltersVisible = ref(true);

    const state = reactive({
      processing: false,
      query: {
        brand: "",
        price: "",
        sex: "",
        category: "",
        season: "",
        event: "",
      },
      productsList: [],
    });

    const toggleFiltersButtonText = computed(() =>
      isFiltersVisible.value ? "Скрыть фильтры" : "Показать фильтры"
    );

    function onFilterSelect(value, filterKey) {
      console.log(value, filterKey);
      state.query[filterKey] = value;
    }

    function toggleFilters() {
      isFiltersVisible.value = !isFiltersVisible.value;
    }

    function incrementPage() {
      console.log("increment");
      page.value += 1;
    }

    async function loadProducts(page) {
      state.processing = true;

      const { brand, price, sex, category, season, event } = state.query;
      //Move to the separate file named "urls" and import from there
      const url = `https://example.com/products?brand=${brand}&price=${price}&sex=${sex}&category=${category}&season=${season}&event=${event}&page=${page}`;
      console.log("Fetching", url);

      try {
        // const response = await fetch(url);
        //Add error handling
        // if (!response.ok) {
        //   throw new Error(`${response.status} ${response.statusText}`);
        // }
        // const data = await response.json();
        // state.productsList = state.productsList.concat(data.products);
      } catch (error) {
        //Add error handling
        // console.error("Error fetching products list:", error);
        // throw error;
      } finally {
        // Remove when backend will be ready
        const fetchedProductsList = await getProducts(page);
        state.productsList = state.productsList.concat(fetchedProductsList);
        console.log(state.productsList);
        state.processing = false;
      }
    }

    watch(
      [() => page.value, () => state.query],
      async () => {
        await loadProducts(page.value);
      },
      { deep: true }
    );

    onMounted(async () => {
      await loadProducts(page.value);
    });
    return {
      QUERY_OPTIONS,
      props,
      isFiltersVisible,
      state,
      toggleFiltersButtonText,

      loadProducts,
      incrementPage,
      toggleFilters,
      onFilterSelect,
    };
  },
});
</script>

<style lang="scss">
@import "/src/assets/styles/global/variables";
@import "/src/assets/styles/global/colors";

.products {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    li {
      align-self: end;
      border-bottom: 1px solid $primary;
    }
  }

  &__load-button {
    margin: 0 auto;
  }

  &__filters-control {
    display: flex;
    justify-content: center;
  }

  &__filters {
    display: flex;
    justify-content: space-around;
    gap: 16px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: $desktop) {
    &__filters-control {
      display: none;
    }
  }
}
</style>
