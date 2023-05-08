<template>

    <div class="pokemon-container">
        
        
        <img v-if="showPokemon" :src="img" class=" image" alt="Pokemón">
        <img v-else class="image hidden-pokemon " :src="img" alt="Pokemón">
        

    </div>

</template>

<script>
export default {
    props: {
        idPokemon: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        img() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`;
        }
    }

}
</script>

<style scoped>
    /* Pokemon Picture */
    .pokemon-container {
        height: 350px;
        /* position:relative; */
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .image {
        /* background-color: green; */
        height: 350px;
        position: relative;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        overflow: hidden;
        

    }
    .hidden-pokemon {
        height: 350px;
        position: absolute;
        filter: brightness(0);
        overflow: hidden;
    }
</style>