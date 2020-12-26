<template>
  <div>
        <h1 class="text-center text-muted">Buscador con Vuex</h1>
        <search-form></search-form>
        <hr>
        <movie-list></movie-list>
  </div>
</template>

<script>
import MovieList from './MovieList.vue'
import SearchForm from './SearchForm.vue'

export default {
    components: {
        SearchForm,
        MovieList
    }
}
</script>

<style>

</style>