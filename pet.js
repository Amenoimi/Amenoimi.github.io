var canvas;
var rain = new Array(15);
var grass=new Array(8);


function canvas_resize(){
  var wx = window.innerWidth;
  var wy = window.innerHeight;

  canvas.width = wx;
  canvas.height = wy;
}

function draw_bk() {
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = "rgb(10,100,255)";
      
      ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight)
      ctx.closePath()
      ctx.beginPath();
      ctx.fillStyle = "rgb(10,90,250)";
      ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/2)
      ctx.closePath()
      ctx.beginPath();
      ctx.fillStyle = "rgb(10,80,245)";
      ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/3)
      ctx.closePath()
      ctx.beginPath();
      ctx.beginPath();
      ctx.fillStyle = "rgb(10,70,240)";
      ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/4)
      ctx.closePath()
      ctx.beginPath();
      ctx.fillStyle = "rgb(10,60,255)";
      ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/5)
      ctx.closePath()
      //ctx.fillRect (0, 0, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/5*3)
     // ctx.fillStyle = "rgb(0,180,0)";
      //ctx.fill();
      //ctx.fillRect (0,  document.getElementById("main").clientHeight/5*3, document.getElementById("main").clientWidth, document.getElementById("main").clientHeight/5*2);

    
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
        w:3,
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
          ctx.closePath();
         // ctx.beginPath();
         // var img =new Image();
          //img.src="w.png";
          //ctx.drawImage(img,0,0,document.getElementById("main").clientWidth,document.getElementById("main").clientHeight);
          //ctx.closePath();

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
   
    for (var i=0;i<grass.length;i++)
    {
      grass[i]={
        x:rnd(-document.getElementById("main").clientWidth/30,document.getElementById("main").clientWidth-document.getElementById("main").clientWidth/30) ,
        y: rnd(document.getElementById("main").clientHeight-360,document.getElementById("main").clientHeight-300),
        img:new Image(),
        width:400,
        height:500,
        r:0,
        color: "rgba(0,255,55,1)",
        draw: function() {
         
          this.img.src="s.png";
          ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
          ctx.rotate(this.r*Math.PI/180);
         
         
        }
      };
     
      grass[i].draw();
    }
  }
}
function grass_ing(){
  for (var i=0;i<grass.length;i++)
  {
    grass[i].width+=rnd(-12,12);
    //grass[i].r=rnd(-0.5,0.5);
    grass[i].draw();
    
  }

}
function grass_stop(){
  for (var i=0;i<grass.length;i++)
  {
   
    grass[i].draw();
    
  }

}

// A $( document ).ready() block.
$( document ).ready(function() {
  canvas = document.getElementById("main");
  canvas_resize();
  rain_re();
  grass_re();


  //$('#lil').html('<p>')="data";


 // $.get('load.txt', function(data) {
   
  
 //  }, 'text');



  setInterval(function(){
    canvas_resize();
    draw_bk();
   // grass_ing();
    grass_stop()
    rain_ing();
    
  }, 50)
  setInterval(function(){
    grass_ing();
  }, 200)
});


$(window).resize(function() {
  canvas_resize();
  rain_re();
});



