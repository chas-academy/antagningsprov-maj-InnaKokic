function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    const bigEven = [];   //Skapar 3 tommar arrayen för att kunna fylla de med siffror från arrayen numbers
    const smallOdd = [];
    const other = [];
    
    for (const number of numbers) {   //Använder en for let-loop för att loppa igenom varje nummer i arrayen numbers
      if (number > 10 && number % 2 === 0) {        //Om numret i arrayen är större än 10 och jämnt (delbart på 2 utan retster)
        bigEven.push(number)                        //så ska numret puttas in i arrayen bigEven med hjälp av push()

      } else if (number < 10 && number % 2 !== 0){  //Om numret i arrayen är mindre än 10 och inte (!==) jämnt 
        smallOdd.push(number)                       //så ska numret puttas in i arrayen smallOdd
      }
      else {                                        //och om inget av ovanstående påsteånden stämmer 
        other.push(number)                          //så ska numret puttas in i arrayen other
      } 
    }
  
    return {                            //Funktionen ska efter loopen returnera ett objekt{} innehållande dessa tre arrayer med sina nummer
      bigEven, smallOdd, other
    }

  }

  console.log(uppg10()); //Kör funktionen och loggar den i konsolen
  
  
  module.exports = { uppg10 };
  