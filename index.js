/*var header = document.getElementById("subtitle4");

header.onclick = function(event){

    header.innerHTML="I am Christian";
}
*/
var aboutIcon = document.getElementsByClassName("box");
/*
for(let i=0;i<aboutIcon.length;i++){
aboutIcon[i].onclick = function(event){
    var element = document.createElement('div');
    element.style.cssText = "width:200px; height:200px; background:blue;";
    console.log(aboutIcon[i]);
    aboutIcon[i].parentNode.appendChild(element);

}
}
*/
var aboutFloatingBox = document.getElementsByClassName("centerDIV");
var btClose= document.getElementsByClassName("btClose");
for(let i=0;i<aboutIcon.length;i++){
    window.addEventListener('click', function (e) {
        if (aboutIcon[i].contains(e.target)) {
        aboutFloatingBox[i].style.display = 'flex';
        }
        
        if (btClose[i].contains(e.target)) {
            aboutFloatingBox[i].style.display = 'none';
        }
    })   
}

var projects = document.getElementsByClassName("learnButton");
var projectFloatingBox = document.getElementsByClassName("projectDetailsDIV");
for(let i=0;i<projects.length;i++){
    window.addEventListener('click', function (e) {
        if (projects[i].contains(e.target)) {
            projectFloatingBox[i].style.display = 'flex';
        }
        
        if (btClose[i+8].contains(e.target)) {
            projectFloatingBox[i].style.display = 'none';
        }
    })   
}
var navProjects= document.getElementsByClassName("navProjects");
var navBar= document.getElementsByClassName("navigationBar");

for(let i=0;i<navProjects.length;i++){
    window.addEventListener('mouseover',function(e){
        if(navProjects[i].contains(e.target)){
            navBar[i].style.display = 'block';
        }
        else
        navBar[i].style.display = 'none';
    })
}


navProjects[0].style.backgroundImage = 'url("FieldWrkr1.jpeg")';
navProjects[1].style.backgroundImage = 'url("itxel2.jpg")';
navProjects[2].style.backgroundImage = 'url("burst.jpg")';
navProjects[3].style.backgroundImage = 'url("mrc.jpeg")';

var values=['url("FieldWrkr1.jpeg")',
'url("FieldWrkr2.png")',
'url("itxel2.jpg")',
'url("itxel3.jpg")',
'url("burst.jpg")',
'url("itxel.jpg")',
'url("mrc.jpeg")',
'url("login.jpg")'
];

var nBL= document.getElementsByClassName("nBL");
var nBR= document.getElementsByClassName("nBR");
for(let i=0;i<navProjects.length;i++){
    window.addEventListener('click',function(e){
        if(nBL[i].contains(e.target)||nBR[i].contains(e.target)){
            console.log(navProjects[i].style.backgroundImage);
            if(navProjects[i].style.backgroundImage != values[i*2]){
                navProjects[i].style.backgroundImage = values[i*2];
            }else{
                navProjects[i].style.backgroundImage = values[i*2+1];
    
            }

    
        }
    })
}





/*
var nBL = document.getElementById("nBL");
var nBR = document.getElementById("nBR");

window.addEventListener('click',function(e){
    if(nBL.contains(e.target)||nBR.contains(e.target)){
        console.log(project.style.background);
        if(project.style.background != 'url("FieldWrkr1.jpeg") 0% 0% / 100% 100% rgba(0, 0, 0, 0)'){
            project.style.background = 'rgba(0,0,0,0) url("FieldWrkr1.jpeg")';
        }else{
            project.style.background = 'rgba(0,0,0,0) url("FieldWrkr2.png")';

        }
        project.style.backgroundSize = 'contain';
        project.style.backgroundSize = '100% 100%';

    }
})
*/

/*Animation*/

var canvas = document.getElementById("canvas");
console.log(canvas);
var c = canvas.getContext("2d");

var tx = window.innerWidth;
var ty = window.innerHeight/3;


canvas.width = tx;
canvas.height = ty;
console.log(ty);
//c.lineWidth= 5;
//c.globalAlpha = 0.5;
var grav = 0.99;
c.strokeWidth=5;

var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function() {
  mousex = event.clientX;
  mousey = event.clientY-110;//Adding top bar height
});


function randomColor() {
  var colors = ['#4B0082', '#E6E6FA', '#BA55D3'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  return (
    random_color

  );
}

function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.startradius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  this.vel = Math.random() /5;
  this.update = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    //c.stroke();
  };
}

var bal = [];
for (var i=0; i<25; i++){
    bal.push(new Ball());
}

function animate() {    
  if (tx != window.innerWidth || ty != window.innerHeight/3) {
    tx = window.innerWidth;
    ty = window.innerHeight/3;
    canvas.width = tx;
    canvas.height = ty;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty) {
      if(bal[i].dy>0)
        bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }    
    if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
      if(bal[i].x+bal[i].radius>tx)
        {if(bal[i].dx>0)
          bal[i].dx = -bal[i].dx;
        }
      else
      if(bal[i].x - bal[i].radius < 0)
        {if(bal[i].dx<0)
          bal[i].dx = -bal[i].dx;
        }
    }
    if(mousex > bal[i].x - 20 && 
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y -50 &&
      mousey < bal[i].y +50 &&
      bal[i].radius < 70){
        //bal[i].x += +1;
        bal[i].radius +=5; 
      } else {
        if(bal[i].radius > bal[i].startradius){
          bal[i].radius += -5;
        }
      }
      
    //forloop end
    }
//animation end
}

animate();

setInterval(function() {
  bal.push(new Ball());
  bal.splice(0, 1);
}, 400);
