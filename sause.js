class Pokemon{
	constructor(dex_num){
		this.dex_num = dex_num

		axios.get(`https://pokeapi.co/api/v2/pokemon-form/${this.dex_num}/`)
		.then((response) => {
			let info = response.data
			this.name = info.forms[0].name
			this.hp = info.stats[5].base_stat
			this.attack = info.stats[4].base_stat
			this.defense = info.stats[3].base_stat
				
			for(let i = 0; i < data.abilities; i++){
				this.abilities.push(data.abilities[i].ability.name)
			}

			this.sprite = info.sprites.front_default
		})
	}
}

class Sause{
	constructor(pokemon){
		//initialized with array of pokemon
		this.pokemon = pokemon
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

let pokemonOne = document.querySelector("#pokemon-one-img")
let pokemonTwo = document.querySelector("#pokemon-two-img")
let pokemonThree = document.querySelector("#pokemon-three-img")

let dragonite = new Pokemon(149)
let porygonZ = new Pokemon(474)
let scrafty = new Pokemon(560)

pokemonOne.src = dragonite.sprite
pokemonTwo.src = porygonZ.sprite
pokemonThree.src = scrafty.sprite

let party = [dragonite, porygonZ, scrafty]

let sause = new Sause(party)
