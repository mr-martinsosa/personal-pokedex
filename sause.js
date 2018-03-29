class Pokemon{
	constructor(dex_num){
		this.dex_num = dex_num

		axios.get(`https://pokeapi.co/api/v2/pokemon-form/${this.dex_num}/`)
		.then((response) => 
			let data = response.data
			this.name = data.forms[0].name
			this.hp = data.stats[5].base_stat
			this.attack = data.stats[4].base_stat
			this.defense = data.stats[3].base_stat
				
			for(let i = 0; i < data.abilities i++){
				this.abilities.push(data.abilities[i].ability.name)
			}

			this.sprite = data.sprites.front_default
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