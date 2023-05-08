<template>
    <div class="options-container">
        <ul>
            <li class="button" disabled v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('Selected', pokemon.id)">{{pokemon.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }

}
</script>

<style scoped>
    ul {
        height: 100%;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-content: center;
        align-items: flex-start;
        justify-content: center;
    }

    .button {
        height: 30px;
        display: inline-block;
        padding: 10px 50px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;	
        text-decoration: none;
        outline: none;
        color: #EEEEEE;
        width: 150px;
        background-color: #393E46;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #999;
    }

    .button:hover {background-color: #3e8e41}

    .button:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }

</style>