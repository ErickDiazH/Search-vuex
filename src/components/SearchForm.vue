<template>
    <div class="row">
        <div class="col">
            <div class="form-group mb-2">
              <label>Escribe tu búsqueda</label>
              <input type="text"
                class="form-control" v-model="search" placeholder="">
            </div>

            <div class="form-check form-check-inline">
                <input class="form-radio-input" type="radio" v-model="available" :value="true"/>
                Disponible
            </div>

            <div class="form-check form-check-inline">
                <input class="form-radio-input" type="radio" v-model="available" :value="false"/>
                No disponible
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        search: {
            get(){
                return this.$store.state.filter.query
            },
            set(val){
                this.$store.commit('SET_QUERY', val)
            }
        },
        available: {
            get(){
                return this.$store.state.filter.available
            },
            set(){
                this.$store.commit('SET_AVAILABLE')
            }
        }
    }
}
</script>

<style>

</style>