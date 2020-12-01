//Opdracht A 
//Arrays.
//Lab 2.

var weekDays = ['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag']//Array met alle dagen van de week.

document.write("<h2>" + 'Alle dagen van de week zijn:' + "<br>");
function weekdagen(){
        for(i=0; i < 7; i++){
            document.write(weekDays[i] +''+',');
        }
}

weekdagen();//Functie voor de weekdagen.

document.write("<h2>" + 'De werkdagen zijn:' + "<br>");
function workdays(){
    for(i=0; i < 5; i++){
        document.write(weekDays[i] +''+',');
    }
}

workdays();//Functie voor de werkdagen.

document.write("<h2>" +"De weekenddagen zijn:" + "<br>");
function weekenddays(){
    for(i=5; i < 7; i++){
        document.write(weekDays[i] +''+',')
    }
}

weekenddays();//Function voor de weekenddagen.

document.write("<h2>" + 'Alle dagen in omgekeerde volgorde zijn:' + "<br>");
function omgekeerdeweek(){
    for(i=6; i >= 0; i--){
        document.write(weekDays[i] + ''+',');
    }
}

omgekeerdeweek();//Function voor de omgekeerde weekdagen.

document.write('<h2>' + 'De werkdagen in omgekeerde volgorde zijn:'+ "<br>");
function omgekeerdewerk(){
    for(i=4; i >=0; i--){
        document.write(weekDays[i] +''+',');
    }
}

omgekeerdewerk();//Functie voor de omgekeerde werkdagen.

document.write('<h2>' + 'De weekenddagen in omgekeerde volgorde zijn:'+ "<br>");
function omgekeerdeweekend(){
    for(i=6; i >=5; i--){
        document.write(weekDays[i] +''+',');
    }
}

omgekeerdeweekend();//Functie voor de omgekeerde weekend.

//Heb gebruikt gemaakt van functies zodat ik de lokale i in de loops meerdere keren kan gebruiken.
//En door middel van de globale var van de weekdagen dan hoef ik de var > weekdagen niet te veranderen in de functies.