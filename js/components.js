// Функция создания DOM элементов
function createEl(el, className = 'x', text = '') {
  const element = document.createElement(el);
  element.classList.add(className);
  if (el === 'button') {
    element.classList.add('btn');
  };
  element.textContent = text;
  return element
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.id = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("text-field")
    inputEl.required = true
    return inputEl
}

export {
  createEl,
  getInputEl,
}