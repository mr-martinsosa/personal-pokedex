let check = 0 //set counter for base intialization to use as a semaphore
let checkMoves = 0 //set counter for base initialization to use as a semaphore
let urls = [] //initialize empty list to store urls of move data
let randomMove = [] //store random moves
let randomIndex = Math.floor(Math.random() * Math.floor(urls.length)) //store a random number to use as an index
let grabFour = 0 //counter to count 4 moves

class Moves {
    constructor(name, priority, power, accuracy, pp) {
        this["name"] = name
        this["priority"] = priority
        this["power"] = power
        this["accuracy"] = accuracy
        this["pp"] = pp
    }
}

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

                for (let i = 0; i < info.moves.length; i++) {
        				urls.push(info.moves[i].move.url) //push all the moves a pokemon can learn into array
        		}
        		for(let i = 0; i < urls.length; i++){
        			if(grabFour === 4){
        				grabFour = 0
        				urls.length = 0
        				break
        			}
        			++grabFour
        			// console.log(urls[Math.floor(Math.random() * Math.floor(urls.length))])
        			randomMove.push(urls[Math.floor(Math.random() * Math.floor(urls.length))])
        		}
        		
                
                checkCreated()
            }) //call checkCreated() on new object call
        }

        // getRandomMove() {
        // 	axios.get(`https://pokeapi.co/api/v2/pokemon/${this.dex_num}/`) 
        // 		.then((response) => {
        // 			checkMoves++
        // 			let info = response.data

        			
        // 			checkCreatedMoves() //call after all moves are recieved
        // 		})
        // 	}

        addMove(){
		     //randomize move
		    let grabRandom = randomMove[Math.floor(Math.random() * Math.floor(randomMove.length))]
		    axios.get(grabRandom)
		        .then((response) => {
		            let info = response.data
		            

		            checkMoves++
		            console.log(checkMoves)
		            let move = new Moves(info.names[2].name, info.priority, info.power, info.accuracy, info.pp)
		            if(this.moves.length === 0){ //if moves list is empty push
		            		this.moves.push(move)
		            }
		            for (let i = 0; i < this.moves.length; i++) {
		            	console.log(this.moves[i].name)
		            	console.log(info.names[2].name)
			                if (this.moves[i].name === info.names[2].name) { //if move already exists, remove the move
			                    if(randomIndex !== -1){
			                    	urls.splice(randomIndex, 1) //splice the list based on index and return it without the move
			                    }
			                } else if (this.moves.length < 4) {
			                    // addMove(pokemon) //otherwise call function again and let RNG give us a new 
			                    this.moves.push(move) //otherwise push the move to the array
			                }
		            }
		            // console.log(this)
		            checkCreatedMoves()
		        })
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
                return this.pokemon[i]
            }
        }

    }
}


let dragonite = new Pokemon(149)
let porygonZ = new Pokemon(474)
let scrafty = new Pokemon(560)

let pokemonOneImg = document.getElementById("pokemon-1-img")
let pokemonTwoImg = document.getElementById("pokemon-2-img")
let pokemonThreeImg = document.getElementById("pokemon-3-img")

let pokemonOneShiny = document.getElementById("pokemon-1-shiny")
let pokemonTwoShiny = document.getElementById("pokemon-2-shiny")
let pokemonThreeShiny = document.getElementById("pokemon-3-shiny")

function checkCreated() {
    if (check === 3) { //if called 3 times, all the pokemon have been created so do main
        createMove()
    }
}

function checkCreatedMoves() {
    if (checkMoves === 12) { //if called 12 times, all the moves have been created so add them.
		console.log("Loaded Moves")

		setTimeout(main(), 15000)
		
    }
}


function createMove(){
	dragonite.addMove()
	dragonite.addMove()
	dragonite.addMove()
	dragonite.addMove()

	porygonZ.addMove()
	porygonZ.addMove()
	porygonZ.addMove()
	porygonZ.addMove()

	scrafty.addMove()
	scrafty.addMove()
	scrafty.addMove()
	scrafty.addMove()
}

function main() {
	console.log("Loaded Everything")
	// dragonite.getRandomMove()
	// dragonite.getRandomMove()
	// dragonite.getRandomMove()
	// dragonite.getRandomMove()

	// porygonZ.getRandomMove()
	// porygonZ.getRandomMove()
	// porygonZ.getRandomMove()
	// porygonZ.getRandomMove()

	// scrafty.getRandomMove()
	// scrafty.getRandomMove()
	// scrafty.getRandomMove()
	// scrafty.getRandomMove()
	

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

    title.innerText = `${listOfTitles[Math.floor( Math.random() * Math.floor(listOfTitles.length) )] } Sause
    					ID: 66666
						Age: ${Math.floor(Math.random() * Math.floor(27) )}
						Hometown: New York
						Journey Started on: March 5th, 2018
						Seen: 807
						Caught: 807
						Money: $${Math.floor(Math.random() * Math.floor(9999))}
						Play Time: 730:40
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

    pokemonOneShiny.addEventListener("click", (event) => {
        let sound = new Audio()
        sound.src = "sound/shiny.mp3"
        sound.play()
    })

    pokemonTwoShiny.addEventListener("click", (event) => {
        let sound = new Audio()
        sound.src = "sound/shiny.mp3"
        sound.play()
    })

    pokemonThreeShiny.addEventListener("click", (event) => {
        let sound = new Audio()
        sound.src = "sound/shiny.mp3"
        sound.play()
    })


    // console.log(dragonite)
    // let pokemonInfo = document.querySelector("#pokemon-one-info")
    let pokemonOneInfo = document.querySelector("#pokemon-1-info")
    let pokemonTwoInfo = document.querySelector("#pokemon-2-info")
    let pokemonThreeInfo = document.querySelector("#pokemon-3-info")

    let pokemonOneBonus = document.querySelector("#pokemon-1-detailed")
    let pokemonTwoBonus = document.querySelector("#pokemon-2-detailed")
    let pokemonThreeBonus = document.querySelector("#pokemon-3-detailed")

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

    grabAll = sause.all() //shows functionality of all method

    let secondDragonite = sause.get("Dragonite") //showing functionality of get method
    //console.log(secondDragonite)

    console.log(dragonite, porygonZ, scrafty)
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
        // let pokemonInfo = document.querySelector(`#pokemon-${i+1}-info`)
        // let pokemonBonus = document.querySelector(`#pokemon-${i+1}-bonus`)
        if (i === 0) {
            pokemonOneInfo.innerHTML = `
							<u>${sause.pokemon[i].name}:</u> <br/>
								<u>HP</u>: ${sause.pokemon[i].hp} <br/>
								<u>Attack</u>: ${sause.pokemon[i].attack} <br/>
								<u>Defense</u>: ${sause.pokemon[i].defense} <br/>
								<u>Abilities</u>: <br/> ${sause.pokemon[i].abilities[0]} <br/> ${sause.pokemon[i].abilities[1]} <br/>
								`
							
            // for (let j in sause.pokemon[i].moves) { //didnt work with a for loop but for in did ??????
            	// console.log(sause.pokemon[i].moves[j].name)
                pokemonOneBonus.innerHTML = `
							<u>${sause.pokemon[i].moves[0].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[0].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[0].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[0].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[0].pp} <br/> <br/>

							<u>${sause.pokemon[i].moves[1].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[1].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[1].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[1].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[1].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[2].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[2].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[2].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[2].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[2].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[3].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[3].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[3].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[3].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[3].pp} <br/><br/>
							`


            // }
        }
        else if (i === 1) {
            pokemonTwoInfo.innerHTML = `
							<u>${sause.pokemon[i].name}</u>: <br/>
								<u>HP</u>: ${sause.pokemon[i].hp} <br/>
								<u>Attack</u>: ${sause.pokemon[i].attack} <br/>
								<u>Defense</u>: ${sause.pokemon[i].defense} <br/>
								<u>Abilities</u>: <br/> ${sause.pokemon[i].abilities[0]} <br/> ${sause.pokemon[i].abilities[1]} <br/>
								`
            // for (let j in sause.pokemon[i].moves) {

                pokemonTwoBonus.innerHTML = `
							<u>${sause.pokemon[i].moves[0].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[0].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[0].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[0].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[0].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[1].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[1].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[1].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[1].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[1].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[2].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[2].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[2].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[2].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[2].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[3].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[3].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[3].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[3].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[3].pp} <br/><br/>
							`
            // }
        }
        else if (i === 2) {
            pokemonThreeInfo.innerHTML = `
							<u>${sause.pokemon[i].name}</u>: <br/>
								<u>HP</u>: ${sause.pokemon[i].hp} <br/>
								<u>Attack</u>: ${sause.pokemon[i].attack} <br/>
								<u>Defense</u>: ${sause.pokemon[i].defense} <br/>
								<u>Abilities</u>: <br/> ${sause.pokemon[i].abilities[0]} <br/> ${sause.pokemon[i].abilities[1]} <br/>
								`
            // for (let j in sause.pokemon[i].moves) {
            	console.log(sause.pokemon[i])
                pokemonThreeBonus.innerHTML = `
							<u>${sause.pokemon[i].moves[0].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[0].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[0].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[0].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[0].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[1].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[1].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[1].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[1].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[1].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[2].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[2].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[2].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[2].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[2].pp} <br/><br/>

							<u>${sause.pokemon[i].moves[3].name}</u>:  <br/>
							<u>Priority</u>:  ${sause.pokemon[i].moves[3].priority} <br/>
							<u>Power</u>:  ${sause.pokemon[i].moves[3].power} <br/>
							<u>Accuracy</u>:  ${sause.pokemon[i].moves[3].accuracy}% <br/>
							<u>PP</u>:  ${sause.pokemon[i].moves[3].pp} <br/><br/>
							`
            // }
        }

    }
}