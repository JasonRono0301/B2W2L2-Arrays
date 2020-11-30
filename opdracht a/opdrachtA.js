//Opdracht A 
//Arrays.
//Lab 2.

var weekDays = ['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag']//Array met alle dagen van de week.
var weekLen = weekDays.length;//Een variabele met daarin hoelang de array is. In dit geval 6.
console.log(weekLen);//Laat in de console zien hoeveel waardes in de array zitten.

document.write("<h2>" + "Alle dagen van de week zijn:" + "<br>" + weekDays + "<br>");

document.write("<h2>" + "De werkdagen zijn:" + "<br>");
document.write(weekDays[0], weekDays[1],weekDays[2],weekDays[3],weekDays[4] + "<br>" + "<br>");

document.write("De weekenddagen zijn:");
document.write(weekDays[5],weekDays[6]+ "<br>" + "<br>");

document.write("Alle dagen van de week in omgekeerde volgorde zijn:" + "<br>");
document.write(weekDays[6],weekDays[5],weekDays[4],weekDays[3],weekDays[2],weekDays[1],weekDays[0] + "<br>" + "<br>");

document.write("De werkdagen in omgekeerde volgorde zijn:");
document.write(weekDays[4], weekDays[3],weekDays[2],weekDays[1],weekDays[0] + "<br>" + "<br>");

document.write("De weekenddagen in omgekeerde volgorde zijn:" + "<br>");
document.write(weekDays[6],weekDays[5]);




