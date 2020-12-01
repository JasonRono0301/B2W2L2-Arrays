//Opdracht C.
//Lab 2.

var getallen = [1,2,3,4,5,6,7,8,9,10];//De getallen waarmee de getallen 2,4,6,8 worden vermedigvuldigd.
var tafels = [2,4,6,8];//De getallen van de tafels.

document.write("<h2>" + "Tafel van 2:" + "<br>" + "</h2>");
function tafel2(){
        for(i=0; i <=9; i++){
            var tafelAntwoord = getallen[i] * tafels[0];
            document.write(getallen[i] + 'x' + tafels[0] + '=' + tafelAntwoord + "<br>");        
        }
}

tafel2();

document.write("<h2>" + "Tafel van 4:" + "<br>" + "</h2>");
function tafel4(){
        for(i=0; i <=9; i++){
            var tafelAntwoord = getallen[i] * tafels[1];
            document.write(getallen[i] + 'x' + tafels[1] + '=' + tafelAntwoord + "<br>");        
        }
}

tafel4();

document.write("<h2>" + "Tafel van 6:" + "<br>" + "</h2>");
function tafel6(){
        for(i=0; i <=9; i++){
            var tafelAntwoord = getallen[i] * tafels[2];
            document.write(getallen[i] + 'x' + tafels[2] + '=' + tafelAntwoord + "<br>");        
        }
}

tafel6();

document.write("<h2>" + "Tafel van 8:" + "<br>" + "</h2>");
function tafel8(){
        for(i=0; i <=9; i++){
            var tafelAntwoord = getallen[i] * tafels[3];
            document.write(getallen[i] + 'x' + tafels[3] + '=' + tafelAntwoord + "<br>");        
        }
}

tafel8();


//Functies worden aangeroepen en gebruik gemaakt van loops zodat de code kort is. En de document.write gebruikt om de uitwerking op het scherm te tonen.