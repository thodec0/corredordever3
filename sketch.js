var bomb;
var bomb2;

var pessoa;
var pessoa2;

var coin;
var coin2;

var energy;
var energy2;

var power;
var power2;

var linha;
var linha2;

 var nada;

var faixa1;
var faixa2;
var faixa3;

var pontos=0;
var vidas=3;

var nada2;
var nada3;
var nada4;


function preload(){
  //imagens pré-carregadas

  pessoa2=loadAnimation('runner-1.png','runner-2.png');

linha2=loadImage('path.png');

coin2=loadImage('coin.png');

bomb2=loadImage('bomb.png');

energy2=loadImage('energydrink.png');

power2=loadImage('power.png');

}

function play(){

  pessoa.x=World.mouseX;
  

  
  if (coin.isTouching(pessoa)){
    coin.visible=false;
  pontos=pontos+1;
  }
  
  if (coin.isTouching(nada3)){
    coin.x=100;
    coin.y=30;
    coin.visible=true;
  
  }
  
  
  
  if (coin.isTouching(nada2)){
    coin.x=320;
    coin.y=30;
    coin.visible=true;
  }
   if (coin.isTouching(nada4)){
     coin.x=200;
     coin.y=30;
     coin.visible=true;   
    }
 
  if (pessoa.isTouching(bomb)){
    coin.y=30;
    energy.y=30;
    bomb.y=30;
vidas=vidas-1;
bomb.visible=false;
bomb.y=400;
  }
  
if (bomb.isTouching(nada4)){
  bomb.x=200;
  bomb.y=30;
}
  
if (bomb.isTouching(nada3)){
  bomb.x=100;
  bomb.y=30;
}
  
if (bomb.isTouching(nada2)){
  bomb.x=320;
  bomb.y=30;
}
  
  if (energy.isTouching(pessoa)){
  power.x=200;
  power.y=200;
  linha.velocityY=20000;
  energy.visible=false;
  }
  
if (power.x=200){
  power.x=-3444252352434325453323142546757423245454655785466;
} 
if (energy.isTouching(nada2)){
  energy.x=320;
  energy.y=30;
  energy.visible=true;
linha.velocityY=-3;
}
if (energy.isTouching(nada4)){
  energy.x=200;
  energy.y=30;
  energy.visible=true;
  linha.velocityY=-3;
}

if (energy.isTouching(nada3)){
  energy.x=100;
  energy.y=30;
  energy.visible=true;
linha.velocityY=-3;
}

}





function setup(){
  createCanvas(400,400);

  

  nada=createSprite(101,370);
  //crie sprite aqui



faixa1=createSprite(100,30,1,1);
faixa2=createSprite(200,30,1,1);
faixa3=createSprite(300,30,1,1);

nada2=createSprite(100,400,1,1);
nada3=createSprite(200,400,1,1);
nada4=createSprite(320,400,1,1);

  linha= createSprite (200,200);
  linha.addImage(linha2);
  linha.velocityY=3;
linha.scale=1.3;

coin=createSprite(200,50);
coin.addImage(coin2);
coin.velocityY=3;

energy=createSprite(100,50);
energy.addImage(energy2);
energy.scale=0.2;
energy.velocityY=3;

bomb=createSprite(320,50);
bomb.addImage(bomb2);
bomb.scale=0.2;
bomb.velocityY=3;

pessoa=createSprite(200,370);
pessoa.addAnimation('correndo' , pessoa2);
pessoa.scale=0.1;

power=createSprite(1000,1000);
power.addImage(power2);

fill('white')
textSize(20);
  text ('pontos'+pontos,10,30);


}

function draw() {
  background(0);


  
  if(linha.y > 400){ 
    linha.y = linha.height/2;
  }
 
play();


 

 drawSprites();
}
