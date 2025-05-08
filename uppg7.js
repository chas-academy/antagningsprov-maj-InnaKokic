
function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10


function summa(a, b) { //Funktion som tar in två tal, a och b, som argument 
        return a + b; //Bestämmer att funktionen ska återge summan av a och b
    }

   
    return summa(5, 10); //Kör funktionen summa() innuti funktionen uppg7() och ger den parametrarna 5 och 10


}
 console.log(uppg7()); //Loggar funktionen uppg7 i konsolen
 

module.exports = { uppg7 };