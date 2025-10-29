chevronList = document.querySelectorAll("[name='dropdownChevron']");

function dropdownToggle(e) {
  chevron = e.querySelector("[name='dropdownChevron']");
  chevron.classList.toggle("chevronRotate");
  const dropdownElem = e.parentElement;

  if (dropdownElem.children.length == 1) {
    const menu = dropdownElem.appendChild(document.createElement("div"));
    menu.classList.add("main__desc_docs-dropdownMnu");
    if (e.id == "choomButton") {
      menu.innerHTML =
        "<a href='./media/documents/participants_CC.pdf' target='blank'>📄Положение</a><a href='./media/documents/dogovor_champ_RB.doc' target='blank'>📄РФ Приглашение к участию</a><a href='./media/documents/dogovor_champ_RF.doc' target='blank'>📄РБ Приглашение к участию</a>";
    }
    //  else if (e.id == "corpoButton") {
    //   menu.innerHTML =
    //     "<a href='./media/documents/partners_CC.pdf' target='blank'>📄Партнерская программа</a><a href='./media/documents/partners_CC_2.pdf' target='blank'>📄Контакты Организатора</a>";
    // }
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
    !event.target.matches(".main__desc_docs-dropdownBtn") &&
    !event.target.matches(".main__desc_docs-dropdownMnulnk") 
  ) {
    const menuList = document.querySelectorAll(".main__desc_docs-dropdownMnu");
    for (i = 0; i < menuList.length; i++) {
      for (ii = 0; ii < menuList.children; ii++) {
        menuList.children[ii].remove;
      }
      chevronList[1].classList.remove("chevronRotate");

      menuList[i].remove();
    }
  }
};

function playFadeInAnimation(menu) {
  menu.classList.add("showDropdown");
}
