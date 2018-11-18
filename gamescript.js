var c=document.getElementById("game");
var ctx=c.getContext("2d");
var player1img = new Image();
var player2img = new Image();
var backgroundimage = new Image();
backgroundimage.src = "Background.png"

var h=50;
var w=20;
var x1=50;
var y1=c.height-h-10;
var life1=true;
var x2=c.width-50;
var y2=c.height-h-10;
var life2=true;
var step=5;
var angle1=0;
var angle2=6;
var speed=5;


window.onload = function() {
  draw();
  document.addEventListener("keydown", key, false);
};


function player1() {
  if(life1){
    angle1=(angle1+24)%12;
    player1img.src="Sprite_1_final/Sprite_1-"+angle1+".png";
    ctx.drawImage(player1img,x1,y1, w, h);
  }

}

function player2() {
  if(life2){
    angle2=(angle2+24)%12;
    player2img.src="Sprite_2_final/Sprite_2-"+angle2+".png";
    ctx.drawImage(player2img,x2,y2, w, h);
  }

}


function background() {
  ctx.clearRect(0,0, c.width, c.height);
  ctx.drawImage(backgroundimage,0,0, c.width, c.height);
}

function draw() {
  background();
  setTimeout(function() {}, 5);
  player1();
  player2();

}


function key(e){
  console.log(e.key);
  //player1
  if(life1){
    if(e.key == 'x' && x1+10>0){
      x1=x1-step;
      draw();
    }
    if(e.key == 'v' && x1+10<c.width){
      x1=x1+step;
      draw();
    }
    if(e.key == 'c'){
      angle1 -= 1;
      draw();
    }
    if(e.key == 'd'){
      angle1 +=1;
      draw();
    }
    //shooting
    if(e.key == 'b'){
      console.log("shoot");
      shoot(x1+w/2,y1+h/2 ,2, angle1*Math.PI/6,speed,20, true, 0, 3);
    }
  }


  //palyer2
  if(life2){
    if(e.key == 'j' && x2+10>0){
      x2=x2-step;
      draw();
    }
    if(e.key == 'l' && x2+10<c.width){
      x2=x2+step;
      draw();
    }
    if(e.key == 'k'){
      angle2 -= 1;
      draw();
    }
    if(e.key == 'i'){
      angle2 +=1;
      draw();
    }
    //shooting
    if(e.key == 'h'){
      console.log("shoot");
      shoot(x2+w/2,y2+h/2 ,2, angle2*Math.PI/6,speed,20, true, 0, 10);
    }
  }





}



function shoot(posx, posy, r, a, s, time, stillIn, g, self){
  //draw background
  background();
  //incr
  g+=0.1;
  self-=1;

  posx = posx+Math.cos(a)*s;
  posy = posy+Math.sin(a)*s+g;
  //draw a circle
  ctx.beginPath();
  ctx.arc(posx, posy, r, 0, Math.PI*2);
  ctx.closePath();
  ctx.fillStyle = '#000';
  ctx.fill();

  player1();
  player2();
  //end
  if( (self<0) && (posx>=x1) && (posx<=(x1+w)) && (posy>=y1) && (posy<=(y1+h)) ){
    life1=false;
    stillIn=false;
    draw();
  }
  if ( (self<0) && (posx>=x2) && (posx<=(x2+w)) && (posy>y2) && (posy<(y2+h)) ) {
    life2=false;
    stillIn=false;
    draw();
  }

  if (stillIn){
    if(posx<0 || posx>c.width || posy>c.height){
      setTimeout(function(){shoot(posx, posy, r, a, s, time, false, g, self);}, time);
    }
    else {
      setTimeout(function(){shoot(posx, posy, r, a, s, time, true, g, self);}, time);
    }
  }
  else {
    console.log("end");
  }
}


draw();
