//Opdracht D.
//Lab 2.

var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];//De array.
var random = Math.floor(6*Math.random());//Math.floor/random zodat het een random waarde pakt uit de array.
document.write(spellen[random]);//Laat de uitwerking zien op het scherm + de naam van het spel dat de code random pakt.
console.log(random);//Laat in de console zien welke spel naam het is en de index nummer ervan.