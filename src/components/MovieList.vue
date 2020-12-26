<template>
  <div>
      <div class="row" v-if="movies.length > 0">
          <movie :movie="movie" v-for="movie in movies" :key="movie.id"></movie>
      </div>
      <div v-else class="alert alert-danger" role="alert">
          <strong>No hay peliculas disponibles</strong>
      </div>
  </div>
</template>

<script>

import Movie from './MovieItem.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        Movie
    },
    computed: {
        ...mapGetters({
            movies: 'filteredMovies'
        })
    }
}
</script>

<style>

</style>