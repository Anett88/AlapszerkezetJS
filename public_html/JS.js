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
    forditottkiiras()
    otteloszthato();

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

