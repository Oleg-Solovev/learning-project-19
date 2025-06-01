import * as components from "./components.js"

export default class Delivery {
    constructor(name, address, distance = 0) {
        this.name = name
        this.address = address
        this.distance = distance
    }

    getCardElement() {
        this.cardEl = components.createEl('div', 'card')

        const titleNameEl = components.createEl('p', 'card__title', 'Имя')
        this.textNameEl = components.createEl('p', 'card__text', this.name)
        const titleAddressEl = components.createEl('p', 'card__title', 'Адрес')
        this.textAddressEl = components.createEl('p', 'card__text', this.address)
        const titleDistanceEl = components.createEl('p', 'card__title', 'Расстояние')
        this.textDistanceEl = components.createEl('p', 'card__text', `${this.distance} км`)

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

    set name(value) {
        this._name = value

        if (this.textNameEl) {
            this.textNameEl.textContent = this._name
        }
    }

    get name() {
        return this._name
    }

    set address(value) {
        this._address = value

        if (this.textAddressEl) {
            this.textAddressEl.textContent = this._address
        }
    }

    get address() {
        return this._address
    }

    set distance(value) {
        this._distance = value

        if (this.textDistanceEl) {
            this.textDistanceEl.textContent = this._distance
        }
    }

    get distance() {
        return this._distance
    }

}
