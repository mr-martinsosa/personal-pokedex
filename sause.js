let check = 0 //set counter for base intialization to use as a semaphore

class Pokemon {
    constructor(dex_num) {
        this.dex_num = dex_num

        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.dex_num}/`)
            .then((response) => {
                check++ //increment on creation

                let info = response.data
                this["name"] = (info.forms[0].name).charAt(0).toUpperCase() + (info.forms[0].name).slice(1) //set first letter upper
                this["hp"] = info.stats[5].base_stat
                this["attack"] = info.stats[4].base_stat
                this["defense"] = info.stats[3].base_stat
                this["abilities"] = []
                for (let i = 0; i < info.abilities.length; i++) {
                    this["abilities"].push((info.abilities[i].ability.name).charAt(0).toUpperCase() + (info.abilities[i].ability.name).slice(1)) //set first letter upper
                }
                this["sprite"] = info.sprites.front_default
                this["moves"] = []
                this["shiny"] = info.sprites.front_shiny

                checkCreated()
            }) //call checkCreated() on new object call
    }

}

class Sause {
    constructor(pokemon) {
        //initialized with array of pokemon
        this.pokemon = pokemon
    }

    all() {
        //return array of pokemon objects
        return this.pokemon
    }

    get(pokemon) {
        // return pokemon retrieved from trainer
        for (let i = 0; i < this.pokemon.length; i++) {
            if (pokemon === this.pokemon[i].name) {
                return pokemon[i]
            }
        }

    }
}

class Moves {
    constructor() {
        this["name"] = ""
        this["priority"] = ""
        this["power"] = 0
        this["accuracy"] = 0
        this["pp"] = 0
    }
}

function addMove(pokemon) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.dex_num}/`) //
        .then((response) => {
            let info = response.data
            let urls = [] //initialize empty list to store urls of move data
            let randomIndex = Math.floor(Math.random() * Math.floor(urls.length))
            for (let i = 0; i < info.moves.length; i++) {
                urls.push(info.moves[i].move.url) //push all the moves a pokemon can learn into array
            }
        })

    let randomMove = urls[randomIndex] //randomize move

    axios.get(randomMove)
        .then((response) => {
            let info = response.data

            let move = new Move(info.names[2].name, info.priority, info.power, info.accuracy, info.pp)

            // if(pokemon.moves.length === 0){ //if moves list is empty push
            // 		pokemon.moves.push(move)
            // 	}
            for (let i = 0; i < pokemon.moves.length; i++) {
                if (pokemon.moves[i].name === info.names[2].name) { //if move already exists, remove the move
                    urls.splice(randomIndex, 1) //splice the list based on index and return it without the move
                } else {
                    // addMove(pokemon) //otherwise call function again and let RNG give us a new 
                    pokemon.moves.push(move) //otherwise push the move to the array
                }
            }
        })
}

let dragonite = new Pokemon(149)
let porygonZ = new Pokemon(474)
let scrafty = new Pokemon(560)

addMove(dragonite)
addMove(dragonite)
addMove(dragonite)
addMove(dragonite)

addMove(porygonZ)
addMove(porygonZ)
addMove(porygonZ)
addMove(porygonZ)

addMove(scrafty)
addMove(scrafty)
addMove(scrafty)
addMove(scrafty)


let pokemonOneImg = document.getElementById("pokemon-1-img")
let pokemonTwoImg = document.getElementById("pokemon-2-img")
let pokemonThreeImg = document.getElementById("pokemon-3-img")

let pokemonOneShiny = document.getElementById("pokemon-1-shiny")
let pokemonTwoShiny = document.getElementById("pokemon-2-shiny")
let pokemonThreeShiny = document.getElementById("pokemon-3-shiny")

function checkCreated() {
    if (check === 3) { //if called 3 times, all the pokemon have been created so do main
        main()
    }
}


function main() {

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

    title.innerText = `${listOfTitles[Math.floor(Math.random() * Math.floor(listOfTitles.length) )]} Sause
						Age: ${Math.floor(Math.random() * Math.floor(27) )}
						Hometown: New York
						Journey Started on: March 5th, 2018
						`


    pokemonOneImg.src = dragonite.sprite
    pokemonTwoImg.src = porygonZ.sprite
    pokemonThreeImg.src = scrafty.sprite

    pokemonOneShiny.src = dragonite.shiny
    pokemonTwoShiny.src = porygonZ.shiny
    pokemonThreeShiny.src = scrafty.shiny


    pokemonOneImg.addEventListener("click", (event) => {
        let sound = new Audio()
        sound.src = "sound/dragonite.mp3"
        sound.play()
    })

    pokemonTwoImg.addEventListener("click", (event) => {
        let sound = new Audio()
        sound.src = "sound/porygonz.mp3"
        sound.play()
    })

    pokemonThreeImg.addEventListener("click", (event) => {
        let sound = new Audio()
        sound.src = "sound/scrafty.mp3"
        sound.play()
    })


    // console.log(dragonite)
    // let pokemonInfo = document.querySelector("#pokemon-one-info")
    let pokemonOneInfo = document.querySelector("#pokemon-1-info")
    let pokemonTwoInfo = document.querySelector("#pokemon-2-info")
    let pokemonThreeInfo = document.querySelector("#pokemon-3-info")

    let pokemonOneBonus = document.querySelector("#pokemon-1-bonus")
    let pokemonTwoBonus = document.querySelector("#pokemon-2-bonus")
    let pokemonThreeBonus = document.querySelector("#pokemon-3-bonus")

    // pokemonOneInfo.innerHTML = `<u>${dragonite.name}</u> <br/>
    // 				<u>HP</u>: ${dragonite.hp} <br/>
    // 				<u>Attack</u>: ${dragonite.attack} <br/>
    // 				<u>Defense</u>: ${dragonite.defense} <br/>
    // 				<u>Abilities</u>: <br/> ${dragonite.abilities[0]} <br/> ${dragonite.abilities[1]} <br/>
    // 				`

    // pokemonTwoInfo.innerHTML = `<u>${porygonZ.name}</u> <br/>
    // 				<u>HP</u>: ${porygonZ.hp} <br/>
    // 				<u>Attack</u>: ${porygonZ.attack} <br/>
    // 				<u>Defense</u>: ${porygonZ.defense} <br/>
    // 				<u>Abilities</u>: <br/> ${porygonZ.abilities[0]} <br/> ${porygonZ.abilities[1]} <br/>
    // 				`

    // pokemonThreeInfo.innerHTML = `<u>${scrafty.name}</u> <br/>
    // 				<u>HP</u>: ${scrafty.hp} <br/>
    // 				<u>Attack</u>: ${scrafty.attack} <br/>
    // 				<u>Defense</u>: ${scrafty.defense} <br/>
    // 				<u>Abilities</u>: <br/> ${scrafty.abilities[0]} <br/> ${scrafty.abilities[1]} <br/>
    // 				`

    // let elem = document.querySelector('.modal') //grab modal
    // elem.addEventListener("click", (event) => {
    //     let instance = M.Modal.init(elem, options) //initialize modal
    //     instance = M.Modal.getInstance(elem)
    //     instance.open()
    // })

    let party = [dragonite, porygonZ, scrafty]

    let sause = new Sause(party)

    grabAll = sause.all()

    // pokemonOneInfo.innerHTML = `<u>${sause.get(dragonite).name}</u> <br/>
    // 				<u>HP</u>: ${sause.get(dragonite).hp} <br/>
    // 				<u>Attack</u>: ${sause.get(dragonite).attack} <br/>
    // 				<u>Defense</u>: ${sause.get(dragonite).defense} <br/>
    // 				<u>Abilities</u>: <br/> ${sause.get(dragonite).abilities[0]} <br/> ${sause.get(dragonite).abilities[1]} <br/>
    // 				`

    // pokemonTwoInfo.innerHTML = `<u>${sause.get(porygon-z).name}</u> <br/>
    // 				<u>HP</u>: ${sause.get(porygon-z).hp} <br/>
    // 				<u>Attack</u>: ${sause.get(porygon-z).attack} <br/>
    // 				<u>Defense</u>: ${sause.get(porygon-z).defense} <br/>
    // 				<u>Abilities</u>: <br/> ${sause.get(porygon-z).abilities[0]} <br/> ${sause.get(porygon-z).abilities[1]} <br/>
    // 				`

    // pokemonThreeInfo.innerHTML = `<u>${sause.get(scrafty).name}</u> <br/>
    // 				<u>HP</u>: ${sause.get(scrafty).hp} <br/>
    // 				<u>Attack</u>: ${sause.get(scrafty).attack} <br/>
    // 				<u>Defense</u>: ${sause.get(scrafty).defense} <br/>
    // 				<u>Abilities</u>: <br/> ${sause.get(scrafty).abilities[0]} <br/> ${sause.get(scrafty).abilities[1]} <br/>
    // 				`

    for (let i = 0; i < grabAll.length; i++) {
        let pokemonInfo = document.querySelector(`#pokemon-${i+1}-info`)
        if (i === 0) {
            pokemonOneInfo.innerHTML = `
							<u>${sause.pokemon[i].name}:</u> <br/>
								<u>HP</u>: ${sause.pokemon[i].hp} <br/>
								<u>Attack</u>: ${sause.pokemon[i].attack} <br/>
								<u>Defense</u>: ${sause.pokemon[i].defense} <br/>
								<u>Abilities</u>: <br/> ${sause.pokemon[i].abilities[0]} <br/> ${sause.pokemon[i].abilities[1]} <br/>
								`
            for (let j = 0; j < sause.pokemon[i].move.length; j++) {

                pokemonOneBonus.innerHTML = `
							<u>${sause.pokemon[i].move[j].name}: </u> <br/>
							<u>Priority: </u> ${sause.pokemon[i].move[j].priority} <br/>
							<u>Power: </u> ${sause.pokemon[i].move[j].power} <br/>
							<u>Accuracy: </u> ${sause.pokemon[i].move[j].accuracy} <br/>
							<u>PP: </u> ${sause.pokemon[i].move[j].pp} <br/>
							`
            }
        }
        if (i === 1) {
            pokemonTwoInfo.innerHTML = `
							<u>${sause.pokemon[i].name}:</u> <br/>
								<u>HP</u>: ${sause.pokemon[i].hp} <br/>
								<u>Attack</u>: ${sause.pokemon[i].attack} <br/>
								<u>Defense</u>: ${sause.pokemon[i].defense} <br/>
								<u>Abilities</u>: <br/> ${sause.pokemon[i].abilities[0]} <br/> ${sause.pokemon[i].abilities[1]} <br/>
								`
            for (let j = 0; j < sause.pokemon[i].move.length; j++) {

                pokemonTwoBonus.innerHTML = `
							<u>${sause.pokemon[i].move[j].name}: </u> <br/>
							<u>Priority: </u> ${sause.pokemon[i].move[j].priority} <br/>
							<u>Power: </u> ${sause.pokemon[i].move[j].power} <br/>
							<u>Accuracy: </u> ${sause.pokemon[i].move[j].accuracy} <br/>
							<u>PP: </u> ${sause.pokemon[i].move[j].pp} <br/>
								`
            }
        }
        if (i === 2) {
            pokemonThreeInfo.innerHTML = `
							<u>${sause.pokemon[i].name}:</u> <br/>
								<u>HP</u>: ${sause.pokemon[i].hp} <br/>
								<u>Attack</u>: ${sause.pokemon[i].attack} <br/>
								<u>Defense</u>: ${sause.pokemon[i].defense} <br/>
								<u>Abilities</u>: <br/> ${sause.pokemon[i].abilities[0]} <br/> ${sause.pokemon[i].abilities[1]} <br/>
								`
            for (let j = 0; j < sause.pokemon[i].move.length; j++) {

                pokemonThreeBonus.innerHTML = `
							<u>${sause.pokemon[i].move[j].name}: </u> <br/>
							<u>Priority: </u>${sause.pokemon[i].move[j].priority} <br/>
							<u>Power: </u>${sause.pokemon[i].move[j].power} <br/>
							<u>Accuracy: </u>${sause.pokemon[i].move[j].accuracy} <br/>
							<u>PP: </u>${sause.pokemon[i].move[j].pp} <br/>
							`
            }
        }

    }