
    const translations = {
        es: {
        home: "Inicio",
        information: "Información",
        speakers: "Ponentes",
        syllabus: "Temario",
        courses: "Cursos",
        schedule: "Horario",
        sponsors: "Patrocinadores",
        dates: "Fechas",
        faq: "Preguntas Frecuentes",
        contact: "Contacto",
        language: "🇪🇸 ESPAÑOL ▼",
        // Hero
        title: "Escuela LATAM de Inteligencia Artificial 2025",
        colocated: "Coorganizado con SIMBig 2025",
        location: "📍 FISI-UNMSM, Lima, Perú",
        date: "📅 29–31 Octubre 2025",
        timer: "TEMPORIZADOR 99 días &nbsp; 24h &nbsp; 60 min &nbsp; 60 segundos"
    },
        en: {
        home: "Home",
        information: "Information",
        speakers: "Speakers",
        syllabus: "Syllabus",
        courses: "Courses",
        schedule: "Schedule",
        sponsors: "Sponsors",
        dates: "Dates",
        faq: "FAQ",
        contact: "Contact",
        language: "🇬🇧 ENGLISH ▼",
        // Hero
        title: "LATAM School of Artificial Intelligence 2025",

        colocated: "Co-located with SIMBig 2025",
        location: "📍 FISI-UNMSM, Lima, Perú",
        date: "📅 29–31 October 2025",
        timer: "TIMER 99 days &nbsp; 24h &nbsp; 60 min &nbsp; 60 seconds"
    }
};

    let currentLang = 'en'; // idioma inicial

    document.querySelector('.language-switch').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';

    // Cambia los textos
    document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[currentLang][key];
});

    // Cambia el botón de idioma
    document.querySelector('.language-switch').textContent = translations[currentLang].language;
});

    function updateCountdown() {
    const eventDate = new Date('2025-10-29T00:00:00').getTime(); // Fecha del evento
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const timerText = document.getElementById('timer-bar-text');

    if (timeLeft <= 0) {
    timerText.textContent = '¡The event has started!';
    return;
}

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerText.textContent = `TIMER ${days} DAYS ${hours} HOURS ${minutes} MINUTE  ${seconds} SECONDS`;
}

    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Ejecutar inmediatamente al cargar


