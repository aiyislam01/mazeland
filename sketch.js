var hhIMG
var vhIMG
function preload(){
hhIMG=loadImage("hh.png")
vhIMG=loadImage("vh.png")
}
 
function setup(){
createCanvas (400,400)
var cardboard1 = createSprite(0,60,100,20);
cardboard1.addImage(hhIMG)
cardboard1.scale=0.1
var cardboard2 = createSprite(95,6,20,100);
cardboard2.addImage(vhIMG)
cardboard2.scale=0.09
var cardboard3 = createSprite(98,104,100,20);
var cardboard4 = createSprite(190,40,100,20);
var cardboard5 = createSprite(190,135,20,100);
var cardboard6 = createSprite(76,190,20,100);
var cardboard7 = createSprite(160,225,100,20);
var cardboard8 = createSprite(260,205,20,100);
var cardboard9 = createSprite(270,105,100,20);
var cardboard10 = createSprite(285,25,20,100);
var cardboard11 = createSprite(14,272,100,20);
var cardboard12 = createSprite(5,160,20,100);
var cardboard13 = createSprite(105,317,20,100);
var cardboard14 = createSprite(370,25,100,20);
var cardboard15 = createSprite(325,180,20,100);
var cardboard16 = createSprite(195,287,100,20);
var cardboard17 = createSprite(350,270,100,20);
var cardboard18 = createSprite(394,120,20,100);
var cardboard19 = createSprite(45,380,20,100);
var cardboard20 = createSprite(155,370,20,100);
var cardboard21 = createSprite(270,105,100,20);
var cardboard22 = createSprite(335,320,140,20);
var cardboard23 = createSprite(230,390,20,100);
var Alice = createSprite(20,20,18,18);

}

function draw(){

background("blue")








    drawSprites()
}




