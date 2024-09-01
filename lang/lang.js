document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    loadLanguage(selectedLanguage);
});

function loadLanguage(language) {
    if (language === 'en') {
        document.getElementById('about_us_p').textContent = "At Portunit, we recognize the logistical challenges that small and medium-sized businesses face."
        document.getElementById('about_us_p2').textContent = "Our goal is to assist businesses of all sizes in navigating these disruptions and enhancing their competitiveness in today’s global market. To achieve this, we provide outsourced operations and transportation management services, as well as inspection and certification services to ensure smooth and on-time delivery. With our extensive network of on-field service providers around the world, we efficiently address challenges throughout the supply chain while adhering to local legal and tax regulations. Our experienced team, drawn from trading backgrounds, is equipped to manage transportation, storage, customs clearance, and operations. We have professionals stationed in key business hubs, including Amsterdam, Baku, Istanbul, Yiwu, Guangzhou, Ningbo, Xiang, Dubai, Mumbai, Barcelona and Rotterdam. Our clients and partners encompass commodity trading companies, importers/exporters, shipbrokers, surveyors, port agents, freight forwarders, and other related service providers.";
        document.getElementById('nav-home').textContent = "Home";
        // document.getElementById('nav-about').textContent = "About";
        document.getElementById('nav-services').innerHTML = `
            <span class="quadmenu-item-content">
            <span class="quadmenu-caret"></span> 
            <span class="quadmenu-text hover t_1000">Services <i class="fa-solid fa-caret-down"></i></span>
            </span>
            `;
        document.getElementById('nav-contact').textContent = "Contact";
        document.getElementById('have-questions').textContent = "Have any Questions?";
        document.getElementById('phone_numbers').textContent = "Phone Numbers";
        document.getElementById('headings').textContent = "How We Works";
        document.getElementById('listening-you-1').textContent = "Listening you";
        document.getElementById('analyze_2').textContent = "We Analyze";
        document.getElementById('pricing_3').textContent = "Pricing";
        document.getElementById('management_4').textContent = "Quality Management";
        document.getElementById('paragraph-1').textContent = "We collect preliminary information, cargo and its packaging, route and other information. This is important to serve you better";
        document.getElementById('paragraph-2').textContent = "We use our database to provide you with the most suitable offer based on preliminary information";
        document.getElementById('paragraph-3').textContent = "Based on quality service, we analyze the current market situation and work on offering you the most suitable price.";
        document.getElementById('paragraph-4').textContent = "Managing the process according to standards determines the outcome. We observe the entire process, from the correct preparation of documents to customs operations";
        // document.getElementById('partners').textContent = "Partners";
        // document.getElementById('partners-overlay').textContent = "Partners";
        // document.getElementById('companies-trust-us').textContent = "Companies Who Trust Us";
        document.getElementById('additional_title_one').textContent = "Timely delivery of goods";
        document.getElementById('additional_info_one').textContent = "Timely delivery of goods will give you extra time.";
        document.getElementById('additional_title_two').textContent = "Insurance and cargo protection";
        document.getElementById('additional_info_two').textContent = "Loads are provided with various insurances depending on the customer's request.";
        document.getElementById('portunit_image_box_info').textContent = "Faster than you can image";
        document.getElementById('content_slider_promo_text_one').textContent = "Delivering Efficiency, Ensuring Excellence";
        document.getElementById('content_slider_promo_text_two').textContent = "Speeding Your Cargo to Success";
        document.getElementById('content_slider_promo_text_three').textContent = "Swift Solutions, Sky-High Efficiency";
        document.getElementById('content_slider_promo_text_four').textContent = "Delivering Excellence Across Every Horizon";
        document.getElementById('content_slider_title_one').textContent = "Train Freight";
        document.getElementById('content_slider_title_two').textContent = "Ship Freight";
        if (document.getElementById('content_slider_title_two').textContent === "Dəniz yolu daşımaları.") {
            document.getElementById('content_slider_title_two').style.fontSize = '20px';
        } else {
            document.getElementById('content_slider_title_two').style.fontSize = '140px';
        }
        document.getElementById('content_slider_title_three').textContent = "Truck Freight";

        if (document.getElementById('content_slider_title_three').textContent === "Quru Yol Daşımaları") {
            document.getElementById('content_slider_title_three').style.fontSize = '20px';
        } else {
            document.getElementById('content_slider_title_three').style.fontSize = '140px';
        }

        document.getElementById('content_slider_title_four').textContent = "Plane Freight";

        if (document.getElementById('content_slider_title_four').textContent === "Hava yolu daşımaları") {
            document.getElementById('content_slider_title_four').style.fontSize = '60px';
            document.getElementById('content_slider_title_four').style.lineHeight = '1.2';  // Satır yüksekliği de ayarlayabilirsiniz
        } else {
            document.getElementById('content_slider_title_four').style.fontSize = '140px';
            document.getElementById('content_slider_title_four').style.lineHeight = '1.2';  // Aynı şekilde burada da satır yüksekliği eklenebilir
        }
        
        

        // document.getElementById('footer-contact-info').textContent = "Contact Info";
        // document.getElementById('footer-address').textContent = "Address";
        // document.getElementById('footer-follow-us').textContent = "Follow Us";
    } else {
        // Diğer diller için JSON dosyasını yükle
        fetch(`data/${language}.json`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('about_us_p').textContent = data.about_us_p;
                document.getElementById('about_us_p2').textContent = data.about_us_p2;
                document.getElementById('nav-home').textContent = data.navbar.home;
                // document.getElementById('nav-about').textContent = data.navbar.about;
                document.getElementById('nav-services').textContent = data.navbar.services;
                document.getElementById('nav-contact').textContent = data.navbar.contact;
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
                // document.getElementById('partners').textContent = data.up_headings.partners;
                // document.getElementById('partners-overlay').textContent = data.up_headings.partners_overlay;
                // document.getElementById('companies-trust-us').textContent = data.up_headings.companies_trust_us;
                document.getElementById('additional_title_one').textContent = data.additional_title_one;
                document.getElementById('additional_info_one').textContent = data.additional_info_one;
                document.getElementById('additional_title_two').textContent = data.additional_title_two;
                document.getElementById('additional_info_two').textContent = data.additional_info_two;
                document.getElementById('portunit_image_box_info').textContent = data.portunit_image_box_info;
                document.getElementById('content_slider_promo_text_one').textContent = data.content_slider_promo_text_one;
                document.getElementById('content_slider_promo_text_two').textContent = data.content_slider_promo_text_two
                document.getElementById('content_slider_promo_text_three').textContent = data.content_slider_promo_text_three;
                document.getElementById('content_slider_promo_text_four').textContent = data.content_slider_promo_text_four;

                document.getElementById('content_slider_title_one').textContent = data.content_slider_title_one;
                document.getElementById('content_slider_title_one').setAttribute('style', 'font-size: 90px ; line-height: 1.2;');


                document.getElementById('content_slider_title_two').textContent = data.content_slider_title_two;
                if (language === 'aze') {
                    document.getElementById('content_slider_title_two').style.fontSize = '60px'; 
                } else {
                    document.getElementById('content_slider_title_two').style.fontSize = '140px'; 
                };
                document.getElementById('content_slider_title_two').setAttribute('style', 'font-size: 90px ; line-height: 1.2;');

                document.getElementById('content_slider_title_three').textContent = data.content_slider_title_three;
                if (language === 'aze') {
                    document.getElementById('content_slider_title_three').style.fontSize = '90px'; 
                } else {
                    document.getElementById('content_slider_title_three').style.fontSize = '110px'; 
                };
                document.getElementById('content_slider_title_three').setAttribute('style', 'font-size: 90px ; line-height: 1.2;');

                document.getElementById('content_slider_title_four').textContent = data.content_slider_title_four;
                if (language === 'aze') {
                    document.getElementById('content_slider_title_four').style.fontSize = '90px';
                } else {
                    document.getElementById('content_slider_title_four').style.fontSize = '140px';
                }
                document.getElementById('content_slider_title_four').setAttribute('style', 'font-size: 90px ; line-height: 1.2;');
                
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