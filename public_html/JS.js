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
function oszthato(vel) {
    var eldont = false;
    var i = 0;
    while ( i < tomb.length || eldont === false){
    if (tomb[i] % 6 === 0){
    eldont = true    
    }
    i++;
    }
    if (eldont === true){
         document.getElementById("oszthato6").innerHTML = "Igen!"
     }
    else{
         document.getElementById("oszthato6").innerHTML = "nem!"

    }
    }

function osszegzes(){
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az elemek összege: " + osszeg;
}

function dolgozz() {
    
    var adat = document.getElementById("adat").value;
    feltolt(adat);
    osszegzes();

}

function init() {
    console.log("Itt vagyok");
    document.getElementById("szoveg").innerHTML = "A Js dolgozik!";
    document.getElementById("ok").addEventListener("click", dolgozz);
}

window.addEventListener("load", init)

