// script.js

let carrito = [];
let total = 0;

function agregarAlCarrito(id, nombre, precio) {
    carrito.push({ id, nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    // Actualizar el botón del carrito
    document.querySelector('#cart button').innerText = `Ver Carrito (${carrito.length})`;

    // Actualizar el contenido del carrito modal
    let listaCarrito = document.querySelector('#listaCarrito');
    listaCarrito.innerHTML = '';  // Limpiar la lista
    carrito.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
    document.querySelector('#totalCarrito').innerText = total.toFixed(2);
}

function mostrarCarrito() {
    document.querySelector('#carritoModal').style.display = 'block';
}

function cerrarCarrito() {
    document.querySelector('#carritoModal').style.display = 'none';
}