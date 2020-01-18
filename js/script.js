let item = document.querySelectorAll(".menu-item");
let menu = document.querySelector(".menu");

menu.appendChild(item[0]);
menu.appendChild(item[2]);
menu.appendChild(item[1]);
menu.appendChild(item[3]);


class CreateElem {
	constructor(parentElem, childElem, classList, textContent) {
		this.parentElem = parentElem;
		this.childElem = childElem;
		this.classList = classList;
		this.textContent = textContent;
	}

	connectElem() {
		let elem = document.createElement(this.childElem);
		elem.classList.add(this.classList);
		elem.textContent = this.textContent;
		this.parentElem.appendChild(elem);
	}
}


let createLi = new CreateElem(menu, "li", "menu-item", "Пятый элемент");
createLi.connectElem();

// let li = document.createElement("li");
// li.classList.add("menu-item");
// li.innerHTML = "Пятый элемент";
// menu.appendChild(li);

document.body.style.backgroundImage = "url(img/apple_true.jpg)"

let title = document.querySelector(".title")
title.innerHTML = "Мы продаем только подлинную технику Apple"

let adv = document.querySelector(".adv");
adv.remove();

let text = prompt("Как вы относитесь к технику Apple?", "");
let promptText = document.querySelector(".prompt");
promptText.innerHTML = text;
