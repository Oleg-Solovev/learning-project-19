import Delivery from './Delivery.js'

// проверка в консоли
function cl(data) { console.log(data) }

const app = document.getElementById('app')

const deliveryArr = [
    new Delivery("Олег", "ул. Вымыслов, д. 12", 8),
    new Delivery("Паша", "ул. Задачная, д. 7", 3),
    new Delivery("Антон", "ул. Ткачей, д. 43", 11)
]

deliveryArr.forEach(el => {
    app.append(el.getCardElement())
})


