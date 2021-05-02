var canvas = document.getElementById("tile");
var contexto = canvas.getContext("2d");

var fondo=
{
    url: "tile.png",
    loaded: false,
}
var farmer=
{
    url: "farmer.png",
    loaded: false,
}

var vaca=
{
    url: "cow.png",
    loaded : false,
}

var chicken=
{
    url: "chicken.png",
    loaded : false,
}
var wolf =
{
    url: "wolf.png",
    loaded : false,
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca)

chicken.imagen = new Image();
chicken.imagen.src = chicken.url;
chicken.imagen.addEventListener("load", cargarPollo)

wolf.imagen = new Image();
wolf.imagen.src = wolf.url;
wolf.imagen.addEventListener("load", cargarLobo)

function cargarFondo()
{
    fondo.loaded = true;
    dibujar();
}

function cargarVaca()
{
    vaca.loaded = true;
    dibujar();
}

function cargarPollo()
{
    chicken.loaded = true;
    dibujar();
}

function cargarLobo()
{
    wolf.loaded = true;
    dibujar();
}

function dibujar()
{
    if(fondo.loaded == true && wolf.loaded == true && vaca.loaded == true)
    {
        contexto.drawImage(fondo.imagen,0,0);
        for(var i = 0; i < aleatorio(1,8);i++)
        {
            var x = aleatorio(0,5) * 80;
            var y = aleatorio(0,5) * 80;
            contexto.drawImage(chicken.imagen,x,y);
        }
        
        for(var i = 0; i < aleatorio(1,8);i++)
        {
            var x = aleatorio(0,5) * 80;
            var y = aleatorio(0,5) * 80;
            contexto.drawImage(wolf.imagen,x,y);
        }
        for(var i = 0; i < aleatorio(1,8);i++)
        {
            var x = aleatorio(0,5) * 80;
            var y = aleatorio(0,5) * 80;
            contexto.drawImage(vaca.imagen,x,y);
        }
    }
}

function aleatorio(min,max)
{
    var resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

