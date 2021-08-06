var mouseEvent ="empty";
var last_postion_of_x, last_postion_of_y;

canvas = document.getElementById(mycanvas);
ctx= canvas.getContext("2d");

color="black";
width_of_line= 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}


canvas.addEventListener("mousedown", my_mousedown);
function my_mousemove(e);

current_position_of_mouse_x = e.clientX - canvas.offsetLeft
current_position_of_mouse_y = e.clientY - canvas.offsetTop

if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y cordinates =");
    console.log("x = " + last_postion_of_x + "y = " + last_postion_of_y );
    ctx.moveTo(last_postion_of_x, last_postion_of_y);

    console.log("current position of x and y cordinates =");
    console.log("x = " + current_postion_of_x + "y = " + current_postion_of_y );
    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();
}

last_postion_of_x = current_position_of_mouse_x;
last_postion_of_y = current_position_of_mouse_y;
}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}


function clearArea()
{
    ctx.clearRect(0 , 0 , ctx.canvas.width, ctx.canvas.height);
    
}