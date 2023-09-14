//eliminar productos
//manejar cantidades
//agregar un contador de productos en el carrito

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];

productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${producto.imagen}">
    <h3 class>${producto.nombre}</h3>
    <p class="precio">${producto.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);
        console.log(repeat);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }
        console.log(carrito);
        carritoCounter();
    });
});

// sweet alert
Swal.fire({
    title: 'OFERTA SEMANAL!',
    text: '30% de descuento en productos seleccionados.',
    imageUrl: 'https://img.freepik.com/vector-premium/banner-oferta-especial-verduras-frutas-treinta-ciento-descuento_24877-67303.jpg?w=2000',
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: 'Custom image',
})