

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

let names = ["Anna", "Pelle", "Håkan", "Lasse"] //En aray med flera namn


for (const name of names) { // en for .. of loop som loppar igenom innehållet i arrayen names
    console.log(name);
} 

}

uppg6()

module.exports = { uppg6 };