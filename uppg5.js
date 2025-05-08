
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

let tal1 = 5  //Deklarre två olika variabler som innehåller tal som vi kan ändra för att se så if-satsen funkar
let tal2 = 10

if (tal1 > tal2) { // Om tal1 är större än tal 2 ska nedan loggas i konsolen..
    console.log("Det första talet är större än det andra");
    
} else {//.. om inte, ska nedan loggas i konsolen istället
    console.log("Det andra talet är större än det första");
    
}

}

uppg5() //Kör funktionen

module.exports = { uppg5 };