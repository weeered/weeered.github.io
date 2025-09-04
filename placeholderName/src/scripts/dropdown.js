chevronList = document.querySelectorAll("[name='dropdownChevron']");

function dropdownToggle(e) {
	chevron = e.querySelector("[name='dropdownChevron']");
	chevron.classList.toggle("chevronRotate");
	const dropdownElem = e.parentElement;

	if (dropdownElem.children.length == 1) {
		const menu = dropdownElem.appendChild(document.createElement("div"));
		menu.classList.add("main__desc_dropdown-menu");
		if (e.id == "choomButton") {
			menu.innerHTML =
				"<a href='#' target='blank'>📄O Кубке</a><a href='#' target='blank'>📄Регистрация на Кубок</a><a href='#' target='blank'>📄Контакты Организатора</a>";
		} else if (e.id == "corpoButton") {
			menu.innerHTML =
				"<a href='#' target='blank'>📄O Кубке</a><a href='#' target='blank'>📄Партнерское Предложение</a><a href='#' target='blank'>📄Контакты Организатора</a>";
		}
		setTimeout(() => {
			playFadeInAnimation(menu);
		}, 1);
	} else {
		const menu = dropdownElem.children[1];
		for (i = 0; i < menu.children; i++) {
			menu.children[i].remove;
		}
		menu.remove();
	}
}

window.onclick = function (event) {
	if (
		!event.target.matches(".main__desc_dropdown-button") &&
		!event.target.matches(".main__desc_dropdown-menuLink") &&
		!event.target.matches(".header__container_elem-link")
	) {
		const menuList = document.querySelectorAll(".main__desc_dropdown-menu");
		for (i = 0; i < menuList.length; i++) {
			for (ii = 0; ii < menuList.children; ii++) {
				menuList.children[ii].remove;
			}
			chevronList[0].classList.remove("chevronRotate");
			chevronList[1].classList.remove("chevronRotate");
			menuList[i].remove();
		}
	}
};

function playFadeInAnimation(menu) {
	menu.classList.add("showDropdown");
}
