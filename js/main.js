

// Bienvenido a simulador de E-commerce basado en venta de hardware de PC.

// Funcion para que el visitante pueda pedir un compenente. 
function pedirComponente() {
    let iTipo = prompt(`Ingrese el tipo de Hardware que le interesa. (Placa de video - Procesador - Memoria Ram - Etc)`)
    let iMarca = prompt(`Ingrese la marca`);
    let iSerie = prompt(`Ingrese la version o serie del producto`);
    mostrarDatos(iTipo, iMarca, iSerie)
}
// Funcion de mostrar los datos ingresados por el usuario
function mostrarDatos(tipo, marca, serie) {
    alert(`Datos ingresados: Tipo de componente: ${tipo} | Marca: ${marca} | Version o Serie: ${serie} | Gracias por hacernoslo saber, nos comunicaremos con usted de inmediato en caso de tener Stock de este producto.`)

}
// Funcion para calcular el interes del plan de cuotas elegida por el usuario
function cuotas() {
    let precioInicial = parseInt(prompt("Ingrese el precio que acordo con el vendedor del componente de PC deseado."));
    while (isNaN(precioInicial)){
        alert("Ingrese un numero por favor")
        precioInicial = parseInt(prompt("Ingrese el precio que acordo con el vendedor del componente de PC deseado."));
    }while (precioInicial < 50000){
        alert(`Ingrese un monto igual o mayor a 50000 para acceder a la financiacion en cuotas`)
        precioInicial = parseInt(prompt("Ingrese el precio que acordo con el vendedor del componente de PC deseado."));
    }
    let cuotas = parseInt(prompt("Ahora ingrese el plan de cuotas que desea. SOLO DISPONIBLE: 3 - 6 o 12"));
        switch (cuotas) {
            case 3:
                precioFinal = precioInicial * 1.3;
                valorCuotas = precioFinal / 3;
                alert(`El total final que usted va a pagar es ${precioFinal} en 3 cuotas de ${valorCuotas.toFixed(2)} INTERES SUMADO: 30%`);
                salirMenu = true
                break;

            case 6:
                precioFinal = precioInicial * 1.5;
                valorCuotas = precioFinal / 6;
                alert(`El total final que usted va a pagar es ${precioFinal} en 6 cuotas de ${valorCuotas.toFixed(2)} INTERES SUMADO: 50%`);
                break;

            case 12:
                precioFinal = precioInicial * 1.7;
                valorCuotas = precioFinal / 12;
                alert(`El total final que usted va a pagar es ${precioFinal} en 12 cuotas de ${valorCuotas.toFixed(2)} INTERES SUMADO: 70%`);
                break;
            case 0:
                salirMenu = true
                break;
            default:
                alert(`Ingrese un plan de cuotas correctos ( 3 - 6 - 12 )`)
                break;

        }
    
}

// Catalogo de componentes - ARRAY de componentes en STOCK para vender

class ProductoStock {
    constructor(id, tipo, marca, version, precio) {
        this.id = id
        this.tipo = tipo
        this.marca = marca
        this.version = version
        this.precio = precio

    }
    datosProductos() {
        alert(`Producto en venta: ${this.id} tipo de hardware ${this.tipo} de marca ${this.marca} version ${this.version} su precio es ${this.precio}`)
    }
}

// objetos creados con la clase constructora de los productos en stock
const productoVideo1 = new ProductoStock(1, "Placa de video", "Nvidia", "3060 Ti", 160000);
const productoVideo2 = new ProductoStock(2, "Placa de video", "Nvidia", "1660 Super", 110000);
const productoVideo3 = new ProductoStock(3, "Placa de video", "AMD", "5600 XT", 90000);
const productoVideo4 = new ProductoStock(4, "Placa de video", "AMD", "6500 XT", 130000);
const productoVideo5 = new ProductoStock(5, "Placa de video", "Nvidia", "3090", 300000);
const productoVideo6 = new ProductoStock(6, "Placa de video", "AMD", "6700 XT ", 190000);
const productoProcesador1 = new ProductoStock(1, "Procesador", "Intel", "Intel Core I7 10 Gen", 79999);
const productoProcesador3 = new ProductoStock(3, "Procesador", "AMD", "Ryzen 5 5600g", 110000);
const productoProcesador2 = new ProductoStock(2, "Procesador", "AMD", "Ryzen 5 3600", 65000);
const memoriaRam1 = new ProductoStock(1, "Memoria Ram", "Corsair", "16 Gb ", 20000);
const memoriaRam2 = new ProductoStock(3, "Memoria Ram", "Kingston", "8gb", 11000);
const memoriaRam3 = new ProductoStock(2, "Memoria Ram", "Spectrix", "32GB", 35000);

// array de placas de video en stock para vender
const videoStock = []
videoStock.push(productoVideo1, productoVideo2, productoVideo3, productoVideo4, productoVideo5, productoVideo6)
// array + push de procesador en stock
const procesadorStock = []
procesadorStock.push(productoProcesador1, productoProcesador2, productoProcesador3)
// array con memoria rams
const ramStock = []
ramStock.push(memoriaRam1, memoriaRam2, memoriaRam3)
// array de todos los productos en stock
const allProductos = []
// allProductos.push(videoStock, procesadorStock, ramStock)
allProductos.push(productoVideo1,productoVideo2,productoVideo3,productoVideo4,productoVideo5,productoVideo6,productoProcesador1,productoProcesador2,productoProcesador3,memoriaRam1,memoriaRam2,memoriaRam3)


// For each para mostrar catalogo
function verCatalogo(array) {
    array.forEach(
        (producto) => console.log(producto.id, producto.tipo, producto.marca, producto.version, producto.precio)
    )
}

// Filter para buscar productos por tipo de componente
function busquedaTipo(array) {
    let tipoBusqueda = prompt("Ingrese el tipo de componente que usted esta buscando | Procesador - Placa de video , Memoria Ram, Etc.")
    let busqueda = array.filter((componente) => componente.tipo.toLowerCase() == tipoBusqueda.toLowerCase())
    if(busqueda.length == 0){
        alert(`TIPO INGRESADO: ${tipoBusqueda} | No hay ningun producto de este tipo en STOCK.`);
    }else{
        alert("Si tenemos productos en STOCK de este tipo!")
        verCatalogo(busqueda)
    }
}

function busquedaPrecio(array) {
    let precioBusqueda = parseInt(prompt(`Ingrese el presupuesto que usted esta dispuesto a utilizar para ver que productos estan disponibles por menor o igual a ese monto`))
    let busqueda = array.filter((componente) => componente.precio <= precioBusqueda)
    while (isNaN(precioBusqueda)){
        alert(`Por favor ingrese el precio en NUMEROS.`)
        precioBusqueda = parseInt(prompt(`Ingrese el presupuesto que usted está dispuesto a utilizar para ver qué productos están disponibles por menor o igual a ese monto`));
    }
    if (busqueda.length == 0 ){
        alert(`No tenemos ningun producto en Stock por ese rango de precio. `)
    }else{
        alert(`Tenemos estos productos en STOCK por ese rango de precio para ofrecerle`)
        verCatalogo(busqueda);
    }
}

// Estructura Menu

// Escape
let salirMenu = false

// Menu con do switch while (bucle)
do {
    let opcionesIngresadas = parseInt(prompt(`Ingresa la opcion que desee 
    1) Pedir Placa de video
    2) Borrar Placa de video
    3) Pagar en plan de cuotas
    4) Mirar catalogo de productos hadware en venta
    5) Buscar producto por tipo de componente
    6) Buscar producto por rango de precio
    0) Salir del menu`))
    switch (opcionesIngresadas) {
        case 1:
            pedirComponente()
            break
        case 2:
            prompt(`Borrar componente`)
            break
        case 3:
            cuotas()
            break;
        case 4:
            alert(`Nuestro catalogo contiene estos productos en stock`)
            verCatalogo(videoStock)
            verCatalogo(procesadorStock)
            verCatalogo(ramStock)
            break;
        case 5:
            busquedaTipo(allProductos)
            break;
        case 6:
            busquedaPrecio(allProductos)
            break;
        case 0:
            alert(`Gracias por su tiempo`)
            salirMenu = true
            break;
        default:
            alert(`Opcion no valida, ingrese una opcion numerica`)
            break
    }
} while (!salirMenu)











