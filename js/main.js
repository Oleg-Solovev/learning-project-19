import * as components from "./components.js"
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

const wrapDistanceEl = components.createEl('div', 'distance-wrap')
const btnDistanceEl = components.createEl('button', 'btn-distance', "Общее расстояние")
const textDistanceEl = components.createEl('strong', 'text-distance', "Общее расстояние 0 км")
wrapDistanceEl.append(btnDistanceEl, textDistanceEl)
app.append(wrapDistanceEl)

btnDistanceEl.addEventListener('click', () => {
    const totalDistance = +EditDelivery.getTotalDistance(deliveryArr)
    textDistanceEl.textContent = `Общее расстояние: ${totalDistance} км`
})