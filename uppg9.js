

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
    // anropa funktionen och skicka med en array som argument

  function sort (numbersArray) {        //En ny funktion som tar in en array som argument
    numbersArray.forEach(number => {    //Använder forEach för att loopa igenom varje siffra i arrayen
        if (number % 2 === 0) {         // och använder ifElse-sats för att avgöra om siffran är jämn eller udda. För att kontollera detta 
            console.log(number, " jämnt"); //används operaton % som kollar vad som blir över när ett tal divideras med annat. I denna dividerar vi med 2 för att dse som det
                                            //delas jämnt eller inte, alltså om det blir rester (1) eller inte (0)
        } else {
            console.log(number, " udda");
            
        }
        
    });
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]  //Gör en array med siffror som kan användas som argument i vår nya funktion
  sort(numbers) //Kör den nya funktionen och tar med arrayen numbersz som argument

}

uppg9() //Kör funktionen

module.exports = { uppg9 };