// ---- theHotel-slider ----

let selectLang = function () {
    let selectHeader = document.querySelectorAll('.btnLang__header');
    let selectItem = document.querySelectorAll('.btnLang__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.btnLang'),
            currentText = select.querySelector('.btnLang__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
selectLang();