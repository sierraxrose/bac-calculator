$(document).ready(function () {


// set the value of the alcohol content of beer, wine, and shots

    let beer = .54;
    let wine = .6;
    let shot = .6;

// set absorption rate

    let absorb = 7.5;

// set the amount of time pass

    let time = .015;

//collect data when submit button is clicked

    $("#submit").click(function () {


// collect the number of drinks that the user has input into number boxes

        let numberBeer = document.getElementById("beer").value;
        let numberWine = document.getElementById("wine").value;
        let numberShot = document.getElementById("shot").value;


// collect weight

        let weight = document.getElementById("weight").value;

// collect the hours since user started drinking

        let hours = document.getElementById("hours").value;

// find the total amount of drinks

        let drinkTotal = (beer * numberBeer) + (wine * numberWine) + (shot * numberShot);

// find drink total multiplied by the absorption rate

        let totalAbsorb = drinkTotal * absorb;

// find bac

        let bac = (totalAbsorb / weight) - (hours * time);
        bac = bac.toFixed(3);


// create message to display bac to user

        let result = `Your BAC is ${bac} %`;


//display result of bac in paragraph

$('p#result').text(result);


    })
})
