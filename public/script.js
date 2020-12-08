//Socket Initialiszation and getting context of canvas 
var socket =io();
//console.log(socket);   

var canvas = document.querySelector(.board);
var context = canvas.getContext("2d");
var drawing = false;
var current  = {
                    "black"

                } ;   



function throttle(callback, delay)
{
var prevCall = newDate.getTime;
return function ( ) {

    var time = new Date().getTime();
    
    if (time - prevCall >= delay)
    {
        prevCall = time;
        callback.apply(null,arguments);
    }
};


}
/*  Events 
MOUSE 
    MouseUP
    MouseDOWN/MouseOUT
    MouseMOVE

TOUCH
    TouchSTART
    TouchEND/TouchCANCEL      
    TouchMOVE
*/
 
function mousedown(e){
drawing = true;
current.x = e.clientX || e.touches[0].clientX ;
current.y = e.clientY || e.touches[0].clientY;


}

function mouseup(e)
{
    if(!drawing) 
    {
    return;
    }
drawing = false;


drawIt(   
    current.x,
    current.y,
    e.clientX || e.touches[0].clientX,
    e.clientY || e.touches[0].clientY,
    current.color,
    true  
);

}

function mousemove(e){
    if(!drawing) 
    {
    return;
    }
    
    drawIt(   
        current.x,
        current.y,
        e.clientX || e.touches[0].clientX,
        e.clientY || e.touches[0].clientY,
        current.color,
        true  
    );
    
    current.x = e.clientX || e.touches[0].clientX ;
    current.y = e.clientY || e.touches[0].clientY;
    

}

function drawIt(x0, y0 , x1, y1, color, emit)
{
context.beginPath();
context.moveTo(x0,y0);
context.lineTo(x1,y1);
context.strokeStyle = color;
context.lineWidth = 2;
context.stroke();
context.closePath();


if(!emit)
{ 
    return; 
}

var wd =canvas.width;
var ht = canvas.height;

socket.emit( "drawing",
{
    {
        x0:x0/wd;
        y0:y0/ht;
        x1:x1/wd;
        y1:y1/ht;
        color

    }

}

)

} 