let items = [
    {
      img: "https://letkicks.com/cdn/shop/products/StockXAndre3_86.png?v=1677087684",
      title: "Nike Jordan 1 Retro High OG Chicago Lost",
      price: "80.00",
      stock: 10,
    },
    {
      img: "https://i.ebayimg.com/00/s/MTAwMFgxNDAw/z/PcUAAOSw5epf07Ye/$_58.png",
      title: "Adidas Yeezy Boost 350",
      price: "120.00",
      stock: 8,
    },
    {
      img: "https://images.stockx.com/360/Nike-Dunk-Low-Off-White-Lot-1/Images/Nike-Dunk-Low-Off-White-Lot-1/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635618665&h=384&q=57",
      title: "Nike Dunk Low Off-White Lot 1",
      price: "250.00",
      stock: 5,
    },
    {
      img: "https://res.cloudinary.com/brokenchains/image/upload/v1687587091/Broken-Chains-Air-Jordan-1-Mid-DQ8423-060-03.jpg",
      title: "Air Jordan 1 Mid Bred",
      price: "120.00",
      stock: 10,
    },
    {
      img: "https://deportint.co/cdn/shop/products/CI3899-100_1080x.jpg?v=1678822268",
      title: "Air Max 270 React",
      price: "150.00",
      stock: 20,
    },
    {
      img: "https://static.runnea.com/images/202306/adidas-ultraboost-22-zapatillas-running-400x400x90xX.jpg?1",
      title: "Ultraboost 22 Running",
      price: "190.00",
      stock: 20,
    },
    {
      img: "https://static.nike.com/a/images/t_default/940a4f7c-6e23-481a-8c7b-f474a87a6d56/calzado-de-running-en-carretera-pegasus-39-jXTgc9.png",
      title: "Air Zoom Pegasus 39 Running",
      price: "120.00",
      stock: 25,
    },
    {
      img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f136e0642dfe4909b3dfab0b00fbe9c9_9366/Torsion_X_Shoes_Grey_EE4885_01_standard.jpg",
      title: "Torsion X Shoes",
      price: "90.00",
      stock: 10,
    },
    {
      img: "https://i8.amplience.net/i/jpl/jd_ML574EVG_a?v=1",
      title: "New Balance 574 Grey",
      price: "100.00",
      stock: 20,
    },
    {
      img: "https://calzacosta.vtexassets.com/arquivos/ids/262258-800-auto?v=638030085514130000&width=800&height=auto&aspect=true",
      title: "Converse Chuck Taylor All-Stars Black",
      price: "50.00",
      stock: 25,
    },
    {
      img: "https://titan22.com/cdn/shop/products/CW2288-111-A_1082x.png?v=1677862917",
      title: "Nike Air Force 1 Triple White",
      price: "100.00",
      stock: 15,
    },
    {
      img: "https://warsawsneakerstore.com/storage/media/f1000/2020/adidas/184388/adidas-stan-smith-white-fx5500-65116a951133c.jpg",
      title: "Adidas Stan Smith White",
      price: "80.00",
      stock: 20,
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_822424-MCO72602924293_102023-O.webp",
      title: "Vans Old Skool White",
      price: "90.00",
      stock: 25,
    },
    {
      img: "https://www.superga-usa.com/cdn/shop/products/superga-unisex-sneakers-white-S000010-901-1_65303681-2d29-47b0-a754-992ec6864f13.jpg?v=1681850338&width=1920",
      title: "Superga 2750 Cotu Classic White",
      price: "70.00",
      stock: 10,
    },
    {
      img: "https://www.lockeroutlet.cl/wp-content/uploads/2023/09/BOLD_VJVX021267B_VIEW3.png",
      title: "Veja V-10 White",
      price: "140.00",
      stock: 5,
    },
  ];
  
  let containerItems = document.querySelector(".container-items");
  
  items.forEach((item) => {
    let divItems = document.createElement("div");
    divItems.classList.add("items");
    divItems.innerHTML = `
          <figure>
              <img src="${item.img}" alt="Producto">
          </figure>
          <div class="info-product">
              <h2>${item.title}</h2>
              <p class="price">Precio: $${item.price}</p>
              <p class="quantity-available">
                  Cantidad disponible: <span class="available-quantity">${item.stock}</span>
              </p>
              <button class="btn-add-cart">Añadir al carrito</button>
          </div>
      `;
    containerItems.appendChild(divItems);
  });



const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')
const facturaContainer = document.querySelector('.factura-container');
facturaContainer.classList.add('hidden');


btnCart.addEventListener('click', () => {
    // Verifica si el carrito tiene productos antes de mostrar/ocultar
    if (allProducts.length > 0) {
        containerCartProducts.classList.toggle('hidden-cart');
    } else {
        // Si el carrito está vacío, muestra un SweetAlert
        Swal.fire({
            icon: 'info',
            title: 'Carrito Vacío',
            text: 'No hay productos en el carrito',
        });
    }
});

// se crearon variables 

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//lista de contenedores de productos

const productslist = document.querySelector('.container-items')

//variables de arreglos de productos

let allProducts =[]

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')

productslist.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement;
        const availableQuantity = parseInt(product.querySelector('.available-quantity').textContent);

        if (availableQuantity > 0) {
            // Actualiza la cantidad disponible del producto en el HTML
            const quantityAvailableElement = product.querySelector('.quantity-available .available-quantity');
            quantityAvailableElement.textContent = availableQuantity - 1;

            const infoProduct = {
                quantity: 1,
                title: product.querySelector('h2').textContent,
                Price: product.querySelector('.price').textContent.replace('Precio: $', ''),
                availableQuantity: availableQuantity
            }

            // recorre todos los objectos que tenga el vector
            const exist = allProducts.some(product => product.title === infoProduct.title)
            
            if(exist){
                const products = allProducts.map(product => {
                    if(product.title === infoProduct.title){
                        product.quantity++;
                        return product
                    } else{
                        return product
                    }
                })
                allProducts = [...products]
            } else{
                allProducts = [...allProducts, infoProduct]
            }

            showHTML();
        } else {
            Swal.fire({
                icon: 'info',
                title: 'No hay producto en existencia',
                text: '¡Producto agotado!',
            });
        }
    }
});



rowProduct.addEventListener('click', (e) => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement
        const title = product.querySelector('p').textContent

        allProducts = allProducts.filter( product => product.title !== title);

        console.log(allProducts)
        showHTML()
    }
})

//funcion para mostrar html

const showHTML = () => {
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML =`
            <div class="info-cart-product">
                <span class="producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">$${product.Price}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>`;
                
        rowProduct.appendChild(containerProduct);

        total += product.quantity * parseFloat(product.Price.replace('$', ''));
        totalOfProducts += product.quantity;
    });

    valorTotal.innerText = `$${total.toFixed(2)}`;
    countProducts.innerText = totalOfProducts;

    // Oculta el contenedor del carrito si no hay productos
    if (allProducts.length === 0) {
        containerCartProducts.classList.add('hidden-cart');
    }
};



const btnConfirmarCompra = document.getElementById('confirmarCompraBtn');

btnConfirmarCompra.addEventListener('click', () => {
    if (allProducts.length > 0) {
        // Confirma la compra y generar la factura
        confirmarCompra();
    } else {
        alert('El carrito está vacío. Agregue productos antes de confirmar la compra.');
    }
});

const confirmarCompra = () => {
    // Oculta el carrito después de confirmar la compra
    containerCartProducts.classList.add('hidden-cart');

    // Muestra la factura
    mostrarFactura();

    // Utiliza SweetAlert2 para mostrar la factura en una ventana emergente
    Swal.fire({
        title: 'Carrito de compras',
        html: facturaContainer.innerHTML,
        showCloseButton: true,
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: 'Pagar Ahora',
        customClass: {
            denyButton: 'btn-black'
        }
    }).then((result) => {
        if (result.isDenied) {
            // Mostrar Sweet Alert con el mensaje de carga
            Swal.fire({
                title: 'Procesando pago...',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showCloseButton: true,
                showConfirmButton: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
    
            // Simular una acción de pago después de un tiempo de espera
            setTimeout(() => {
                
                // Obtener la fecha actual
                const currentDate = new Date().toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
    
                // html del vouche para el cliente
                const facturaHtml = `
                    <div class="voucher">
                        <h1>Voucher de Pago</h1>
                        <div class="voucher-info">
                            <p><strong>Tienda Online S.A de C.V</strong></p>
                            <p><strong>NIT:</strong> 123456789</p>
                            <p>Calle a Plan del Pino Km 1 1/2. Ciudadela Don Bosco, Soyapango, El Salvador</p>
                            <p>www.tiendaonline.com</p>
                            <p>+503 2290 9093</p>
                            <hr>
                            <p><strong>Fecha:</strong> ${currentDate}</p>
                            <p><strong>Monto:</strong> ${valorTotal.innerText}</p>
                            <p><strong>Descripción:</strong> Compras en tienda Online</p>
                            <p><strong>Cliente:</strong> John Smith</p>
                        </div>

                        <table class="table-voucher">
                            <thead>
                                <tr>
                                    <th colspan="4" style="text-align: center;">Detalle de compra</th>
                                </tr>
                                <tr align="left">
                                    <th>C.</th>
                                    <th>Producto</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${allProducts.map(product => `
                                    <tr align="left">
                                        <td>${product.quantity}</td>    
                                        <td>${product.title}</td>
                                        <td>$${product.Price}</td>
                                    </tr>
                                `).join('')}
                                <tr>
                                    <th colspan="4" >Total ${valorTotal.innerText}</th>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div class="voucher-info">
                            <p style="text-align: center;">Gracias por tu compra</p>
                        </div>
                        
                    </div>
                `;

    
                // Mostrar Sweet Alert con el vaucher de pago
                Swal.fire({
                    html: facturaHtml,
                    showCloseButton: true,
                    showConfirmButton: false,
                });

                // limpiamos el carrito para simular la accion despues de pago
                limpiarCarrito();

            }, 2000); // Tiempo de espera simulado (en milisegundos)
        }
    });
    
};


const mostrarFactura = () => {
    // Limpia el contenido anterior de la factura
    facturaContainer.innerHTML = '';

    // Genera el contenido de la factura
    const facturaHTML = document.createElement('div');
    facturaHTML.classList.add('factura');

    facturaHTML.innerHTML = `
        <div class="factura-detalle">
            <div class="factura-header">
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio Unitario</span>
                <span>Total por Producto</span>
            </div>
            <hr>

            <!-- Itera sobre la lista de productos y agrega detalles a la factura -->
            ${allProducts.map(product => `
                <div class="factura-item">
                    <span>${product.title}</span>
                    <span>${product.quantity}</span>
                    <span>$${product.Price}</span>
                    <span>$${(product.quantity * parseFloat(product.Price.replace('$', ''))).toFixed(2)}</span>
                </div>
            `).join('')}
            <br>
            <!-- Agrega el total general de la compra -->
            <div class="factura-total">
                <span>Total General</span>
                <span>${valorTotal.innerText}</span>
            </div>
        </div>
    `;

    // Agrega la factura al contenedor
    facturaContainer.appendChild(facturaHTML);

    // Oculta el carrito después de confirmar la compra
    containerCartProducts.classList.add('hidden-cart');
};


const limpiarCarrito = () => {
    // Limpia el carrito
    allProducts = [];
    // Actualiza la visualización del carrito
    showHTML(); 
};