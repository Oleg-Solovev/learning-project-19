import Delivery from './Delivery.js'
import EditDelivery from './EditDelivery.js'

const app = document.getElementById('app')

const deliveryArr = [
    new EditDelivery("Олег", "ул. Вымыслов, д. 12", 8, 'delivery'),
    new EditDelivery("Паша", "ул. Задачная, д. 7", 3, 'delivered'),
    new EditDelivery("Антон", "ул. Ткачей, д. 43", 11, 'canceled')
]

deliveryArr.forEach(el => {
    app.append(el.getCardElement())
})

deliveryArr[0].addStatus = 'delivery'
deliveryArr[1].addStatus = 'delivered'
deliveryArr[2].addStatus = 'canceled'


