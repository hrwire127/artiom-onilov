import React, { createContext } from 'react'

const langCtx = createContext();

const Paragraphs = {
    Intro: {
        part_0: [
            "Artiom Onilov",
            "Artiom Onilov",
            "Артем Онилов",
        ],
        part_1: [
            "All your web experiences in one place.",
            "Toate experientele web într-un singur loc.",
            "Все ваши веб-опыт в одном месте.",
        ],
        part_2: [
            "Your favorite Web Developer ✨",
            "Dezvoltatorul Web preferat ✨",
            "Ваш любимый Веб-Разработчик✨",
        ],
        part_3: [
            "Contact Me",
            "Contacteaza",
            "Контакт"
        ]
    },
    WebsiteIdeea: {
        part_0: [
            "I Will Build Your Website",
            "Voi Construi Site-ul Tau",
            "Я Создам Ваш Сайт",
        ],
        part_1: [
            "Your web project 📽 can now",
            "Proiectul tau web 📽 poate acum",
            "Ваш веб-проект 📽 теперь может",
        ],
        part_2: [
            "become a reality.",
            "deveni realitate.",
            "стать реальностью.",
        ]
    },
    Fullstack: {
        part_0: [
            "All in one",
            "Toate într-un",
            "Все в одном",
        ],
        part_1: [
            "Developer ♛",
            "Dezvoltator ♛",
            "Разработчик ♛",
        ],
        part_2: [
            "The entire process goes",
            "Intregul proces merge prin",
            "Весь процесс проходит",
        ],
        part_3: [
            "through my hands.",
            "prin mâinile mele.",
            "через мои руки.",
        ],
        part_4: [
            "UI Design",
            "UI Design",
            "UI Дизайн",
        ],
        part_5: [
            "The UI design sketch. \n Layout, Style, Purpose.",
            "Schița de proiectare UI. \n Stil, Scop.",
            "Эскиз UI Дизайн. \n Макет, Стиль, Цель.",
        ],
        part_6: [
            "Icons and Assets",
            "Pictograme și Resurse",
            "Иконки и Ресурсы",
        ],
        part_7: [
            "Web assets and the entire brand. \n Icons, Images, Fonts.",
            "Resurse Digitale și întregul brand. \n Pictograme, Fonturi.",
            "Веб-ресурсы и бренд в целом. \n Иконки, Шрифты.",
        ],
        part_8: [
            "Copywriting",
            "Copywriting",
            "Копирайтинг",
        ],
        part_9: [
            "Written content that influences the visitor.",
            "Conținut scris care influențează vizitatorul.",
            "Письменный контент, который влияет на посетителя.",
        ],
        part_10: [
            "Front-end Development",
            "Dezvoltare Front-end",
            "Фронтенд разработка",
        ],
        part_11: [
            "Fully working Front-end structure. \n Used by the user.",
            "Structura Front-end complet funcțională.",
            "Полностью рабочая структура Фронтенд. ",
        ],
        part_12: [
            "Back-end Development",
            "Dezvoltare Back-end",
            "Бэкенд разработка",
        ],
        part_13: [
            "Fully working server logic. \n Server interaction.",
            "Logica server-lui complet funcțională.",
            "Полностью рабочая серверная логика.",
        ],
        part_14: [
            "Security",
            "Securitate",
            "Безопасность",
        ],
        part_15: [
            "Basic security to keep any application protected.",
            "Baza pentru a menține orice aplicație protejată.",
            "Базовая безопасность для защиты любого приложения.",
        ],
    },
    PortofolioBanner: {
        part_0: [
            "Latest Projects",
            "Proiecte",
            "Проекты",
        ],
        part_1: [
            "Here are some of my recent projects ☁",
            "Iată câteva dintre proiecte mele recente ☁",
            "Вот некоторые из моих последних проектов ☁",
        ],
        part_2: [
            "See All",
            "Vezi Toate",
            "Увидеть все",
        ],
    },
    CallToAction: {
        part_0: [
            "Get Your Website",
            "Obține Site-ul Tau",
            "Получите Cвой Bеб-Cайт",
        ],
        part_1: [
            "Place an request 🎁",
            "Plaseaza o cerere 🎁",
            "Оставьте заявку 🎁",
        ],
    },
    Form: {
        part_0: [
            "Your Name",
            "Numele Tau",
            "Ваше имя",
        ],
        part_1: [
            "Your Email",
            "Email-ul Tau",
            "Ваш почты",
        ],
        part_2: [
            "Subject",
            "Subiect",
            "Предмет",
        ],
        part_3: [
            "Message",
            "Msaj-ul",
            "Сообщение",
        ],
        part_4: [
            "Send ✉",
            "Trimite ✉",
            "Отправлять ✉",
        ],
        part_5: [
            "Send",
            "Trimite",
            "Отправлять",
        ],
    },
    Portofolio: {
        part_0: [
            "My Projects",
            "Proiectele Mele",
            "Мои проекты",
        ],
        part_1: [
            "Here are some of my recent projects ☁",
            "Iată câteva dintre proiecte mele recente☁",
            "Вот некоторые из моих последних проектов ☁",
        ],
    },
    About: {
        part_0: [
            "About Me 👋",
            "Despre Mine 👋",
            "Обо мне 👋",
        ],
        part_1: [
            "I am a web developer based in Moldova.",
            "Sunt un dezvoltator web din Moldova.",
            "Я веб-разработчик из Молдовы.",
        ],
        part_2: [
            "Throughout my journey, I have worked for",
            "De-a lungul călătoriei mele, am lucrat pentru",
            "На протяжении всего своего пути я работал с",
        ],
        part_3: [
            "some customers locally, in multiple fields.",
            "unii clienți la nivel local, în mai multe domenii.",
            "работал с некоторыми клиентами на местном уровне.",
        ],
        part_4: [
            "I like to serve people and help out my",
            "Îmi place să servesc oamenii și să-mi",
            "Мне нравится обслуживать людей и помогать",
        ],
        part_5: [
            "customers as much as possible.",
            "ajut clienții cât mai mult posibil.",
            "своим клиентам, насколько это возможно.",
        ],
        part_6: [
            "I do care about the my clients and look",
            "Îmi pasă de clienții mei și mă uit mai",
            "Я забочусь о своих клиентах и стремлюсь",
        ],
        part_7: [
            "further into contributing to this world.",
            "departe în a contribui la această lume",
            "внести свой вклад в этот мир",
        ],
        part_8: [
            "Skills",
            "Abilități",
            "Способности",
        ],
    },
    Header: {
        part_0: [
            "HOME",
            "ACASA",
            "ДОМ",
        ],
        part_1: [
            "PORTOFOLIO",
            "PORTOFOLIO",
            "ПОРТФОЛИО",
        ],
        part_2: [
            "ABOUT",
            "DESPRE",
            "ОБО МНЕ",
        ],
    },
}

export { langCtx, Paragraphs }