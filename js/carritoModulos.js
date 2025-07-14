const agregarAlCarrito = (item, cant) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    console.log(carrito)
    item.amount = cant
    carrito.push(item)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    alert('producto agregado')
    }