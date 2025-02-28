
const translations = {
    en: {
        home: "Home",
        menu: "Menu",
        location: "Where to Find Us",
        "home-title": "Welcome to our Pub!",
        "home-text": "Enjoy the best selection of craft beers.",
        "menu-title": "Our Menu",
        "menu-text": "Discover our specialties.",
        "menu-item1": "Gourmet Burger - €10",
        "menu-item2": "French Fries - €5",
        "menu-item3": "Craft Beer - €6",
        "location-title": "Where to Find Us",
                "location-text": "Come visit us at our location!",
                "address-label": "Address:",
                "address": "123 Main St, New York, NY 10001, USA",
                "phone-label": "Phone:",
                "phone": "+1 555 123 4567"
    },
    it: {
        home: "Home",
        menu: "Menu",
        location: "Dove Trovarci",
        "home-title": "Benvenuti al nostro Pub!",
        "home-text": "Goditi la migliore selezione di birre artigianali.",
        "menu-title": "Il nostro Menu",
        "menu-text": "Scopri le nostre specialità.",
        "menu-item1": "Hamburger Gourmet - €10",
        "menu-item2": "Patatine Fritte - €5",
        "menu-item3": "Birra Artigianale - €6",
        "location-title": "Dove Trovarci",
                "location-text": "Vieni a trovarci nella nostra sede!",
                "address-label": "Indirizzo:",
                "address": "Via Roma, 123, 00100 Roma, Italia",
                "phone-label": "Telefono:",
                "phone": "+39 012 345 6789"
    }
};

document.getElementById("language-selector").addEventListener("change", function() {
    const lang = this.value;
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.getAttribute("data-key")];
    });
});


