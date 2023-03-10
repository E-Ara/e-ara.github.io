let DoughFactoriesPrice = 25;
let FormStationsPrice = 100;
let OvensPrice = 250;

//Setter variablene til det som er lagret (i localstorage)
let NachoChips = localStorage.getItem("NachoChips");
let DoughFactoriesCount = localStorage.getItem("DoughFactoriesCount");
let FormStationsCount = localStorage.getItem("FormStationsCount");
let OvensCount = localStorage.getItem("OvensCount");

//Legger til 1 Nacho Chips for hvert trykk på Nacho'en
function Click() {
    NachoChips++;
    document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";
}

//Viser hvor mange ting brukeren har
document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";
document.getElementById("DoughFactories").innerHTML = "You have " + parseInt(DoughFactoriesCount) + " Dough Factories";
document.getElementById("FormStations").innerHTML = "You have " + parseInt(FormStationsCount) + " Form stations";
document.getElementById("Ovens").innerHTML = "You have " + parseInt(OvensCount) + " Ovens";
document.getElementById("DoughFactoriesPrice").innerHTML = "Dough factory price: " + parseInt(DoughFactoriesPrice);
document.getElementById("FormStationsPrice").innerHTML = "Form station price: " + parseInt(FormStationsPrice);
document.getElementById("OvensPrice").innerHTML = "Oven price: " + parseInt(OvensPrice);

//Legger til Nachos basert på hvor mange "DoughFactory" brukeren har ganget med 6.9
window.setInterval(function () {
    NachoChips = parseInt(NachoChips) + parseInt(DoughFactoriesCount) * 6.9;
    document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";
}, 1000)

//Legger til Nachos basert på hvor mange "FormStations" brukeren har ganget med 10.420  
window.setInterval(function () {
    NachoChips = parseInt(NachoChips) + parseInt(FormStationsCount) * 10.420;
    document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";
}, 2000)

//Legger til Nachos basert på hvor mange "Ovens" brukeren har ganget med 69 
window.setInterval(function () {
    NachoChips = parseInt(NachoChips) + parseInt(OvensCount) * 69;
    document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";
    
}, 3000)

//Lar deg kjøpe "factories"
function BuyDoughFactories() {
    //Hvis kjøp knappen blir trykket og brukeren har nok Nacho chips
    if (NachoChips >= DoughFactoriesPrice) {
        NachoChips = NachoChips - DoughFactoriesPrice;
        document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";

        DoughFactoriesCount++;
        //Øker prisen med en faktor på 1.25
        DoughFactoriesPrice = DoughFactoriesPrice * 1.25;
        DoughFactoriesPrice = Math.round(DoughFactoriesPrice);
        document.getElementById("DoughFactoriesPrice").innerHTML = "Dough factory price: " + parseInt(DoughFactoriesPrice);
        localStorage.setItem("DoughFactoriesCount",DoughFactoriesCount);
        localStorage.setItem("NachoChips", NachoChips);

        //Gjør at teksten forandrer seg basert på om det er én eller flere
        if(DoughFactoriesCount == 1) {
            document.getElementById("DoughFactories").innerHTML = "You have " + DoughFactoriesCount + " Dough factory";
        } else {
            document.getElementById("DoughFactories").innerHTML = "You have " + DoughFactoriesCount + " Dough factories";
        }
    }
else {
    alert("You don't have enough Nacho Chips:(");

}
}

//Lar deg kjøpe "form stations"
function BuyFormStations() {
    //Hvis kjøp knappen blir trykket og brukeren har nok Nacho chips
    if (NachoChips >= FormStationsPrice) {
        NachoChips = NachoChips - FormStationsPrice;
        document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";

        FormStationsCount++;
        //Øker prisen med en faktor på 1.25
        FormStationsPrice = FormStationsPrice * 1.25;
        FormStationsPrice = Math.round(FormStationsPrice);
        document.getElementById("FormStationsPrice").innerHTML = "Form station price: " + parseInt(FormStationsPrice);
        localStorage.setItem("FormStationsCount",FormStationsCount);
        localStorage.setItem("NachoChips", NachoChips);

        //Gjør at teksten forandrer seg basert på om det er én eller flere
        if(FormStationsCount == 1) {
            document.getElementById("FormStations").innerHTML = "You have " + FormStationsCount + " Form station";
        } else {
            document.getElementById("FormStations").innerHTML = "You have " + FormStationsCount + " Form stations";
        }
        
    }
else {
    alert("You don't have enough Nacho Chips:(");

}
}

//Lar deg kjøpe "ovens"
function BuyOvens() {
    //Hvis kjøp knappen blir trykket og brukeren har nok Nacho chips
    if (NachoChips >= OvensPrice) {
        NachoChips = NachoChips - OvensPrice;
        document.getElementById("NachoChips").innerHTML = "You have " + parseInt(NachoChips) + " Nacho Chips";

        OvensCount++;
        //Øker prisen med en faktor på 1.25
        OvensPrice = OvensPrice * 1.25;
        OvensPrice = Math.round(OvensPrice);
        document.getElementById("OvensPrice").innerHTML = "Oven price: " + parseInt(OvensPrice);
        localStorage.setItem("OvensCount",OvensCount);
        localStorage.setItem("NachoChips", NachoChips);

        //Gjør at teksten forandrer seg basert på om det er én eller flere
        if(OvensCount == 1) {
            document.getElementById("Ovens").innerHTML = "You have " + OvensCount + " Oven";
        } else {
            document.getElementById("Ovens").innerHTML = "You have " + OvensCount + " Ovens";
        }
        
    }
else {
    alert("You don't have enough Nacho Chips:(");

}
}

//Sletter alt fra local storage og setter verdiene til 0
function Erase() {
    localStorage.setItem("NachoChips", 0);
    localStorage.setItem("DoughFactoriesCount", 0);
    localStorage.setItem("FormStationsCount", 0);
    localStorage.setItem("OvensCount", 0);
    
    //Refresher siden slik at det visuelle oppdaterer seg
    window.location.reload();
}

//lagrer all dataen i local storage
function Save() {
    localStorage.setItem("NachoChips", NachoChips);
    localStorage.setItem("DoughFactoriesCount", DoughFactoriesCount);
    localStorage.setItem("FormStationsCount", FormStationsCount);
    localStorage.setItem("OvensCount", OvensCount);
}

//Auto-save funksjon som lagrer hvert 15. sekund
setInterval(function() {
    localStorage.setItem("NachoChips", NachoChips);
    localStorage.setItem("DoughFactoriesCount", DoughFactoriesCount);
    localStorage.setItem("FormStationsCount", FormStationsCount);
    localStorage.setItem("OvensCount",OvensCount);
}, 15000);