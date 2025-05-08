

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
// anropa funktionen och skicka med arrayen som argument


const persons = [           //En array med objekt
    {name: "Anna", age: 30},
    {name: "Johan", age: 25},
    {name: "Lisa", age: 18},
    {name: "Hanna", age: 49},
    {name: "Mimmi", age: 38},

];   

function peopleOver30(personArray) {   //En ny funktion som tar in en array som argument
    personArray.forEach(person => {   //En forEach-loop som loopar igenom arrayen personArray 
        if (person.age > 30) {        //och med en if-sats anger att om propertien age är över 30 så ska propertien name loggas i konsolen
            console.log(person.name);
            
        }
        
    });
   
}
 peopleOver30(persons)  //Kör den nya funktionen innuti funktionen uppg8() och skickar med arrayen med objekten som argument

}

uppg8() //Kör funktionen 

module.exports = { uppg8 };