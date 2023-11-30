class Producto {
  nombre;
  precio;
  talle;

  constructor(nombre, precio, talle) {
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
  }
}
class Item {
  producto;
  cantidad;

  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}
const productosMarca = [
  { nombre: "remera", precio: 200, talle: "S" },
  { nombre: "remera", precio: 220, talle: "M" },
  { nombre: "remera", precio: 230, talle: "XL" },
  { nombre: "remera", precio: 225, talle: "L" },
];

let continuar = "si"; //me falta agregar esto
const OPCION1 = "1";
const OPCION2 = "2";
let cantidadRemeraTalleS;
let cantidadRemeraTalleM;
let cantidadRemeraTalleL;
let cantidadRemeraTalleXL;
let total = 0;

let nombre = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombre} a la tienda online Luna&Mora`);

let ropaSeleccionada = prompt(
  `Bienvenido ${nombre} a la tienda online Luna&Mora. Escriba el número de la opción que desea realizar:` +
    "\n" +
    "Opcion 1: remera" +
    "\n" +
    "opcion 2: salir"
);

if (ropaSeleccionada !== OPCION1 && ropaSeleccionada !== OPCION2) {
  alert("Ha ingresado una opcion incorrecta");
} else if (ropaSeleccionada !== OPCION1) {
  alert("Esperamos que regrese pronto");
} else if (ropaSeleccionada !== OPCION2) {
  while (continuar !== "no") {
    productosMarca.sort((a, b) => {
      //para que me ordene de menor a mayor
      if (a.precio < b.precio) return -1;
      if (a.precio > b.precio) return 1;
      return 0;
    });
    cantidadRemeraTalleS = +prompt(
      `${productosMarca.map(
        (item) => ` ${item.nombre}, ${item.precio}, ${item.talle}`
      )} .... ¿qué cantidad de remeras talle S va a llevar? indicar en número 0,1,2...`
    );

    cantidadRemeraTalleM = +prompt(
      "escriba la cantidad de talle m que cantidad quiere en número"
    );

    cantidadRemeraTalleL = +prompt(
      "escriba la cantidad de L que quiera llevar en número"
    );

    cantidadRemeraTalleXL = +prompt(
      "esciba la cantidad de XL que quiera llevar en número"
    );
    continuar = prompt("¿ Desea modificar las cantidades? si / no");
  }
  while (continuar !== "no" && continuar !== "si") {
    continuar = prompt('Debe ingresar "no" o "si" ');
  }
}
alert(
  new Date() +
    ` El total de la compra es de: $ ${(total =
      cantidadRemeraTalleS * 200 +
      cantidadRemeraTalleM * 220 +
      cantidadRemeraTalleL * 320 +
      cantidadRemeraTalleXL * 230)}`
);

const nuevosProductos = [];

nuevosProductos.push(new Producto("body", 250, "S"));
nuevosProductos.push(new Producto("body", 269, "M"));
nuevosProductos.push(new Producto("body", 315, "L"));
nuevosProductos.push(new Producto("body", 325, "XL"));

console.log(nuevosProductos);
