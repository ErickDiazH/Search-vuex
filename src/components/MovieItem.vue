<template>
    <div class="col-md-6 mb-3">
        <div class="card text-left">
        <img class="card-img-top" src="holder.js/100px180/" alt="">
        <div class="card-body">
            <h4 class="card-title">{{ movie.title }}</h4>
            <h4 class="card-subtitle">Available: {{ movie.available }}</h4>
            <p class="card-text">{{ movie.description }}</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>