<template>
  <div id="app">
    <scrollPicker
      :rangStart="0"
      :rangEnd="20"
      :step="1"
      :unit="'年'"
      v-model="year"
    />
  </div>
</template>

<script>
  import scrollPicker from "./components/scrollPicker";
export default {
  name: 'App',
  components: {
    scrollPicker
  },
  data() {
    return {
      year: 0
    }
  }
}
</script>

<style>
</style>
