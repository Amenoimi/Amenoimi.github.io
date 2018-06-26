var canvas;
var rain = new Array(200);

function canvas_resize(){
  var wx = window.innerWidth;
  var wy = window.innerHeight;

  canvas.width = wx;
  canvas.height = wy;
}

function draw_bk() {
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgb(50,50,200)";
      ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight)
      ctx.fillStyle = "rgb(0,180,0)";
      //ctx.fill();
      ctx.fillRect (0, 400, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/2);

    
    }
  }

function window_w_rnd(){
  var rnd = Math.floor(Math.random() * (document.getElementById("main").clientWidth - 0 + 1)) + 0;  
  return rnd; 
}

function rnd(max,min){
  var rnd = Math.floor(Math.random() * (max - min + 1)) + min;  
  return rnd; 
}


function rain_re(){
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    //ctx.fillStyle = "rgb(00,0,200)";
    //ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight)
   
    for (var i=0;i<rain.length;i++)
    {
      rain[i]={
        x: window_w_rnd(),
        y: rnd(-500,0),
        h:60,
        w:1,
        radius: 3,
        color: "rgba(0,80,255,0.8)",
        draw: function() {
          
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.h / 2);
          ctx.bezierCurveTo(this.x + this.w / 2, this.y - this.h / 2, this.x + this.w / 2, this.y + this.h / 2, this.x, this.y + this.h / 2);
          ctx.bezierCurveTo(this.x - this.w / 2, this.y + this.h / 2, this.x - this.w / 2, this.y - this.h / 2, this.x, this.y - this.h / 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath()
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.h / 2);
          ctx.bezierCurveTo(this.x + this.w / 4, this.y - this.h / 4, this.x + this.w / 2, this.y + this.h / 2, this.x, this.y + this.h / 2);
          ctx.bezierCurveTo(this.x - this.w / 4, this.y + this.h / 4, this.x - this.w / 2, this.y - this.h / 2, this.x, this.y - this.h / 2);
          ctx.fillStyle = "rgba(200,200,255,0.8)";
          ctx.fill();
          ctx.closePath()
        }
      };
     
     
    }
   
  
  }
}


function rain_ing(){
  for (var i=0;i<rain.length;i++)
  {
    rain[i].y+=rnd(30,10);
    rain[i].x+=rnd(-2,2);
    rain[i].draw();
    if( rain[i].y>document.getElementById("main").clientHeight){
      rain[i].y=rnd(-500,0);
    }
  }
}

function grass_re(){
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.quadraticCurveTo(300,100,500,120);  
  }
}


// A $( document ).ready() block.
$( document ).ready(function() {
  canvas = document.getElementById("main");
  canvas_resize();
  rain_re()
  //rain_ing();

  setInterval(function(){
    draw_bk();
    rain_ing();
    grass_re()
  }, 50)
});


$(window).resize(function() {
  canvas_resize();
});



