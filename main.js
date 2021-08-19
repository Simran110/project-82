var mouseEvent="emtpy";

var last_pos_x, last_pos_y;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_pos_x = e.clientX - canvas.offsetLeft; 
    current_pos_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + last_pos_x + "y = " + last_pos_y); 
        ctx.moveTo(last_pos_x, last_pos_y); 
        console.log("Current position of x and y coordinates = ");
         console.log("x = " + current_pos_x + "y = " + current_pos_y);
         ctx.lineTo(current_pos_x, current_pos_y); ctx.stroke();
    }
  last_pos_x=current_pos_x;
  last_pos_y=current_pos_y;  
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e) {
     mouseEvent = "mouseUP"; 
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e) {
     mouseEvent = "mouseleave"; 
}
function clearArea() 
{
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}