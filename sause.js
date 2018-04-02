class Pokemon{
	constructor(dex_num){
		this.dex_num = dex_num

		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.dex_num}/`)
		.then((response) => {
			let info = response.data
			this.name = info.forms[0].name
			this.hp = info.stats[5].base_stat
			this.attack = info.stats[4].base_stat
			this.defense = info.stats[3].base_stat
				
			for(let i = 0; i < info.abilities; i++){
				this.abilities.push(info.abilities[i].ability.name)
			}

			this.sprite = info.sprites.front_default
		})
	}
}

class Sause{
	constructor(pokemon){
		//initialized with array of pokemon
		this.pokemon = []
	}

	all(){
		//return array of pokemon objects
		return this.pokemon
	}

	get(pokemon){
		// return pokemon retrieved from ajax
		for(let i = 0; i < this.pokemon.length; i++){
			if(pokemon === this.pokemon[i].name){
				return pokemon[i]
			}
		}
	}
}

let title = document.querySelector("#random-title")
listOfTitles = [
	"Lorekeeper",
	"Pokemon Trainer",
	"Leader",
	"Elite Four",
	"Champion",
	"Ace Trainer",
	"Dragon Tamer",
	"Black Belt",
	"Rival",
	"Youngster",
	"Swimmer",
	"Tamer",
	"Cook",
	"Captain",
	"Fisherman",
	"World Champion",
	"Pikachu Fan",
	"Arcade Star",
	"Elder",
	"Chaser",
	"Rogue",
	"Worker",
	"Supertrainer",
	"Teacher",
	"Lone Wolf"
]

title.innerText = listOfTitles[Math.floor(Math.random() * Math.floor(listOfTitles.length) )] + " Sause"

let pokemonOneImg = document.querySelector("#pokemon-one-img")
let pokemonTwoImg = document.querySelector("#pokemon-two-img")
let pokemonThreeImg = document.querySelector("#pokemon-three-img")

let dragonite = new Pokemon(149)
let porygonZ = new Pokemon(474)
let scrafty = new Pokemon(560)

console.log(dragonite)
console.log(dragonite[name])

pokemonOneImg.src = dragonite.sprite
pokemonTwoImg.src = porygonZ.sprite
pokemonThreeImg.src = scrafty.sprite

// let pokemonInfo = document.querySelector("#pokemon-one-info")
let pokemonOneInfo = document.querySelector("#pokemon-one-info")
let pokemonTwoInfo = document.querySelector("#pokemon-two-info")
let pokemonThreeInfo = document.querySelector("#pokemon-three-info")

pokemonOneInfo.innerHTML = `${dragonite.name}: <br/>
							HP: ${dragonite.hp} <br/>
							Attack: ${dragonite.attack} <br/>
							Defense: ${dragonite.defense} <br/>
							`
							// Abilities: ${dragonite.abilities[0]} , ${dragonite.abilities[1]} <br/>

pokemonTwoInfo.innerHTML = `${porygonZ.name}: <br/>
							HP: ${porygonZ.hp} <br/>
							Attack: ${porygonZ.attack} <br/>
							Defense: ${porygonZ.defense} <br/>
							`
							// Abilities: ${porygonZ.abilities[0]} , ${porygonZ.abilities[1]} <br/>

pokemonThreeInfo.innerHTML = `${scrafty.name}: <br/>
							HP: ${scrafty.hp} <br/>
							Attack: ${scrafty.attack} <br/>
							Defense: ${scrafty.defense} <br/>
							`
							// Abilities: ${scrafty.abilities[0]} , ${scrafty.abilities[1]} <br/>


let party = [dragonite, porygonZ, scrafty]

let sause = new Sause(party)

// for(let i = 0; i < sause.pokemon.length; i++){
// 	let pokemonInfo = document.querySelector(`#pokemon-${i}-info`)
// 	pokemonInfo.innerHTML = `${sause.pokemon[i].name}: <br/>
// 							HP: ${sause.pokemon[i].hp} <br/>
// 							Attack: ${sause.pokemon[i].attack} <br/>
// 							Defense: ${sause.pokemon[i].defense} <br/>
// 							`
// }