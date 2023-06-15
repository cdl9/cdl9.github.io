var header = document.getElementById("subtitle4");

header.onclick = function(event){

    header.innerHTML="I am Christian";
}

var aboutIcon = document.getElementsByClassName("icon1");
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