//Opdracht B.
//Lab 2.

var arrayEen = [1,2,3,4,5,6,7,8,9,10];//Eerste Array.
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];//Tweede Array.

function optellen(){//Functie voor de optel opdrachr.
    for(i=0; i <=9; i++){
        var antwoord = arrayEen[i] + arrayTwee[i];//Variabale van de antwoorden van de 2 arrays met daarin de indexen dat bij elkaar geteld word.
        document.write(arrayEen[i] + '+' + arrayTwee[i] + '=' + antwoord + "<br>");//Uitwerking van de opdracht.
    }
    document.write("<br>");
}

optellen();//Om de functie aan te roepen.

function aftrekken(){
    for(i=0; i <=9; i++){
        var antwoord = arrayTwee[i] - arrayEen[i];//
        document.write(arrayEen[i] + '-' + arrayTwee[i] + '=' + antwoord + "<br>");//Uitwerking van de opdracht.
    }
    document.write("<br>");
}

aftrekken();//Om de functie aan te roepen.

function vermenigvuldigen(){
    for(i=0; i <=9; i++){
        var antwoord = arrayTwee[i] * arrayEen[i];//
        document.write(arrayEen[i] + '*' + arrayTwee[i] + '=' + antwoord + "<br>");//Uitwerking van de opdracht.
    }
    document.write("<br>");
}

vermenigvuldigen();//Om de functie aan te roepen.