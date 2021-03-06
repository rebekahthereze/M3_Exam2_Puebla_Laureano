

var selectStarter=document.getElementById('starter');
var selectValue=selectStarter.value;
playBG();

//API link of each Pokemon
var pikachuAPI='https://pokeapi.co/api/v2/pokemon/pikachu';
var eeveeAPI='https://pokeapi.co/api/v2/pokemon/eevee';
var piplupAPI='https://pokeapi.co/api/v2/pokemon/piplup';
var charmanderAPI='https://pokeapi.co/api/v2/pokemon/charmander';
var rowletAPI='https://pokeapi.co/api/v2/pokemon/rowlet';
var froakieAPI='https://pokeapi.co/api/v2/pokemon/froakie';
var turtwigAPI='https://pokeapi.co/api/v2/pokemon/turtwig';

//Image Link of each Pokemon
var pikachuImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
var eeveeImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png';
var piplupImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png';
var charmanderImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png';
var rowletImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png';
var froakieImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png';
var turtwigImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png';

function playBG(){//background music
    var audio = new Audio('assets/bg.mp3');
    audio.volume=0.7;
    audio.play();
}

function changingStats(stat,id){//changes numbers/stats
    var statArea=document.getElementById(id);
    statArea.innerHTML=stat;   
}

function changingType(stat,id){//changes the pokemon type
    var stat=capitalizeFirstLetter(stat);
    var statArea=document.getElementById(id);
    statArea.innerHTML=stat;
}

function changingContainerColor(pokemonColor){//changes color of container
    document.getElementById("container-box").style.background=pokemonColor;
}

function changingName(name){//changes the pokemon name
    var name= capitalizeFirstLetter(name);
    document.getElementById('pokemon-name').innerHTML=name;
}

function changingImage(pokemonImg){//changes the pokemon image
    document.getElementById('starter-img').src=pokemonImg;
    document.getElementById('pokemon-name').innerText='';
}

function capitalizeFirstLetter(string) {//capitalizing strings
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playPokemonSound(pokemonSound){//plays pokemon sound
    var audio = new Audio(pokemonSound);
    audio.loop=false;
    audio.play();

}
//checks if the pokemon API available
function checkPokemonAPI(selectValue){
    var finalPokemon;
    console.log(selectValue);
    switch(selectValue){
        
        case '1'://pikachu pokemon
            finalPokemon=pikachuAPI;
            changingImage(pikachuImg);
            playPokemonSound('assets/pikachu.mp3')
            changingContainerColor('#E0D268');
            break;
        case '2'://eevee pokemon
            finalPokemon=eeveeAPI;
            changingImage(eeveeImg);
            playPokemonSound('assets/eevee.mp3')
            changingContainerColor('#A8A878');
            break;
        case '3'://piplup
            finalPokemon=piplupAPI;
            changingImage(piplupImg);
            playPokemonSound('assets/piplup.mp3')
            changingContainerColor('#6890F0')
            break;
        case '4'://charmander
            finalPokemon=charmanderAPI;
            changingImage(charmanderImg);
            playPokemonSound('assets/charmander.mp3')
            changingContainerColor('#F08030')
            break;
        case '5'://rowlet
            finalPokemon=rowletAPI;
            changingImage(rowletImg);
            playPokemonSound('assets/rowlet.mp3')
            changingContainerColor('#A7DB8D');
            break;
        case '6'://froakie
            finalPokemon=froakieAPI;
            changingImage(froakieImg);
            playPokemonSound('assets/froakie.mp3')
            changingContainerColor('#6890F0')
            break;
        case '7'://turtwig
            finalPokemon=turtwigAPI;
            changingImage(turtwigImg);
            playPokemonSound('assets/turtwig.mp3')
            changingContainerColor('#A7DB8D');
            break;
        default://error if not found
            console.log("Error, Could not Find API");
            finalPokemon='error';
            break;
    }
    return finalPokemon;
}
//if user chooses pokemon from drop down
function getPokemon(selectedPokemon){
    var selectValue=selectedPokemon.value;
    var pokemonAPI= checkPokemonAPI(selectValue);
    fetch(pokemonAPI)
    .then(function (response) {
        console.log(response);

        if(response.status!==200){
            console.log('Looks like there was a problem. Status Code: ' 
            + response.status);
            return;
        }

        response.json().then(function(data){
            var changeStat;//initial value   
            console.log(data);
            //name
            changingName(data.name);
            //type
            changeStat=data.types[0].type.name;
            changingType(changeStat,'type');
            //hp
            changeStat=data.stats[0].base_stat;
            changingStats(changeStat,'hp');
            //attack
            changeStat=data.stats[1].base_stat;
            changingStats(changeStat,'attack');
            //defense
            changeStat=data.stats[2].base_stat;
            changingStats(changeStat,'defense');
            //special-attack
            changeStat=data.stats[3].base_stat;
            changingStats(changeStat,'special-attack');
            //special-defense
            changeStat=data.stats[4].base_stat;
            changingStats(changeStat,'special-defense');
            //speed
            changeStat=data.stats[5].base_stat;
            changingStats(changeStat,'speed');
            
        })
    }
    )
    .catch(function(err){
        console.log(err+'404');
    }
    )
}