import request from "../api/getPokemonAPI";

const getPokemon = () => {
    const arrayNumbersPokemon = Array.from( Array(650) );
    return arrayNumbersPokemon.map( ( _ , index) => index + 1 );
}

const getPokemonOptions = async () => {
    const numbersRandom = getPokemon().sort(()=> Math.random() - 0.5);
    const namesPokemon = await getPokemonName(numbersRandom.splice(0, 4));
    return namesPokemon;
}

const getPokemonName = async ([a, b, c, d]) => {

    const petitions = [
        request.get(`/${a}`),
        request.get(`/${b}`),
        request.get(`/${c}`),
        request.get(`/${d}`),
    ]
    const [p1, p2, p3, p4] = await Promise.all(petitions);

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
}

export default getPokemonOptions;