<template>
    <h1 v-if="!pokemon">Cargando...</h1>

    <div v-else >
        <h1>Who's that pokemon?</h1>
        <div class="container-components">
            <PokemonImage :idPokemon="pokemon.id" :showPokemon="showPokemon"/>
            <PokemonOptions @Selected="pokemonSelected" :pokemons="pokemonArray"/>
        </div>
    </div>
    <div v-if="showAnswer">
        <h2>{{message}}</h2>
        <h2>{{ready}} <span>{{counter}}</span> </h2>
        <!-- <button class="button" @click="newGame">New Game</button> -->
    </div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";


export default {
    components: { 
        PokemonImage, 
        PokemonOptions 
    },
    data() {
        return {
            pokemonArray: [],
            pokemon: {},
            showPokemon: false,
            showAnswer: false,
            message: '',
            counter: 5,
            ready: 'Next pokemon in '
        }
    },
    methods: {
        async fillPokemonArray() {
            this.pokemonArray = await getPokemonOptions()
            const numberRandom = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArray[numberRandom]
        },
        pokemonSelected(idPokemon) {
            this.showPokemon = true
            this.showAnswer  = true

            const h2 = document.getElementsByTagName('h2')
            console.log(h2)

            if(this.pokemon.id == idPokemon) {
                this.message = `Congratulations!, Yes it is ${this.pokemon.name}`
                this.counterNewGame()
                return
            }
            this.message = `Ooops!, it is ${this.pokemon.name}`
            this.counterNewGame()
        },
        counterNewGame() {
            if (this.counter == 0) {
                this.pokemonArray = []
                this.pokemon = null
                this.showPokemon = false
                this.showAnswer  = false
                this.message = '',
                this.counter = 5
                this.fillPokemonArray()
                return
            } 
            this.counter--
            setTimeout(this.counterNewGame , 1000);
        }
    },
    mounted() {
        this.fillPokemonArray();
    }
}
</script>

<style scoped>

    .container-components {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .button {
        display: inline-block;
        padding: 15px 25px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;	
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #4CAF50;
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

    .correct {
        color: #4baa4e;
    }

    .error {
        color: #DA0037;
    }
</style>
