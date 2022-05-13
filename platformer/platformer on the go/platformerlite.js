//variables lite
var playerx=0
var playery=0
var leftinwall=0
var rightinwall=0
var upinwall=0
var downinwall=0
var jumpgrav=0
var playerxchange=0
var playerychange=0
var walking=0
var flooring=0
var inwater=0
var noairnoprob=0
var breathing=0
var flight=2
var nograv=0
var flightx=0
var flighty=0
var isjumping=0
var freezemost=0
var scrolld=0
var momentum=0
var moving=0
var fullyinsidewall=0
var gravity=0
var playercolliding=0 
var playerinair=0
var playersize=1
var debugspeed=25
var died=-1
var walking2=0
var freecammode=0
var spawns=0
var playerw=0
var playerh=0
var air=75
var hp=12
var bubblefreq=0
var ready=0
function setup(){
var everysinglething=document.querySelectorAll("*");
everysinglething.forEach(existingelement => {
var eletestedpos=0
var first=0
var second=0
var third=0
var c1=999
var c2=999
var c3=999
var checkoffset=0
var coffqueue=0
var backgroundcheck=existingelement.style
let str = backgroundcheck.backgroundColor;
if (str[4]!=undefined){
c1=str[4]
if (str[5]=="," || str[5]==" "){
coffqueue+=1
} else {
c2=str[5]
}
if (str[6]=="," || str[6]==" "){
coffqueue+=1
} else {
c3=str[6]
}
if (c2!=999 && c3!=999){
first=c1+""+c2+""+c3
} else if (c2==999 && c3!=999){
first=c1+""+c3
} else if (c2!=999 && c3==999){
first=c1+""+c2
} else if (c2==999 && c3==999){
first=c1
}
c1=999
c2=999
c3=999
checkoffset+=coffqueue
coffqueue=0
c1=str[9-checkoffset]
if (str[10-checkoffset]=="," || str[10-checkoffset]==" "){
coffqueue+=1
} else {
c2=str[10-checkoffset]
}
if (str[11-checkoffset]=="," || str[11-checkoffset]==" "){
coffqueue+=1
} else {
c3=str[11-checkoffset]
}
if (c2!=999 && c3!=999){
second=c1+""+c2+""+c3
} else if (c2==999 && c3!=999){
second=c1+""+c3
} else if (c2!=999 && c3==999){
second=c1+""+c2
} else if (c2==999 && c3==999){
second=c1
}
c1=999
c2=999
c3=999
checkoffset+=coffqueue
coffqueue=0
c1=str[14-checkoffset]
if (str[15-checkoffset]==")"){
coffqueue+=1
} else {
c2=str[15-checkoffset]
}
if (str[16-checkoffset]==")" || str[16-checkoffset]==undefined){
coffqueue+=1
} else {
c3=str[16-checkoffset]
}
if (c2!=999 && c3!=999){
third=c1+""+c2+""+c3
} else if (c2==999 && c3!=999){
third=c1+""+c3
} else if (c2!=999 && c3==999){
third=c1+""+c2
} else if (c2==999 && c3==999){
third=c1
}
if (first<=69 && second<=69 && third<=69){
existingelement.classList.add('collision')
var addhitbox = document.createElement("div")
addhitbox.classList.add('hitbox')
addhitbox.style="opacity: 0; z-index: 1001; position: absolute; width: 100%; height: 100%; background-color: transparent; border: 1px #FF0000 solid; left: -1px; top: -1px;"
existingelement.appendChild(addhitbox)
eletestedpos=1
} else if (first<20 && second<20 && third>=169){
existingelement.classList.add('water')
eletestedpos=1
}
}
if (eletestedpos==0){
first=0
second=0
third=0
c1=999
c2=999
c3=999
checkoffset=0
coffqueue=0
backgroundcheck=existingelement.style
str = backgroundcheck.color;
if (str[4]!=undefined){
c1=str[4]
if (str[5]=="," || str[5]==" "){
coffqueue+=1
} else {
c2=str[5]
}
if (str[6]=="," || str[6]==" "){
coffqueue+=1
} else {
c3=str[6]
}
if (c2!=999 && c3!=999){
first=c1+""+c2+""+c3
} else if (c2==999 && c3!=999){
first=c1+""+c3
} else if (c2!=999 && c3==999){
first=c1+""+c2
} else if (c2==999 && c3==999){
first=c1
}
c1=999
c2=999
c3=999
checkoffset+=coffqueue
coffqueue=0
c1=str[9-checkoffset]
if (str[10-checkoffset]=="," || str[10-checkoffset]==" "){
coffqueue+=1
} else {
c2=str[10-checkoffset]
}
if (str[11-checkoffset]=="," || str[11-checkoffset]==" "){
coffqueue+=1
} else {
c3=str[11-checkoffset]
}
if (c2!=999 && c3!=999){
second=c1+""+c2+""+c3
} else if (c2==999 && c3!=999){
second=c1+""+c3
} else if (c2!=999 && c3==999){
second=c1+""+c2
} else if (c2==999 && c3==999){
second=c1
}
c1=999
c2=999
c3=999
checkoffset+=coffqueue
coffqueue=0
c1=str[14-checkoffset]
if (str[15-checkoffset]==")"){
coffqueue+=1
} else {
c2=str[15-checkoffset]
}
if (str[16-checkoffset]==")" || str[16-checkoffset]==undefined){
coffqueue+=1
} else {
c3=str[16-checkoffset]
}
if (c2!=999 && c3!=999){
third=c1+""+c2+""+c3
} else if (c2==999 && c3!=999){
third=c1+""+c3
} else if (c2!=999 && c3==999){
third=c1+""+c2
} else if (c2==999 && c3==999){
third=c1
}
if (first<=69 && second<=69 && third<=69){
existingelement.classList.add('collision')
var addhitbox = document.createElement("div")
addhitbox.classList.add('hitbox')
addhitbox.style="opacity: 0; z-index: 1001; position: absolute; width: 100%; height: 100%; background-color: transparent; border: 1px #FF0000 solid; left: -1px; top: -1px;"
existingelement.appendChild(addhitbox)
eletestedpos=1
} else if (first<20 && second<20 && third>=169){
existingelement.classList.add('water')
eletestedpos=1
}
}
}
});
var gamestuf = document.createElement("div")
gamestuf.innerHTML='<a id="player" style="margin: 0 auto; z-index: 999; display: inline-block; width: 20px; height: 20px; background-color: #000000; position: absolute; left: -20px; top: -20px;"><div id="playerleftcollision" style="opacity: 0; pointer-events: none; display: block; width: 5px; height: 15px; background-color: #FF0000; position: absolute; left: 0px; top: 2px"></div><div class="hitbox2" id="hitting" style="opacity: 0; pointer-events: none; display: block; width: 10px; height: 5px; background-color: #0088FF; left: 5px; position: absolute; top: 0px"></div><div id="playerrightcollision" style="opacity: 0; pointer-events: none; display: inline-block; width: 5px; height: 15px; background-color: #FF0000; right: 0px; position: absolute; top: 2px"></div><div id="playergroundcollision" style="opacity: 0; pointer-events: none; display: block; width:18px; height: 4px; background-color: #0088FF; left: 1px; position: absolute; bottom: 1px"></div><div id="playerceilingcollision" style="opacity: 0; pointer-events: none; display: block; width: 18px; height: 5px; background-color: #0088FF; left: 1px; position: absolute; top: 0px"></div><div id="playerwalkcollision" style="opacity: 0; pointer-events: none; z-index: unset; display: block; width: 19px; height: 3px; background-color: #00FF00; left: 0.5px; position: absolute; bottom: -3px;"></div><div id="playerfloorcollision" style="opacity: 0; pointer-events: none; z-index: unset; display: block; width: 18px; height: 1px; background-color: #00FF00; left: 1px; position: absolute; bottom: 0.5px;"></div><div id="playerwatercollision" style="opacity: 0; pointer-events: none; z-index: unset; display: block; width: 16px; height: 16px; background-color: #0000FF; left: 2px; position: absolute; top: 2px;"></div><div id="playeraircollision" style="pointer-events: none; opacity: 0; z-index: unset; display: block; width: 16px; height: 8px; background-color: #8888FF; left: 2px; position: absolute; bottom: 10px;"></div><div id="detectportal" style="pointer-events: none; opacity: 0; border: 1px solid transparent; position: absolute; z-index: 1000; opacity: 50%; display: block; width: 18px; height: 18px; position: absolute; left: 0px; top: 0px;"></div></div></a><a style="pointer-events: none; position: fixed; left: 0px; top: 0px;"><div style="pointer-events: none; position: fixed; z-index: 1000000;" id="healthbar"><svg id="HEART1" fill="#000000" style="position: fixed; top: 0px; left: 0px; "><path d="m 12 4.248 c -3.148 -5.402 -12 -3.825 -12 2.944 c 0 3.661 2 4.9 3 6 l 9 0 z"></path></svg><svg id="HEART4" fill="#000000" style="position: fixed; top: 0px; left: 0px;"><path d="m 12 4.248 c 3.148 -5.402 12 -3.825 12 2.944 c 0 3.661 -2 4.9 -3 6 l -9 0 z "></path></svg><svg id="HEART2" fill="#000000" style="position: fixed; top: 13px; left: 2px;"><path d="m 10 0 m -9 0 L 10 0 l 0 7 z"></path></svg><svg id="HEART3" fill="#000000" style="position: fixed; top: 13px; left: 2px;"><path d="m 10 0 m 9 0 L 10 0 l 0 7 z"></path></svg></div><div style="position: fixed; z-index: 1000000;"><svg id="HEART5" fill="#000000" style="position: fixed; top: 0px; left: 25px; "><path d="m 12 4.248 c -3.148 -5.402 -12 -3.825 -12 2.944 c 0 3.661 2 4.9 3 6 l 9 0 z"></path></svg><svg id="HEART8" fill="#000000" style="position: fixed; top: 0px; left: 25px;"><path d="m 12 4.248 c 3.148 -5.402 12 -3.825 12 2.944 c 0 3.661 -2 4.9 -3 6 l -9 0 z "></path></svg><svg id="HEART6" fill="#000000" style="position: fixed; top: 13px; left: 27px;"><path d="m 10 0 m -9 0 L 10 0 l 0 7 z"></path></svg><svg id="HEART7" fill="#000000" style="position: fixed; top: 13px; left: 27px;"><path d="m 10 0 m 9 0 L 10 0 l 0 7 z"></path></svg></div><div style="position: fixed; z-index: 1000000;"><svg id="HEART9" fill="#000000" style="position: fixed; top: 0px; left: 50px; "><path d="m 12 4.248 c -3.148 -5.402 -12 -3.825 -12 2.944 c 0 3.661 2 4.9 3 6 l 9 0 z"></path></svg><svg id="HEART12" fill="#000000" style="position: fixed; top: 0px; left: 50px;"><path d="m 12 4.248 c 3.148 -5.402 12 -3.825 12 2.944 c 0 3.661 -2 4.9 -3 6 l -9 0 z "></path></svg><svg id="HEART10" fill="#000000" style="position: fixed; top: 13px; left: 52px;"><path d="m 10 0 m -9 0 L 10 0 l 0 7 z"></path></svg><svg id="HEART11" fill="#000000" style="position: fixed; top: 13px; left: 52px;"><path d="m 10 0 m 9 0 L 10 0 l 0 7 z"></path></svg></div></a><a id="airtotal" style="z-index: 1000000; display: inline-block; position: fixed; height: 5px; overflow: hidden; width: 75px; top: 20px; left: 0px; background-color: #000000"><a id="airamount" style="z-index: 9999999; display: inline-block; position: fixed; height: 5px; overflow: hidden; width: 75px; top: 20px; left: -75px; background-color: #008FFF"></a></a><button id="respawn" onclick="spawn()" style="display: none; width: 20px; height: 20px; position: fixed; top: 0px; left: 75px; text-align: center;"><a style="position: absolute; left: 2px; top: -1px;">↻</a></button>'
document.body.appendChild(gamestuf)
ready=1
}
document.body.addEventListener('keydown', momentumon1);
document.body.addEventListener('keyup', momentumoff);
function spawn(){
if (ready==1){
playerychange=0
playerxchange=0
air=75
hp=12
died=-1
document.getElementById("airamount").style.left="0px"
spawns=spawns+1
playerx=0
playery=0
document.getElementById("respawn").style="display: none; width: 20px; height: 20px; position: fixed; top: 0px; left: 75px; text-align: center;"
}
}
var checks = setInterval(function(){
if (ready==1){
if (died==1){
hp=0
moving=0
momentum=0
document.getElementById("respawn").style="display: block; width: 20px; height: 20px; position: fixed; top: 0px; left: 75px; text-align: center;"
} else {
gravity=(1*(playersize*1.25))
}
}
}, 1)
var xychange = setInterval (function(){
if (ready==1){
playerw=document.getElementById("player").clientWidth
playerh=document.getElementById("player").clientHeight
if (freezemost==0){
playerx=playerx+playerxchange
playery=playery+playerychange
}
if (playerx<=0){
playerx=0
if (flightx==-1){
flightx=0
}
if (playerxchange<0){
playerxchange=0
}
}
if (playerx>=(window.innerWidth-20)){
playerx=(window.innerWidth-20)
if (flightx==1){
flightx=0
}
if (playerxchange>0){
playerxchange=0
}
}
if (playery>=(window.innerHeight)){
died=1
flight=2
}
if (playery<=0){
playery=0
if (playerychange<0){
playerychange=0
}
if (flighty==1){
flighty=0
}
}
document.getElementById("player").style.left=playerx+"px"
document.getElementById("player").style.top=playery+"px"
}
}, 10)
var detectOverlap = (function () {
    function getPositions(elem) {
        var pos = elem.getBoundingClientRect();
        return [[pos.left, pos.right], [pos.top, pos.bottom]];
    }

    function comparePositions(p1, p2) {
        var r1, r2;
        if (p1[0] < p2[0]) {
          r1 = p1;
          r2 = p2;
        } else {
          r1 = p2;
          r2 = p1;
        }
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function (a, b) {
        var pos1 = getPositions(a),
            pos2 = getPositions(b);
        return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
    };
})();
var boxes = document.querySelectorAll('.collision');
var player = document.getElementById("player")
function clickHandlerleftwall() {
    
    var elem     = document.getElementById("playerleftcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    		leftinwall=1
        } else {
        leftinwall=0
        }
    }
function clickHandlerrightwall() {
    
    var elem     = document.getElementById("playerrightcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    		rightinwall=1
        } else {
        rightinwall=0
        }
    }
function clickHandlerground() {
    
    var elem     = document.getElementById("playergroundcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    		downinwall=1
        } else {
        downinwall=0
        }
    }
function clickHandlerceiling() {
    
    var elem     = document.getElementById("playerceilingcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    		upinwall=1
        jumpgrav=0
        playerychange=0
        } else {
        upinwall=0
        }
    }
function clickHandlerwalk() {
    
    var elem     = document.getElementById("playerwalkcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    		walking=1
        } else {
        walking=0
        }
    }
function clickHandlerfloor() {
    
    var elem     = document.getElementById("playerfloorcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    		flooring=1
        canjump=1
        isjumping=0
        } else {
        flooring=0
        }
    }
function clickHandlerwater() {
    
    var elem     = document.getElementById("playerwatercollision"),
        elems    = document.querySelectorAll('.water'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    	  inwater=1
        } else {
        if (flight==0 || flight==2 ){
        if (playerychange<=-4 && inwater==1){
        playerychange=(playerychange*0.1875)
        } else if (playerychange>-4 && playerychange<-2 && inwater==1){
        playerychange=(playerychange*0.375)
        } else if (playerychange<1 && playerychange>-2 && inwater==1){
        playerychange=(playerychange*0.75)
        }
        }
        inwater=0
        }
    }
function clickHandlerair() {
    
    var elem     = document.getElementById("playeraircollision"),
        elems    = document.querySelectorAll('.water'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
        }
    }
    if (touching.length) {
    	  breathing=0
        } else {
        breathing=1
        }
    }
function momentumon1(e){
if (ready==1){
if (freezemost==0){
if (e.keyCode==65 && died==-1){
if (flight==0 || flight==2){
moving=-1
} else if (flightx!=1) {
flightx=-1
}
} else if (e.keyCode==68 && died==-1){
if (flight==0 || flight==2 ){
moving=1
} else if (flightx!=-1) {
flightx=1
}
} else if (e.keyCode==87 && died==-1){
if (flight==1 && flightx!=1){
flighty=-1
}
} else if (e.keyCode==83 && died==-1){
if (flight==1 && flightx!=-1){
flighty=1
}
} else if (e.keyCode==32 && died==-1){
if (isjumping==0 || inwater==1){
if (canjump==1 || inwater==1){
if (inwater==1){
jumpgrav=2
isjumping=0
} else {
jumpgrav=2
isjumping=1
}
}
}
} else if (e.keyCode==69 && died==-1){
if (flooring==0 && flight==1){
flightx=0
flighty=0
playerychange=0
playerxchange=0
flight=2
nograv=0
} else if (flooring==0 && flight==2){
flightx=0
flighty=0
playerychange=0
playerxchange=0
flight=1
nograv=1
}
} else if (e.keyCode==37 && freecammode==1){
scrolld=-1
} else if (e.keyCode==38 && freecammode==1){
scrolld=-2
} else if (e.keyCode==39 && freecammode==1){
scrolld=1
} else if (e.keyCode==40 && freecammode==1){
scrolld=2
}
}
}
}
function momentumoff(e){
if (ready==1){
if (e.keyCode==65 && died==-1){
moving=0
if (flightx!=1){
flightx=0
}
} else if (e.keyCode==87 && died==-1){
if (flight==1 && flightx!=1){
flighty=0
}
} else if (e.keyCode==83 && died==-1){
if (flight==1 && flightx!=-1){
flighty=0
}
} else if (e.keyCode==68 && died==-1){
moving=0
if (flightx!=-1){
flightx=0
}
} else if (e.keyCode==37){
scrolld=0
} else if (e.keyCode==38){
scrolld=0
} else if (e.keyCode==39){
scrolld=0
} else if (e.keyCode==40){
scrolld=0
}
}
}
var momentumcalc = setInterval(function(){
if (ready==1){
if (freezemost==0){
playerxchange=playerxchange + (momentum/(debugspeed/playersize))
}
}
}, 10)
var momentumtime = setInterval(function(){
if (ready==1){
if (freezemost==0){
if (moving==1 && momentum < 0.5){
momentum+=(0.5/(inwater+1))
} else if (moving==-1 && momentum > -0.5){
momentum-=(0.5/(inwater+1))
} else if (moving==0 && momentum > 0.5){
momentum-=(0.5/(inwater+1))
} else if (moving==0 && momentum < -0.5){
momentum+=(0.5/(inwater+1))
} else if (moving==0) {
momentum=0
if (died==-1){
if (playerxchange>0.1 && playerxchange != 0 && moving==0){
playerxchange=playerxchange-(0.1/(inwater+1))
} else if (playerxchange<-0.1 && playerxchange != 0 && moving==0){
playerxchange=playerxchange+(0.1/(inwater+1))
}
} else {
if (walking==1 && playerxchange>0.1){
playerxchange-=0.1
} else if (walking==1 && playerxchange<-0.1){
playerxchange+=0.1
} else if (walking2==1 && playerxchange>0.1){
playerxchange-=0.1
} else if (walking2==1 && playerxchange<-0.1){
playerxchange+=0.1
}
}
if (playerxchange<=0.1 && playerxchange>=-0.1 && moving==0){
playerxchange=0
}
}
}
}
}, 25)
var collidetime = setInterval(function(){
if (ready==1){
if (playercolliding==1 && playerinair==0){
gravity=0
} else {
gravity=(1*(playersize*1.25))
}
}
}, 1)
function jumpornope() {
    
    var elem     = document.getElementById("playerwalkcollision"),
        elems    = document.querySelectorAll('.hitbox'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
            touching.left
            lasttouched="document.getElementById('"+touching+"')"
        }
    }
    if (touching.length) {
    		canjump=1
        } else {
        if (touching=="water"){
        canjump=1
        } else {
        canjump=0
        }
        }
    }
function clickHandler() {
    
    var elem     = document.getElementById("player"),
        elems    = document.querySelectorAll('.collision'),
        elemList = Array.prototype.slice.call(elems),
        within   = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            touching.push(elemList[i].id);
            touching.left
            lasttouched="document.getElementById('"+touching+"')"
        }
    }
    if (touching.length) {
    		playercolliding=1
        playerinair=0
        } else {
        if (touching=="water"){
        playercolliding=1
        playerinair=0
        } else {
        playercolliding=0
        playerinair=1
        }
        }
    }
var collisioncheck = setInterval(function(){
if (ready==1){
clickHandlerair()
clickHandlerwater()
jumpornope()
clickHandlerwalk()
clickHandlerfloor()
//clickHandler()
if (flight==0 || flight==2 ){
if (upinwall==1 && downinwall==1 && leftinwall==1 && rightinwall==1){
fullyinsidewall=1
} else {
fullyinsidewall=0
if (upinwall==1){
playerychange=0
playery+=0.25
jumpgrav=0
}
if (downinwall==1){
playerychange=0
playery-=0.25
jumpgrav=0
}
if (leftinwall==1){
playerxchange=0
playerx+=0.1
momentum=0
}
if (rightinwall==1){
playerxchange=0
playerx-=0.1
momentum=0
}
}
}
clickHandlerrightwall()
clickHandlerceiling()
clickHandlerground()
clickHandlerleftwall()
}
}, 1)
var breathe = setInterval(function(){
if (ready==1){
if (died==-1 && freezemost==0){
if (breathing==0 || fullyinsidewall==1){
if (noairnoprob==0 && flight!=1){
air=air-0.25
}
} else if (breathing==1 && air<75 || fullyinsidewall==1 && air<75){
if (air<0){
air=0
} else if (died==-1 && flight!=1){
air=air+2.5
if (air>75){
air=75
}
}
}
} else {
if (air!=0 && died==1){
air=air-2.5
}
}
if (air>37 && air<=75){
document.getElementById("airamount").style="z-index: 9999999; display: inline-block; position: fixed; height: 5px; overflow: hidden; width: 75px; top: 20px; left: "+(air-75)+"px; background-color: #008FFF"
} else if (air>15 && air<=37){
document.getElementById("airamount").style="z-index: 9999999; display: inline-block; position: fixed; height: 5px; overflow: hidden; width: 75px; top: 20px; left: "+(air-75)+"px; background-color: #FF8F00"
} else if (air>0 && air<=15){
document.getElementById("airamount").style="z-index: 9999999; display: inline-block; position: fixed; height: 5px; overflow: hidden; width: 75px; top: 20px; left: "+(air-75)+"px; background-color: #FF0000"
} else if (air==0){
document.getElementById("airamount").style="z-index: 9999999; display: inline-block; position: fixed; height: 5px; overflow: hidden; width: 75px; top: 20px; left: "+(air-75)+"px; background-color: #008FFF"
}
}
}, 50)
var health = setInterval(function (){
if (ready==1){
if (hp>=12){
document.getElementById("HEART12").style.fill="#FF0000"
document.getElementById("HEART11").style.fill="#FF0000"
document.getElementById("HEART10").style.fill="#FF0000"
document.getElementById("HEART9").style.fill="#FF0000"
document.getElementById("HEART8").style.fill="#FF0000"
document.getElementById("HEART7").style.fill="#FF0000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==11){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#FF0000"
document.getElementById("HEART10").style.fill="#FF0000"
document.getElementById("HEART9").style.fill="#FF0000"
document.getElementById("HEART8").style.fill="#FF0000"
document.getElementById("HEART7").style.fill="#FF0000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==10){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#FF0000"
document.getElementById("HEART9").style.fill="#FF0000"
document.getElementById("HEART8").style.fill="#FF0000"
document.getElementById("HEART7").style.fill="#FF0000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==9){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#FF0000"
document.getElementById("HEART8").style.fill="#FF0000"
document.getElementById("HEART7").style.fill="#FF0000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==8){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#FF0000"
document.getElementById("HEART7").style.fill="#FF0000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==7){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#FF0000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==6){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#FF0000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==5){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#000000"
document.getElementById("HEART5").style.fill="#FF0000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==4){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#000000"
document.getElementById("HEART5").style.fill="#000000"
document.getElementById("HEART4").style.fill="#FF0000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==3){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#000000"
document.getElementById("HEART5").style.fill="#000000"
document.getElementById("HEART4").style.fill="#000000"
document.getElementById("HEART3").style.fill="#FF0000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==2){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#000000"
document.getElementById("HEART5").style.fill="#000000"
document.getElementById("HEART4").style.fill="#000000"
document.getElementById("HEART3").style.fill="#000000"
document.getElementById("HEART2").style.fill="#FF0000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==1){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#000000"
document.getElementById("HEART5").style.fill="#000000"
document.getElementById("HEART4").style.fill="#000000"
document.getElementById("HEART3").style.fill="#000000"
document.getElementById("HEART2").style.fill="#000000"
document.getElementById("HEART1").style.fill="#FF0000"
} else if (hp==0){
document.getElementById("HEART12").style.fill="#000000"
document.getElementById("HEART11").style.fill="#000000"
document.getElementById("HEART10").style.fill="#000000"
document.getElementById("HEART9").style.fill="#000000"
document.getElementById("HEART8").style.fill="#000000"
document.getElementById("HEART7").style.fill="#000000"
document.getElementById("HEART6").style.fill="#000000"
document.getElementById("HEART5").style.fill="#000000"
document.getElementById("HEART4").style.fill="#000000"
document.getElementById("HEART3").style.fill="#000000"
document.getElementById("HEART2").style.fill="#000000"
document.getElementById("HEART1").style.fill="#000000"
}
}
}, 1)
function bubblemaker(){
if (ready==1){
if (died==-1 && inwater==1){
var bubbl = document.createElement("a")
bubbl.setAttribute('class', 'bubble')
bubblerand=(Math.floor(Math.random() * (playerw)))
bubbl.style="position: absolute; width: 8px; height: 8px; left: "+((playerx+bubblerand)-(playerw/(2*playeropps)))+"px; top:"+playery+"px; border: 2px solid #0088FF; border-radius: 100%;"
document.body.appendChild(bubbl)
}
}
}
var bubblefreqthing = function() {
	bubblemaker()
  bubblefreq=((2250*(air/75))+250)
  timeout = setTimeout(bubblefreqthing, bubblefreq);
}
var timeout = setTimeout(bubblefreqthing, bubblefreq);
var bubblemover = setInterval(function(){
if (ready==1){
bubbleexist = document.querySelectorAll('.bubble');
bubbleexist.forEach(existingelement => {
  bubbley=existingelement.offsetTop
  existingelement.style.top=(bubbley-1)+"px"
  bubbley=0
  clickHandlerbubble(existingelement)
})
}
}, 25)
var gravmath = setInterval (function(){
if (ready==1){
if (playerychange>-64 && nograv==0 && flight==0 && freezemost==0 || flight==2 && playerychange>-64 && nograv==0 && freezemost==0){
if (flooring==0 || jumpgrav!=0){
playerychange=playerychange+((0.125*gravity)-jumpgrav)
} else {
playerychange=0
}
if (jumpgrav!=0){
jumpgrav=jumpgrav-1
}
} else if (playerychange<=-64){
playerychange=-64
}
}
}, 25)
var flying = setInterval(function(){
if (ready==1){
if (flighty==-1){
playery+=-1
}
if (flighty==1){
playery+=1
}
if (flightx==-1){
playerx+=-1
}
if (flightx==1){
playerx+=1
}
}
}, 1)
setup()
