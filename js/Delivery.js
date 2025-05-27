import * as components from "./components.js"

export default class Delivery {
    constructor(name, address, distance = 0) {
        this.name = name
        this.address = address
        this.distance = distance
    }
    getCardElement() {
        this.cardEl = document.createElement('div')
        this.cardEl.classList.add('card')

        const titleNameEl = this.getTitleElement('Имя', 'card__title')
        this.textNameEl = this.getTitleElement(this.name, 'card__text')
        const titleAddressEl = this.getTitleElement('Адрес', 'card__title')
        this.textAddressEl = this.getTitleElement(this.address, 'card__text')
        const titleDistanceEl = this.getTitleElement('Расстояние', 'card__title')
        this.textDistanceEl = this.getTitleElement(`${this.distance} км`, 'card__text')

        this.cardEl.append(
            titleNameEl,
            this.textNameEl,
            titleAddressEl,
            this.textAddressEl,
            titleDistanceEl,
            this.textDistanceEl
        )

        return this.cardEl
    }

    getTitleElement(text, className) {
        const textEl = document.createElement('p')
        textEl.classList.add(className)
        textEl.textContent = text
        return textEl
    }

}
