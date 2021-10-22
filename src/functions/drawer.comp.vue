<template>
  <q-drawer
    :value="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-grey-2"
  >
    <q-list>
      <q-item>
        <search-box></search-box>
      </q-item>
      <q-item to="/" exact>
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
          <q-item-label caption>All shows</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/genres" exact>
        <q-item-section avatar>
          <q-icon name="movies" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Genres</q-item-label>
          <q-item-label caption>All Categories</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/people" exact>
        <q-item-section avatar>
          <q-icon name="people" />
        </q-item-section>
        <q-item-section>
          <q-item-label>People</q-item-label>
          <q-item-label caption>The Most popular actresses </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import SearchBox from "@/functions/search.comp.vue";
export default {
  name: "LayoutDefault",
  computed: {
    ...mapGetters(["leftDrawerOpen"]),
  },
  components: {
    SearchBox,
  },
};
</script>

<style></style>
