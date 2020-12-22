
function clr1(){
    document.getElementById('pen').src='a.png';
}

function clr2(){
    document.getElementById('pen').src='b.png';
}

function clr3(){
    document.getElementById('pen').src='c.png';
}

function clr4(){
    document.getElementById('pen').src='d.png';
}

function clr5(){
    document.getElementById('pen').src='e.png';
}

function clr6(){
    document.getElementById('pen').src='f.png';
}

function clr7(){
    document.getElementById('pen').src='g.png';
}

function ud(){
    document.getElementById('pen').remove();
}
function nw(){
    document.getElementById('r').innerHTML='<img id="pen" src="a.png" alt="test" height="4px" width="4px" />';
}

let a = 4;
let b = 6;
function plus() {
   document.getElementById('pen').style.height = a + 'px';
   a = a + 9;
}

function minus() {
   document.getElementById('pen').style.height = a + 'px';
   a = a - 9;
}

function pls() {
   document.getElementById('pen').style.width = b + 'px';
   b = b + 9;
}

function mins() {
   document.getElementById('pen').style.width = b + 'px';
   b = b - 9;
}

function thicker() {
    document.getElementById('pen').style.height = a + 'px';
    document.getElementById('pen').style.width = b + 'px';
    a = a + 3;
    b = b + 3;
 }

 function thinner(){
    document.getElementById('pen').style.height = a + 'px';
    document.getElementById('pen').style.width = b + 'px';
    a = a - 9;   
    b = b - 9;
 }
function swap1() {
    
 document.body.style.backgroundColor='#497959' 
 
   
 }
 function swap2() {
document.body.style.backgroundColor='whitesmoke';
      
    }