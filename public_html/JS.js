var tomb = [];
function feltolt(db) {
    tomb=[];
    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random() * 10 + 1);
        tomb[i] = vel;

    }
    console.log(tomb);
    document.getElementById("szoveg").innerHTML = "A tömb elemei: " + tomb;
    
   
}

function osszegzes(){
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az elemek összege: " + osszeg;
}


function legnagyobb(){
    
    var legNaSzam = 0;
    
    for (var i = 0; i < tomb.length; i++) {
        
        if(tomb[i] > legNaSzam){
            
            legNaSzam = tomb[i];
        }
    }
    document.getElementById("legnagyobb").innerHTML = "A legnagyobb szám: " + legNaSzam;
    
    // By Melinda
}


function dolgozz() {
    
    var adat = document.getElementById("adat").value;
    feltolt(adat);
    osszegzes();

    legnagyobb();
    paros();

}

function init() {
    console.log("Itt vagyok");
    document.getElementById("szoveg").innerHTML = "A Js dolgozik!";
    document.getElementById("ok").addEventListener("click", dolgozz);
}

function paros(){
    var parostomb=[];
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i]%2===0){
            parostomb.push(tomb[i]);
        }
    }
    document.getElementById("parosszam").innerHTML = "Páros szamok: "+parostomb;
}

window.addEventListener("load", init)

