import * as components from "./components.js"

export default class Delivery {
    _addStatus = 'delivery'
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
        this.btnEl = this.getButtonElement()

        this.cardEl.append(
            titleNameEl,
            this.textNameEl,
            titleAddressEl,
            this.textAddressEl,
            titleDistanceEl,
            this.textDistanceEl,
            this.btnEl
        )

        return this.cardEl
    }

    getTitleElement(text, className) {
        const textEl = document.createElement('p')
        textEl.classList.add(className)
        textEl.textContent = text
        return textEl
    }

    getButtonElement() {
        const btnEl = document.createElement('button')
        btnEl.classList.add('card__btn')
        btnEl.textContent = 'Изменить'
        btnEl.addEventListener('click', this.modalWindow)
        return btnEl
    }

    modalWindow() {
        const modalParent = components.createEl('div', 'modal__parent')
        const modalWrapper = components.createEl('div', 'modal__wrapper')
        const modalFormWrapper = components.createEl('div', 'modal__form-wapper')
        modalFormWrapper.autocomplete = 'off'
        const btnModalReset = components.createEl('button', 'btn-modal-reset', 'x')
        const modalTitle = components.createEl('h2', 'modal__title')
        modalTitle.textContent = 'Изменить'

        modalFormWrapper.append(btnModalReset, modalTitle)
        modalWrapper.append(modalFormWrapper)
        modalParent.append(modalWrapper)
        app.append(modalParent)
        const modalForm = components.createEl('form', 'form')
        modalForm.id = 'form'
        const nameInpEl = components.getInputEl("text", 'name', 'Имя')
        const adressInpEl = components.getInputEl("text", "adress", "Адрес")
        const distanceInpEl = components.getInputEl("text", "distance", "Расстояние")
        const saveClientBtn = components.createEl('button', 'form__submit', 'Сохранить')
        saveClientBtn.type = 'submit'
        const statusArr = [
            {
                status: 'delivery',
                name: 'Доставляется'
            },
            {
                status: 'delivered',
                name: 'Доставлен'
            },
            {
                status: 'canceled',
                name: 'Отменён'
            },
        ]
        const statusSelectEl = components.createEl('select', 'form__select')
        statusArr.forEach((status) => {
            const optionEl = components.createEl('option', 'form__option', status.name)
            optionEl.value = status.status
            statusSelectEl.append(optionEl)
        })
        console.log(this.status)
        statusSelectEl.value = this.status

        modalForm.append(nameInpEl, adressInpEl, distanceInpEl, statusSelectEl, saveClientBtn)
        modalFormWrapper.append(modalForm)

        btnModalReset.addEventListener('click', function () {
            modalParent.remove()
        })

        saveClientBtn.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(nameInpEl.value)
            this.name = nameInpEl.value
            // не изменяется имя
            modalParent.remove()

        })
    }

    setStatus(value) {
        this._addStatus = value
        if (this._addStatus === 'delivered') {
            console.log(this.cardEl)
            this.cardEl.classList.add('delivered')
        } if (this._addStatus === 'canceled') {
            this.cardEl.classList.add('canceled')
        }
    }

}
