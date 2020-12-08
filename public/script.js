//Socket Initialiszation and getting context of canvas 
var socket =io();
//console.log(socket);   

var canvas = document.querySelector(.board);
var context = canvas.getContext("2d");
var drawing = false;
var current  = {
                    "black"

                } ;   