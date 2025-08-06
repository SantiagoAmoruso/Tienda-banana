const agregarAlCarrito = (item, cant) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    // console.log(carrito)
    // carrito.push(item)
    // localStorage.setItem("carrito", JSON.stringify(carrito))
    // alert('producto agregado')
    const prodEcontrado = carrito.find(p => p.id == item.id)
    if(!prodEcontrado){
        if(cant>item.stock){
            console.log('No hay stock')
        }else{
            item.amount = cant
            carrito.push(item)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            console.log('prod agregado a carrito')
        }
    }else{
        console.log('el prod existe en el carrito')
    }
}