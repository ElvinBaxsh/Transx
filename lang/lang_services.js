document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    loadLanguage(selectedLanguage);
});

function loadLanguage(language) {
    if (language === 'en') {

        document.getElementById('nav-home').textContent = "Home";
        document.getElementById('nav-services').innerHTML = `
            <span class="quadmenu-item-content">
            <span class="quadmenu-caret"></span> 
            <span class="quadmenu-text hover t_1000">Services <i class="fa-solid fa-caret-down"></i></span>
            </span>
            `;
        document.getElementById('nav-contact').textContent = "Contact";


    } else {
        // Diğer diller için JSON dosyasını yükle
        fetch(`data/${language}.json`)
            .then(response => response.json())
            .then(data => {

                document.getElementById('nav-home').textContent = data.navbar.home;
                document.getElementById('nav-services').textContent = data.navbar.services;
                document.getElementById('nav-contact').textContent = data.navbar.contact;



            })
            .catch(error => console.error('Error loading language file:', error));
    }
}


function changeLanguage(langCode, flagSrc, langText) {
    const selectedLang = document.querySelector('.selected-lang');
    selectedLang.querySelector('img').src = flagSrc;
    selectedLang.querySelector('img').alt = langText;
    selectedLang.querySelector('span').textContent = langText;
    loadLanguage(langCode);
}

function toggleBurgerMenu() {
    const burgerMenu = document.querySelector('.transx_hamburger');
    const menuContent = document.querySelector('.burger-menu-content');
    menuContent.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const defaultLanguage = 'en';
    loadLanguage(defaultLanguage);

});


window.onload = function () {
    // 'quadmenu-has-caret' sınıfına sahip tüm elemanları seç
    var caretElements = document.querySelectorAll('.quadmenu-dropdown-toggle');

    // Her bir eleman için gizleme işlemi uygula
    caretElements.forEach(function (element) {
        element.style.display = 'none';
    });
};