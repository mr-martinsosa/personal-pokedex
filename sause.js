class Pokemon{
	constructor(hp, attack, defense, abilities = []){
		this.hp = hp
		this.attack = attack
		this.defense = defense
		this.abilities = abilities
	}
}

class Sause{
	constructor(pokemon){
		this.pokemon = pokemon
	}

	all(){
		return this.pokemon
	}

	get(name){
		// return pokemon retrieved from ajax
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