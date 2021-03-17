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

function otteloszthato(){
    var db=0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%5==0){
            db+=1;
        }
    }

    document.getElementById("otteloszthatok").innerHTML = "Öttel osztható számok darabszáma " + db;
}
function forditottkiiras(){
    var tomb2=[];
    for (var i = tomb.length ; i >= 0  ; i--) {
        tomb2 +=tomb[i];
    }
    document.getElementById("forditottszam").innerHTML = "Visszafelé kiírás " + tomb2;
}

function dolgozz() {
    
    var adat = document.getElementById("adat").value;
    feltolt(adat);
    osszegzes();
    forditottkiiras()
    otteloszthato();

}

function init() {
    console.log("Itt vagyok");
    document.getElementById("szoveg").innerHTML = "A Js dolgozik!";
    document.getElementById("ok").addEventListener("click", dolgozz);
}

window.addEventListener("load", init)

