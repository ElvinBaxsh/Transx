document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    loadLanguage(selectedLanguage);
});

function loadLanguage(language) {
    if (language === 'en') {
        // Varsayılan İngilizce içeriği geri yükle
        document.getElementById('about-us').textContent = "\"Port Unit\" LLC is a private logistics organization founded in 2024. Although our company is new, our team and management have extensive experience in global and local shipping, handling and warehousing services. It should be noted that our features, highly qualified and motivated management and staff enable to offer worldwide import and export, all types of logistics services, transportation and loading.";
        document.getElementById('nav-home').textContent = "Home";
        // document.getElementById('nav-about').textContent = "About";
        document.getElementById('nav-services').textContent = "Services";
        // document.getElementById('nav-contact').textContent = "Contact";
        document.getElementById('have-questions').textContent = "Have any Questions?";
        document.getElementById('phone_numbers').textContent = "Phone Numbers";
        document.getElementById('headings').textContent = "How We Works";
        document.getElementById('listening-you-1').textContent = "Listening you";
        document.getElementById('analyze_2').textContent = "We Analyze";
        document.getElementById('pricing_3').textContent = "Pricing";
        document.getElementById('management_4').textContent = "Quality Management";
        document.getElementById('paragraph-1').textContent = "We collect preliminary information, cargo and its packaging, route and other information. This is important to serve you better";
        document.getElementById('paragraph-2').textContent = "We use our database to provide you with the most suitable offer based on preliminary information";
        document.getElementById('paragraph-3').textContent = "Good service makes you earn";
        document.getElementById('paragraph-4').textContent = "Managing the process according to standards determines the outcome. We observe the entire process, from the correct preparation of documents to customs operations";
        document.getElementById('partners').textContent = "Partners";
        document.getElementById('partners-overlay').textContent = "Partners";
        document.getElementById('companies-trust-us').textContent = "Companies Who Trust Us";
        // document.getElementById('footer-contact-info').textContent = "Contact Info";
        // document.getElementById('footer-address').textContent = "Address";
        // document.getElementById('footer-follow-us').textContent = "Follow Us";
    } else {
        // Diğer diller için JSON dosyasını yükle
        fetch(`data/${language}.json`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('about-us').textContent = data.about_us;
                document.getElementById('nav-home').textContent = data.navbar.home;
                // document.getElementById('nav-about').textContent = data.navbar.about;
                document.getElementById('nav-services').textContent = data.navbar.services;
                // document.getElementById('nav-contact').textContent = data.navbar.contact;
                document.getElementById('have-questions').textContent = data.tagline.have_questions;
                document.getElementById('phone_numbers').textContent = data.aside.phone_numbers;
                document.getElementById('headings').textContent = data.headings.how_we_work;
                document.getElementById('listening-you-1').textContent = data.icon_boxes.listening_you_1;
                document.getElementById('analyze_2').textContent = data.icon_boxes.analyze_2;
                document.getElementById('pricing_3').textContent = data.icon_boxes.pricing_3;
                document.getElementById('management_4').textContent = data.icon_boxes.management_4;
                document.getElementById('paragraph-1').textContent = data.paragraphs.paragraph_1;
                document.getElementById('paragraph-2').textContent = data.paragraphs.paragraph_2;
                document.getElementById('paragraph-3').textContent = data.paragraphs.paragraph_3;
                document.getElementById('paragraph-4').textContent = data.paragraphs.paragraph_4;
                document.getElementById('partners').textContent = data.up_headings.partners;
                document.getElementById('partners-overlay').textContent = data.up_headings.partners_overlay;
                document.getElementById('companies-trust-us').textContent = data.up_headings.companies_trust_us;
                // document.getElementById('footer-contact-info').textContent = data.footer.contact_info;
                // document.getElementById('footer-address').textContent = data.footer.address;
                // document.getElementById('footer-follow-us').textContent = data.footer.follow_us;

                
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

document.addEventListener('DOMContentLoaded', function() {
    const defaultLanguage = 'en';
    loadLanguage(defaultLanguage);

});