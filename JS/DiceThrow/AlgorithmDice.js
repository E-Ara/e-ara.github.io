//Oppretter en array med alle terning-verdiene
let Dices = ["Dice1","Dice2","Dice3","Dice4","Dice5","Dice6"];

//Triller én terning
function OneDiceClick() {
    let OneDiceResult = Math.floor(Math.random() * Dices.length + 1);
    document.getElementById("Results").innerHTML = `You rolled ${OneDiceResult}!`;
}

//Triller to terninger
function TwoDiceClick() {
    let FirstDiceResult = Math.floor(Math.random() * Dices.length + 1);
    let SecondDiceResult = Math.floor(Math.random() * Dices.length + 1);
    let Sum = FirstDiceResult + SecondDiceResult;
    document.getElementById("Results").innerHTML = `You rolled ${Sum}!`;
}

//Triller tre terninger
function ThreeDiceClick() {
    let FirstDiceResult = Math.floor(Math.random() * Dices.length + 1);
    let SecondDiceResult = Math.floor(Math.random() * Dices.length + 1);
    let ThirdDiceResult = Math.floor(Math.random() * Dices.length + 1);
    let Sum = FirstDiceResult + SecondDiceResult + ThirdDiceResult;
    document.getElementById("Results").innerHTML = `You rolled ${Sum}!`;
}

let Sum = 0;
//Oppretter en tom array 
let ResultsCustomAmountArray = [];

function AmountDiceClick() {
    //Nullstiller sum og arrayen, slik at man ikke legger til terninger fra forrige kast 
    Sum = 0;
    ResultsCustomAmountArray.length = 0;
    //Lar brukeren velge ett antall terninger å trille
    let CustomAmount = Number(prompt("How many dices do you want to roll?"));
    //Sjekker om svaret til brukeren er gyldig (er et tall, større enn 0 og mindre enn 101)
    if (Number.isInteger(CustomAmount) && CustomAmount > 0  && CustomAmount < 101) {
        //Looper for hver terning
        for (let i = 0; i < CustomAmount; i++) {
            let ResultsCustomAmount = Math.floor(Math.random() * Dices.length + 1);
            //Putter resultatet inn i en array
            ResultsCustomAmountArray.push(ResultsCustomAmount)
            console.log(ResultsCustomAmount);
        }
        console.log(ResultsCustomAmountArray)

        //Går gjennom hvert tall i arrayen og legger de sammen
        ResultsCustomAmountArray.forEach(tall => {
            Sum += tall;
        });
        //Viser resultatet på nettsiden
        document.getElementById("Results").innerHTML = `You rolled ${Sum}!`;
}
else {
    //Viser en feilmelding hvis input fra bruker ikke er gyldig
    alert("Invalid input! Must be a number between 1 - 100")
}
}