import Delivery from './Delivery.js'
import EditDelivery from './EditDelivery.js'

// проверка в консоли
function cl(data) { console.log(data) }

const app = document.getElementById('app')

const deliveryArr = [
    new Delivery("Олег", "ул. Вымыслов, д. 12", 8),
    new EditDelivery("Паша", "ул. Задачная, д. 7", 3),
    new EditDelivery("Антон", "ул. Ткачей, д. 43", 11)
]

deliveryArr[1].setStatus('delivered')

deliveryArr.forEach(el => {
    app.append(el.getCardElement())
})


