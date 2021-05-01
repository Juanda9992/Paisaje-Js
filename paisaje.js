var canvas = document.getElementById("tile");
var contexto = canvas.getContext("2d");

var tile = "tile.png";
var imagen = new Image();
imagen.src = tile;

imagen.addEventListener("load",cargarMapa);

function cargarMapa()
{
    contexto.drawImage(imagen,0,0);
}


function aleatorio(min,max)
{
    var resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

