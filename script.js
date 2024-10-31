const items = [{
        title: "Tom Ford eau de Soleil Blanc",
        description: "Это сочетание с теплотой цветочной амбры играет как отражение белого солнца и неба на воде.",
        tags: ["апельсин", "бергамот"],
        price: 720,
        img: "./img/1.webp",
        rating: 5.0,
    },
    {
        title: "Tom Ford Soleil Neige",
        description: "Он наполнен искристым сиянием солнечных лучей на снежных склонах и буквально пронизан зимней свежестью.",
        tags: ["бергамот ", "семена моркови"],
        price: 890,
        img: "./img/2.webp",
        rating: 4.7,
    },
    {
        title: "ESSENTIAL PARFUMS PARIS ORANGE X SANTAL",
        description: "Я представила себе свежий и чувственный аромат, в котором искристые и сочные ноты горького апельсина из Италии играют с великолепным, нежным сандалом из Австралии.",
        tags: ["апельсин"],
        price: 370,
        img: "./img/3.webp",
        rating: 4.6,
    },
    {
        title: "KILIAN PARIS Love, don't be shy",
        description: "Аромат — это не только оружие соблазнения, но и ваша защита.",
        tags: ["эссенция нероли"],
        price: 1010,
        img: "./img/4.webp",
        rating: 4.4,
    },
    {
        title: "BYREDO Blanche",
        description: "Аромат посвящен возлюбленной. Символ чистоты и возвышенности.",
        tags: ["белая роза"],
        price: 810,
        img: "./img/5.webp",
        rating: 4.9,
    },
    {
        title: "ESSENTIAL PARFUMS PARIS Nice bergamote",
        description: "Я посвятил этот аромат аристократической красоте калабрийского бергамота.",
        tags: ["бергамот", "жасмин"],
        price: 370,
        img: "./img/6.webp",
        rating: 4.8,
    },
    {
        title: "BYREDO Bal d`Afrique",
        description: "Ревущие двадцатые годы… В знаменитом Мулен Руж жарче, чем в самой Африке, ведь на сцене Жозефина Бейкер!",
        tags: ["бергамот", "лимон"],
        price: 510,
        img: "./img/7.webp",
        rating: 3.9,
    },
    {
        title: "THOMAS KOSMALA № 4 Après l'Amour",
        description: "Утонченный, многогранный аромат THOMAS KOSMALA отражает чувственный момент прикосновения кожи к коже.",
        tags: ["апельсин"],
        price: 560,
        img: "./img/8.webp",
        rating: 2.1,
    },
    {
        title: "KILIAN PARIS Good Girl Gone Bad",
        description: "Настоящий вихрь смелых фруктовых ароматов в райском саду добра и зла.",
        tags: ["османтус", "апельсин"],
        price: 1020,
        img: "./img/9.webp",
        rating: 1.8,
    },
    {
        title: "THOMAS KOSMALA No.10 Désir du Coeur",
        description: "Он звучит по-своему на каждом человеке и очаровывает головокружительным, уникальным шлейфом.",
        tags: ["мускус"],
        price: 800,
        img: "./img/10.webp",
        rating: 0.2,
    },
    {
        title: "BYREDO Gypsy Water",
        description: "Современная интерпретация цыганской жизни, пронизанной мифами и тайнами.",
        tags: ["бергамот", "лимон"],
        price: 1060,
        img: "./img/11.webp",
        rating: 4.1,
    },
    {
        title: "LOEWE 001 WOMAN",
        description: "Флакон парфюмерной воды отличается особой сдержанностью и изяществом, что полностью сочетается с характером самого аромата.",
        tags: ["бергамот"],
        price: 340,
        img: "./img/12.webp",
        rating: 3.6,
    },
];

let userName = prompt('Добро пожаловать в парфюмерный магазин "Parfümeur". Как Вас зовут?');
const question = prompt(`${userName}, могу лия Вам чем-нибудь помочь?`);

switch (question) {
    case 'да':
    case 'Да':
    case 'конечно':
        alert('Вся наша парфюмерия находится в каталоге - кликните на него или пролистайте вниз. Приятного поиска!');
        break;
    case 'нет':
    case 'Не':
        alert('Приятного поиска своего парфюма!');
        break;
};

let currentState = [...items];

const itemsContainer = document.querySelector('#shop-items');
const itemTemplate = document.querySelector('#item-template');
const nothingFound = document.querySelector('#nothing-found');

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";

    arr.forEach((item) => {
        itemsContainer.append(createShopItem(item));
    });

    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}


function sortByAlphabet(a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}


renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

function createShopItem(shopItem) {
    const { title, description, tags, img, price, rating } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price} BYN`;

    const ratingContainer = item.querySelector(".rating");
    for (let i = 0; i < rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star");
        ratingContainer.append(star);
    }

    const patternTags = item.querySelector(".tags");

    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        patternTags.append(element);
    });

    return item;
}

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();

    currentState = items.filter((elem) =>
        elem.title.toLowerCase().includes(searchString)
    );
    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);

    sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

const sortControl = document.querySelector("#sort");

sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "rating":
            {
                currentState.sort((a, b) => b.rating - a.rating);
                break;
            }
        case "alphabet":
            {
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }

    renderItems(currentState);
});

const sketchesContainer = document.querySelector("#new-sketches");
const sketchesInput = document.querySelector("#input");

sketchesInput.addEventListener('keydown', function(event) {
    const sketchesText = sketchesInput.value;

    const newSketch = document.createElement('div');
    newSketch.classList.add("sketch");
    newSketch.textContent = sketchesText;

    if (sketchesText != '' && event.key == 'Enter') {
        sketchesContainer.append(newSketch);

        sketchesInput.value = '';
    }

    newSketch.addEventListener('click', function() {
        newSketch.classList.toggle("done")
    });
});