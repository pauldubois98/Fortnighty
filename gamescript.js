var c=document.getElementById("game");
var ctx=c.getContext("2d");
var img = new Image();
img.src = "Sprite_2_final/Sprite_2-0.png"
var backgroundimage = new Image();
backgroundimage.src = "Background.png"
//var img=document.getElementById("man");

var h=50;
var w=20;
var x=150;
var y=c.height-h;
var step=5;
var anglestep=Math.PI/6;
var angle=0;
var speed=5;

var ennemies = [(100, 50), (800)]

window.onload = function() {
  background();
  person();
  document.addEventListener("keydown", key, false);
};

function person() {
  //ctx.clearRect(x,y, x+w, y+h);
  angle=(angle+24)%12;
  img.src="Sprite_2_final/Sprite_2-"+angle+".png";
  ctx.drawImage(img,x,y, w, h);
  console.log("image:"+img.src);

}

function background() {
  ctx.drawImage(backgroundimage,0,0, c.width, c.height);
}

function key(e){
  console.log(e.keyCode);
  if(e.keyCode == '37' && x+10>0){
    x=x-step;
    background();
    person();
  }
  if(e.keyCode == '39' && x+10<c.width){
    x=x+step;
    background();
    person();
  }
  if(e.keyCode == '38' && x+10<c.width){
    angle -= 1;
    background();
    person();
  }
  if(e.keyCode == '40' && x+10<c.width){
    angle+=1;
    background();
    person();
  }
  if(e.keyCode == '32'){
    console.log("shoot");
    shoot(x+w/2,y+h/4,2, angle*Math.PI/6,speed,20, true, 0);
  }

}



function shoot(posx, posy, r, a, s, time, stillIn, g){
  background();

  //incr
  g+=0.1;
  posx = posx+Math.cos(a)*s;
  posy = posy+Math.sin(a)*s+g;

  //draw a circle
  ctx.beginPath();
  ctx.arc(posx, posy, r, 0, Math.PI*2);
  ctx.closePath();
  ctx.fillStyle = '#000';
  ctx.fill();

  person();



  if(stillIn){
    if(posx<0 || posx>c.width || posy<0 || posy>c.height){
      setTimeout(function(){shoot(posx, posy, r, a, s, time, false);}, time);
    }
    else {
      setTimeout(function(){shoot(posx, posy, r, a, s, time, true, g);}, time);
    }
  }
  else {
    console.log("end");
  }

}
