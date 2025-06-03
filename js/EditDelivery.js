import * as components from "./components.js"
import Delivery from './Delivery.js'

export default class EditDelivery extends Delivery {
    constructor(name, address, distance = 0, addStatus = 'delivery') {
        super(name, address, distance)
        this.addStatus = addStatus
    }

    getCardElement() {

        this.getCardElement = super.getCardElement()

        this.btnEl = components.createEl('button', 'card__btn', 'Изменить')
        this.btnEl.addEventListener('click', () => this.modalWindow())
        this.cardEl.append(this.btnEl)

        if (this.addStatus === 'delivered') {
            this.cardEl.classList.add('delivered')
        }
        if (this.addStatus === 'canceled') {
            this.cardEl.classList.add('canceled')
        }

        return this.cardEl
    }

    modalWindow() {
        const modalParent = components.createEl('div', 'modal__parent')
        const modalFormWrapper = components.createEl('div', 'modal__form-wrapper')
        modalFormWrapper.autocomplete = 'off'
        const btnModalReset = components.createEl('button', 'btn-modal-reset', 'x')
        const modalTitle = components.createEl('h2', 'modal__title')
        modalTitle.textContent = 'Изменить'

        modalFormWrapper.append(btnModalReset, modalTitle)
        modalParent.append(modalFormWrapper)
        app.append(modalParent)
        const modalForm = components.createEl('form', 'form')
        modalForm.id = 'form'
        const nameInpEl = components.getInputEl("text", 'name', 'Имя')
        nameInpEl.value = this.name
        const adressInpEl = components.getInputEl("text", "adress", "Адрес")
        adressInpEl.value = this.address
        const distanceInpEl = components.getInputEl("text", "distance", "Расстояние")
        distanceInpEl.value = this.distance
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
        statusSelectEl.name = 'status'
        statusArr.forEach((el) => {
            const optionEl = components.createEl('option', 'form__option', el.name)
            optionEl.value = el.status
            statusSelectEl.append(optionEl)
        })
        statusSelectEl.value = this.addStatus

        modalForm.append(nameInpEl, adressInpEl, distanceInpEl, statusSelectEl, saveClientBtn)
        modalFormWrapper.append(modalForm)

        btnModalReset.addEventListener('click', function () {
            modalParent.remove()
        })

        saveClientBtn.addEventListener('click', (e) => {
            e.preventDefault()

            this.name = nameInpEl.value
            this.address = adressInpEl.value
            this.distance = +(distanceInpEl.value)
            this.textDistanceEl.textContent = `${this.distance} км`
            this.addStatus = statusSelectEl.value

            this.cardEl.classList.remove('delivered')
            this.cardEl.classList.remove('canceled')
            if (this.addStatus === 'delivered') {
                this.cardEl.classList.add('delivered')
            }
            if (this.addStatus === 'canceled') {
                this.cardEl.classList.add('canceled')
            }

            modalParent.remove()
            return this.cardEl
        })
    }

    set addStatus(value) {

        this._addStatus = value
        if (this.statusSelectEl) {
            this.statusSelectEl.textContent = this._addStatus
        }

    }

    get addStatus() {
        return this._addStatus
    }

    static getTotalDistance(arr) {
        let summ = 0
        arr
            .filter((i) => (i.addStatus !== "canceled"))
            .map((i) => summ += i.distance)
        return summ
    }
}
