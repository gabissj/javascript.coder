const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Pechuga de pollo x kg",
        precio: 3300,
        imagen: "https://images.ecestaticos.com/yo05TUn8ShltzvoO5fOQbgnLO6M=/0x59:1197x735/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fca8%2Fbd8%2Fa78%2Fca8bd8a78259706c832425c7f4b1839b.jpg",
    },
    {
        id: 2,
        nombre: "Milanesa de pollo x kg",
        precio: 3100,
        imagen: "https://agpollos.com.ar/images/product_image/50/0?w=1000&h=1300&fit=crop",
    },
    {
        id: 3,
        nombre: "Maple de huevo 30u.",
        precio: 2900,
        imagen: "https://www.carnave.com.ar/wp-content/uploads/2020/05/huevo-m30-324x324.jpg.png",
    },
    {
        id: 4,
        nombre: "Salchicha parillera x kg",
        precio: 3100,
        imagen: "https://www.proveeduriapiaf.com.ar/wp-content/uploads/5K4A9946.jpg",
    },
    {
        id: 5,
        nombre: "Bife ancho x kg",
        precio: 2900,
        imagen: "https://www.canariangus.com/wp-content/uploads/2019/05/IMG_8295_FLP_2018.jpg",
    },
    {
        id: 6,
        nombre: "Carre de cerdo x kg",
        precio: 2500,
        imagen: "https://carrefourar.vtexassets.com/arquivos/ids/173007/2306216000000_02_2.jpg?v=637468551564670000",
    },
    {
        id: 7,
        nombre: "Asado del medio",
        precio: 3300,
        imagen: "https://notvegan.com.ar/cdn/shop/products/F486055C-6786-4344-B4FB-A230250740B8_1500x.jpg?v=1641437755",
    },
    {
        id: 8,
        nombre: "Matambre de vaca x kg",
        precio: 3500,
        imagen: "https://carniceriaelfabi.com/wp-content/uploads/2021/09/Matambre-de-ternera-1-scaled.jpg",
    },
    {
        id: 9,
        nombre: "Lechuga francesa x kg",
        precio: 1200,
        imagen: "https://www.proplanta-sa.com.ar/wp-content/uploads/2021/02/lechuga-francesa.png",
    },
    {
        id: 10,
        nombre: "Morron rojo x kg",
        precio: 2800,
        imagen: "https://arjosimarprod.vteximg.com.br/arquivos/ids/155664-1000-1000/Morron-Rojo-Kg-1-6298.jpg?v=637377693696630000",
    },
    {
        id: 11,
        nombre: "Zukini x kg",
        precio: 550,
        imagen: "https://t4.ftcdn.net/jpg/00/38/69/05/360_F_38690588_IPCw1HZIfNuyhN6Xi9ovzo7wJ2tmSBAa.jpg",
    },
    {
        id: 12,
        nombre: "Tomate cherry x 1/4 kg",
        precio: 400,
        imagen: "https://s1.eestatic.com/2020/02/20/imprescindibles/branded_content-marcas_destacadas-huerto_468965071_145982948_1706x960.jpg",
    },
    {
        id: 13,
        nombre: "Aceite Natura",
        precio: 650,
        imagen: "https://masonlineprod.vtexassets.com/arquivos/ids/163523-800-auto?v=637835134305170000&width=800&height=auto&aspect=true",
    },
    {
        id: 14,
        nombre: "Atun en lata desmenuzado",
        precio: 950,
        imagen: "https://carrefourar.vtexassets.com/arquivos/ids/246267/7891167011748_02.jpg?v=637901366521970000",
    },
    {
        id: 15,
        nombre: "Café instantaneo Dolca 170 g",
        precio: 1500,
        imagen: "https://arjosimarprod.vteximg.com.br/arquivos/ids/166936-1000-1000/Cafe-Instantaneo-Suave-Aroma-Nescafe-Dolca-Frasco-100-gr-100-gr-1-11243.jpg?v=638109705661170000",
    },
    {
        id: 16,
        nombre: "Mayonesa Natura 250gr",
        precio: 490,
        imagen: "https://masonlineprod.vtexassets.com/arquivos/ids/164528/Mayonesa-Natura-250-Cc-1-14690.jpg?v=637835135743330000",
    },
];

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
        carrito.push({
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "❌";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${producto.imagen}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio} $</p>
        `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
});