

let order = {
    name:"Pizza",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vyuNaOdSYfUplmINoUVTjBI5I9hHuGBr7A&usqp=CAU",
    price:100,
    available: true,
    quantity:0
}

function increaseQuantity() {
    if (order.quantity < 10) {
        order.quantity++
        showOrder()
    }
}

function decreaseQuantity() {
    if (order.quantity > 0) {
        order.quantity--
        showOrder()
    }
}

function showOrder() {
    let pretTotal = order.price * order.quantity
    content.innerHTML =`
        <h2>${order.name}</h2>
        <img src="${order.image}"/>
        <p>${order.price} * ${order.quantity} = ${pretTotal}</p>
        <p>${order.available ?'available' : 'not available'}</p>
        ${order.available ? `<div><button onclick="decreaseQuantity()">-</button><span>${order.quantity}</span><button onclick="increaseQuantity()">+</button></div>` : ``} 
    `
}

showOrder()