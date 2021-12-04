let carro = []
let elementosComprados = document.createElement ("h2")
elementosComprados.innerText = "Sus elementos comprados son"
document.body.appendChild (elementosComprados)

let TotalCompra = document.createElement("h2");
TotalCompra.innerText = "TOTAL= ";
document.body.appendChild(TotalCompra)

let botonFinalizarCompra = document.createElement("button")
botonFinalizarCompra.innerText = "FINALIZAR COMPRA"
document.body.appendChild(botonFinalizarCompra)

botonFinalizarCompra.onclick = () => {
    const finalprice= TotalCompra.innerText
    alert ("SU COMPRA ESTA FINALIZANDO, DEBE ABONAR $ " + finalprice)
    
}
class comprador {
    constructor (nombre, telefono, fechaDeNacimiento, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.fechaDeNacimiento = fechaDeNacimiento
        this.direccion = direccion}
    }

    const save = (a, b) => { sessionStorage.setItem(a, b) }


const productes = [{

    id:1,
    verdura: 'papa',
    precio: 10,
    proveedor: 'colombiano'},
    
    {id:2,
    verdura: 'tomate',
    precio: 20,
    proveedor: 'venezolano'},
 {
    id:3,
    verdura: 'lechuga',
    precio: 30,
    proveedor: 'boliviano'},
  {
    id:4,
    verdura: 'zanahoria',
    precio: 30,
    proveedor: 'brasilero'},
 {
    id:5,
    verdura: 'pepino',
    precio: 50,
    proveedor: 'colombiano'},
{
    id:6,
    verdura: 'calabaza',
    precio: 20,
    proveedor: 'colombiano'},
 {
    id:7,
    verdura: 'huevo',
    precio: 120,
    proveedor: 'colombiano'}]

for (const prod of productes){
let div= document.createElement ("div")
div.innerHTML = `<h3> <b> ID : </b> ${prod.id}</h3> 
<h2><mark> VERDURA: ${prod.verdura}</mark></h2>
<h3> PRECIO= $ ${prod.precio} </h3>
<button id= "${prod.id}"> AGREGAR A LA COMPRA</button>`
save(prod.id,JSON.stringify (prod.verdura))
document.body.appendChild (div)
document.getElementById (`${prod.id}`).onclick = () => {
    agregarAlCarrito (`${prod.id}`)
}
}

const agregarAlCarrito = (aidi) => {
carro.push (productes [aidi - 1])
console.log (carro)
totalCarrito ()
}

 function totalCarrito () {
let total1 = 0
let prods2 = []
for (const prods of carro) {
    total1 += prods.precio
    console.log (total1)
    prods2.push (prods.verdura)
    elementosComprados.innerText ="USTED QUIERE COMPRAR "+ prods2
}

TotalCompra.innerText = "TOTAL = " + total1
if (total1>=250){
    $("#beneficio").empty()
    $("#beneficio").append (`<p> GRACIAS A QUE SU COMPRA SUPERO LOS $250, USTED TIENE 10% DE DESCUENTO</p>
    `)}

 }
 
 $("#botonAccount").click (function crear (){
    $("#formularioCuenta").prepend (`
    <input id= "name1" type="text" placeholder= "ingresa tu nombre">
    <input id= "edad" type="number" placeholder= "ingresa tu edad">
    <input id= "tel" type="number" placeholder= "ingresa tu numero de tel">
    <input id= "calle" type="text" placeholder= "ingresa tu calle">
    
    `)
    
})


   
//$(".back").css({ background: "gray", color: "black" })



$("#formularioCuenta").prepend('<button id="btn1">CREAR</button>');



$("#btn1").click(function () { 
    let nombre3= $("#name1").val()
    let tel= $("#tel").val()
    let edad= $("#edad").val()
    let localidad= $("#calle").val()
    
    const usuario1 = new comprador (nombre3,tel,edad,localidad)
console.log (usuario1)
return nombre3
})

//let jeyson= JSON.stringify (usuario1)


