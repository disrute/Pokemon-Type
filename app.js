//const typeOutput = document.getElementById('displayType');
const typeInput = document.getElementById('getType');
const showPokemon = document.getElementById('showPokemon');
const url = 'https://pokeapi.co/api/v2/pokemon/';

document.getElementById('fetchBtn').addEventListener('click', () => {

    // grab input (search query):
    let pokemonToFind = typeInput.value;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let pokeType = xhr.response.types;
            let typeString = '';
            for (let obj of pokeType) {
                typeString = typeString + ' ' + obj.type.name;
            };

            document.getElementById('displayType').innerText = `${pokemonToFind} type is: ${typeString}`;
            // display image.
            showPokemon.src = xhr.response.sprites.front_default;
        }
    };

    xhr.open('GET', url + pokemonToFind);
    xhr.send();
});