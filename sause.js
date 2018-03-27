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