//1er ejercicio "Heladería"

var topping=prompt("Elija un topping: Oreo | KitKat | Kinder");
var precio=0;
var preciofinal=0;
var helado=10;
if(topping=="Oreo"){
    precio=10;
} else if(topping=="KitKat"){
    precio=15;
} else if(topping=="Kinder"){
    precio=25;
} else {
    alert("No tenemos este topping");
}
if(topping=="Oreo" || topping=="KitKat" || topping=="Kinder"){
    preciofinal=helado+precio;
    alert("El helado cuesta $"+preciofinal);
}

//2do ejercicio "pedido"

var menu=prompt("Elige un menú: carne | pescado | verdura");
var bebida="";
switch (menu) {
    case "carne":
        bebida="vino tinto";
        alert("Este menú va acompañado con "+bebida);
        break;
    case "pescado":
        bebida="vino blanco";
        alert("Este menú va acompañado con "+bebida);
        break;
    case "verdura":
        bebida="agua";
        alert("Este menú va acompañado con agua");
        break;
    default:
        alert("Elija carne, pescado o verdura");
        break;
}

//3er ejercicio "array"

var dias=["lunes","martes","miércoles","jueves","viernes","sábado"]
for(let i=0;i<=dias.length;i++){
    console.log(dias[i]);
}
dias.push("domingo");
for(let i=0;i<=dias.length;i++){
    console.log(dias[i]);
}

//4to ejercicio "while"

var numero=-4;
while(numero<11){
    console.log(numero+" es más chico que 11");
    numero=Number(numero+1);
}