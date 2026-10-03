const mangas = [

    // =========================
    // İLK OKUNACAKLAR
    // =========================

    {
        name: "Jujutsu Kaisen",
        genres: ["Action", "Fantasy", "Supernatural"],
        age: "16 altı",
        high: true,
        first: true,
        description: "Hızlı tempolu aksiyon, lanetler ve güçlü karakterleriyle başlangıç için öne çıkan bir seri."
    },

    {
        name: "Attack on Titan",
        genres: ["Action", "Adventure", "Mystery"],
        age: "16 altı",
        first: true,
        started: true,
        description: "Senin başladığın manga. Gizem, savaş ve büyük bir hikâye dünyası üzerine kurulu."
    },

    {
        name: "One Punch Man",
        genres: ["Action", "Comedy"],
        age: "16 altı",
        high: true,
        first: true,
        description: "Aksiyon ve komediyi birleştiren eğlenceli ve popüler bir seri."
    },

    {
        name: "Death Note",
        genres: ["Mystery", "Thriller", "Psychological"],
        age: "16 altı",
        high: true,
        first: true,
        description: "Zihin oyunları ve gerilim üzerine kurulu, başlangıç için çok sürükleyici bir manga."
    },

    {
        name: "One Piece",
        genres: ["Action", "Adventure", "Fantasy"],
        age: "16 altı",
        high: true,
        long: true,
        first: true,
        description: "Devasa dünyası ve uzun macerasıyla klasikleşmiş bir shounen."
    },

    {
        name: "Naruto",
        genres: ["Action", "Adventure", "Fantasy"],
        age: "16 altı",
        high: true,
        long: true,
        first: true,
        description: "Ninja dünyasında geçen uzun soluklu bir macera."
    },

    {
        name: "Demon Slayer",
        genres: ["Action", "Fantasy", "Supernatural"],
        age: "16 altı",
        high: true,
        first: true,
        description: "Kılıç dövüşleri, iblisler ve duygusal bir hikâye."
    },

    {
        name: "Hunter × Hunter",
        genres: ["Action", "Adventure", "Fantasy"],
        age: "16 altı",
        high: true,
        first: true,
        description: "Macera, strateji ve karakter gelişimini bir araya getirir."
    },

    {
        name: "Fullmetal Alchemist",
        genres: ["Action", "Adventure", "Fantasy"],
        age: "16 altı",
        high: true,
        first: true,
        description: "Tamamlanmış ve güçlü hikâyesiyle klasikleşmiş bir seri."
    },


    // =========================
    // ACTION
    // =========================

    {
        name: "Bleach",
        genres: ["Action", "Supernatural", "Adventure"],
        age: "16 altı",
        high: true,
        long: true,
        description: "Ruhlar ve savaşlar üzerine kurulu uzun soluklu bir shounen."
    },

    {
        name: "Dragon Ball",
        genres: ["Action", "Adventure", "Martial Arts"],
        age: "16 altı",
        high: true,
        long: true,
        description: "Manga dünyasının en tanınan aksiyon serilerinden biri."
    },

    {
        name: "Black Clover",
        genres: ["Action", "Fantasy"],
        age: "16 altı",
        high: true,
        description: "Büyü, rekabet ve aksiyon üzerine kurulu shounen."
    },

    {
        name: "My Hero Academia",
        genres: ["Action", "Supernatural"],
        age: "16 altı",
        high: true,
        description: "Süper güçlere sahip gençlerin kahraman olma yolculuğu."
    },

    {
        name: "Fire Force",
        genres: ["Action", "Supernatural"],
        age: "16 altı",
        description: "Ateş güçleri ve özel birlikler üzerine aksiyon serisi."
    },

    {
        name: "Mob Psycho 100",
        genres: ["Action", "Comedy", "Supernatural"],
        age: "16 altı",
        description: "Psişik güçleri olan bir gencin hikâyesi."
    },


    // =========================
    // FANTASY
    // =========================

    {
        name: "Frieren: Beyond Journey's End",
        genres: ["Fantasy", "Adventure", "Drama"],
        age: "16 altı",
        high: true,
        description: "Fantastik dünyası ve karakter odaklı anlatımıyla öne çıkan seri."
    },

    {
        name: "Noragami",
        genres: ["Fantasy", "Supernatural", "Action"],
        age: "16 altı",
        description: "Tanrılar, ruhlar ve doğaüstü olaylar üzerine bir hikâye."
    },

    {
        name: "Blue Exorcist",
        genres: ["Fantasy", "Supernatural", "Action"],
        age: "16 altı",
        description: "Şeytanlar ve doğaüstü güçler üzerine kurulu bir seri."
    },

    {
        name: "Magi",
        genres: ["Fantasy", "Adventure", "Action"],
        age: "16 altı",
        description: "Fantastik dünya ve macera odaklı bir manga."
    },


    // =========================
    // MYSTERY
    // =========================

    {
        name: "The Promised Neverland",
        genres: ["Mystery", "Thriller", "Psychological"],
        age: "16 altı",
        high: true,
        description: "Gizem ve gerilim üzerine kurulu sürükleyici bir hikâye."
    },

    {
        name: "Monster",
        genres: ["Mystery", "Psychological", "Thriller"],
        age: "16 altı",
        high: true,
        description: "Karmaşık karakterleri ve psikolojik hikâyesiyle tanınan manga."
    },

    {
        name: "20th Century Boys",
        genres: ["Mystery", "Thriller", "Psychological"],
        age: "16 altı",
        high: true,
        description: "Gizem ve komplolar üzerine kurulu büyük bir hikâye."
    },

    {
        name: "Tomodachi Game",
        genres: ["Mystery", "Psychological", "Thriller"],
        age: "16 altı",
        description: "Arkadaşlık ve güven üzerine kurulu psikolojik oyunlar."
    },

    {
        name: "Erased",
        genres: ["Mystery", "Thriller", "Psychological"],
        age: "16 altı",
        description: "Zaman yolculuğu ve gizem üzerine kısa bir seri."
    },


    // =========================
    // DETECTIVE
    // =========================

    {
        name: "Detective Conan",
        genres: ["Detective", "Mystery", "Crime"],
        age: "16 altı",
        long: true,
        description: "Dedektiflik ve gizem üzerine çok uzun soluklu bir seri."
    },

    {
        name: "Moriarty the Patriot",
        genres: ["Detective", "Mystery", "Historical"],
        age: "16 altı",
        description: "Sherlock Holmes evreninden esinlenen gizem ve suç hikâyesi."
    },


    // =========================
    // SPORTS
    // =========================

    {
        name: "Haikyuu!!",
        genres: ["Sports", "Comedy"],
        age: "16 altı",
        high: true,
        description: "Voleybol ve takım rekabeti üzerine popüler spor mangası."
    },

    {
        name: "Blue Lock",
        genres: ["Sports", "Action"],
        age: "16 altı",
        high: true,
        description: "Futbolu rekabetçi ve aksiyonlu bir şekilde ele alır."
    },

    {
        name: "Slam Dunk",
        genres: ["Sports", "Comedy"],
        age: "16 altı",
        high: true,
        description: "Basketbol klasiklerinden biri."
    },

    {
        name: "Kuroko's Basketball",
        genres: ["Sports", "Action"],
        age: "16 altı",
        description: "Basketbol ve rekabet üzerine hızlı tempolu bir seri."
    },

    {
        name: "Hajime no Ippo",
        genres: ["Sports", "Action"],
        age: "16 altı",
        long: true,
        description: "Boks dünyasında geçen çok uzun soluklu manga."
    },

    {
        name: "Captain Tsubasa",
        genres: ["Sports"],
        age: "16 altı",
        description: "Futbol dünyasının en bilinen manga serilerinden biri."
    },


    // =========================
    // COMEDY
    // =========================

    {
        name: "Gintama",
        genres: ["Comedy", "Action"],
        age: "16 altı",
        high: true,
        long: true,
        description: "Komedi ve aksiyonu bir araya getiren uzun soluklu seri."
    },

    {
        name: "Spy × Family",
        genres: ["Comedy", "Action"],
        age: "16 altı",
        high: true,
        description: "Sahte bir ailenin eğlenceli maceraları."
    },

    {
        name: "The Disastrous Life of Saiki K.",
        genres: ["Comedy", "Supernatural"],
        age: "16 altı",
        description: "Psişik güçleri olan bir öğrencinin komik hayatı."
    },


    // =========================
    // ROMANCE
    // =========================

    {
        name: "Kaguya-sama: Love Is War",
        genres: ["Romance", "Comedy"],
        age: "16 altı",
        high: true,
        description: "Romantizmi zihin oyunları ve komediyle birleştirir."
    },

    {
        name: "Horimiya",
        genres: ["Romance", "Comedy"],
        age: "16 altı",
        description: "Okul hayatı ve ilişkiler üzerine romantik bir manga."
    },

    {
        name: "Blue Box",
        genres: ["Romance", "Sports"],
        age: "16 altı",
        high: true,
        description: "Romantizm ve spor dünyasını bir araya getirir."
    },

    {
        name: "Your Lie in April",
        genres: ["Romance", "Drama", "Music"],
        age: "16 altı",
        description: "Müzik, arkadaşlık ve romantizm üzerine duygusal bir hikâye."
    },


    // =========================
    // SCI-FI
    // =========================

    {
        name: "Dr. Stone",
        genres: ["Sci-Fi", "Adventure"],
        age: "16 altı",
        description: "Bilim ve macerayı birleştiren yaratıcı bir seri."
    },

    {
        name: "Pluto",
        genres: ["Sci-Fi", "Mystery", "Thriller"],
        age: "16 altı",
        description: "Bilim kurgu ve gizemi bir araya getiren bir manga."
    },


    // =========================
    // HISTORICAL
    // =========================

    {
        name: "Vinland Saga",
        genres: ["Historical", "Action", "Adventure"],
        age: "16 altı",
        high: true,
        description: "Tarihî ortamda geçen, savaş ve karakter gelişimi odaklı güçlü bir seri."
    },

    {
        name: "Rurouni Kenshin",
        genres: ["Historical", "Action", "Adventure"],
        age: "16 altı",
        description: "Samuraylar ve geçmişiyle yüzleşen bir savaşçı üzerine hikâye."
    },


    // =========================
    // 16+
    // =========================

    {
        name: "Chainsaw Man",
        genres: ["Action", "Dark Fantasy", "Supernatural"],
        age: "16+",
        later: true,
        description: "Yoğun şiddet ve yetişkin temaları nedeniyle ileride okuyabilir."
    },

    {
        name: "Berserk",
        genres: ["Dark Fantasy", "Action", "Historical"],
        age: "16+",
        later: true,
        long: true,
        description: "Çok ağır şiddet ve yetişkin temaları içerir."
    },

    {
        name: "Vagabond",
        genres: ["Historical", "Martial Arts", "Drama"],
        age: "16+",
        later: true,
        description: "Yoğun şiddet ve yetişkin temaları nedeniyle ileride okuyabilir."
    },

    {
        name: "Gantz",
        genres: ["Sci-Fi", "Action", "Psychological"],
        age: "16+",
        later: true,
        description: "Yoğun şiddet ve yetişkin temaları içerir."
    },

    {
        name: "Claymore",
        genres: ["Dark Fantasy", "Action"],
        age: "16+",
        later: true,
        description: "Karanlık atmosferi ve yoğun şiddeti nedeniyle ileride okuyabilir."
    },

    {
        name: "Blade of the Immortal",
        genres: ["Historical", "Action", "Martial Arts"],
        age: "16+",
        later: true,
        description: "Yoğun şiddet ve yetişkin temaları içerir."
    },

    {
        name: "Goodnight Punpun",
        genres: ["Psychological", "Drama"],
        age: "16+",
        later: true,
        description: "Ağır psikolojik ve yetişkin temaları nedeniyle ileride okuyabilir."
    },

    {
        name: "Homunculus",
        genres: ["Psychological", "Mystery"],
        age: "16+",
        later: true,
        description: "Ağır psikolojik temalar içerir."
    },

    {
        name: "The Flowers of Evil",
        genres: ["Psychological", "Drama"],
        age: "16+",
        later: true,
        description: "Yoğun psikolojik ve yetişkin temaları içerir."
    },

    {
        name: "Kingdom",
        genres: ["Historical", "Action", "War"],
        age: "16+",
        later: true,
        long: true,
        description: "Savaşlar ve tarihî olaylar üzerine kurulu çok uzun soluklu bir seri."
    }

];


// ======================================
// İLK OKUNACAKLAR SIRASI
// ======================================

const firstReadOrder = [

    "Jujutsu Kaisen",

    "Attack on Titan",

    "One Punch Man",

    "Death Note",

    "One Piece",

    "Naruto",

    "Demon Slayer",

    "Hunter × Hunter",

    "Fullmetal Alchemist"

];


// ======================================
// TÜRLER
// ======================================

const genres = [

    "All",

    "Action",
    "Adventure",
    "Fantasy",

    "Romance",

    "Psychological",
    "Thriller",
    "Mystery",

    "Sports",
    "Comedy",

    "Supernatural",
    "Sci-Fi",

    "Historical",
    "Martial Arts",

    "Detective",
    "Dark Fantasy"

];


// ======================================
// MANGA CARD
// ======================================

function createCard(manga, index) {

    let tags = "";


    if (manga.long) {

        tags += `
            <span class="tag green">
                UZUN
            </span>
        `;

    }


    if (manga.high) {

        tags += `
            <span class="tag green">
                YÜKSEK ÖNERİ
            </span>
        `;

    }


    if (manga.started) {

        tags += `
            <span class="tag green">
                SENİN BAŞLADIĞIN
            </span>
        `;

    }


    if (manga.later) {

        tags += `
            <span class="tag red">
                İLERİDE OKUYABİLİR
            </span>
        `;

    }


    return `

        <article
            class="card"
            onclick="openModal(${JSON.stringify(manga.name)})"
        >

            <span class="card-number">
                #${String(index + 1).padStart(2, "0")}
            </span>


            <h3>
                ${manga.name}
            </h3>


            <div class="card-genres">
                ${manga.genres.join(" · ")}
            </div>


            <div class="tags">
                ${tags}
            </div>

        </article>

    `;

}


// ======================================
// LİSTEYİ EKRANA YAZDIR
// ======================================

function renderMangas(list, elementId) {

    const container =
        document.getElementById(elementId);


    if (list.length === 0) {

        container.innerHTML = `
            <p class="no-result">
                Manga bulunamadı.
            </p>
        `;

        return;
    }


    container.innerHTML = list
        .map((manga, index) =>
            createCard(manga, index)
        )
        .join("");

}


// ======================================
// İLK OKUNACAKLAR
// ======================================

function renderFirstRead() {

    const list = firstReadOrder

        .map(name =>
            mangas.find(
                manga => manga.name === name
            )
        )

        .filter(Boolean);


    renderMangas(
        list,
        "firstGrid"
    );

}


// ======================================
// 16+ LİSTESİ
// ======================================

function renderLater() {

    const list = mangas.filter(
        manga => manga.later
    );


    renderMangas(
        list,
        "laterGrid"
    );

}


// ======================================
// AKTİF TÜR
// ======================================

let activeGenre = "All";


// ======================================
// ANA LİSTE
// ======================================

function renderMain() {

    let list = mangas.filter(
        manga => !manga.later
    );


    // Tür filtresi

    if (activeGenre !== "All") {

        list = list.filter(
            manga =>
                manga.genres.includes(
                    activeGenre
                )
        );

    }


    // Arama filtresi

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    if (searchText !== "") {

        list = list.filter(manga =>

            manga.name
                .toLowerCase()
                .includes(searchText)

            ||

            manga.genres.some(
                genre =>
                    genre
                        .toLowerCase()
                        .includes(searchText)
            )

        );

    }


    renderMangas(
        list,
        "mangaGrid"
    );

}


// ======================================
// TÜR BUTONLARI
// ======================================

function createGenreButtons() {

    const container =
        document.getElementById(
            "genreButtons"
        );


    container.innerHTML = genres

        .map(genre => `

            <button
                class="filter ${
                    genre === "All"
                        ? "active"
                        : ""
                }"
                data-genre="${genre}"
            >

                ${
                    genre === "All"
                        ? "Tümü"
                        : genre
                }

            </button>

        `)

        .join("");


    const buttons =
        document.querySelectorAll(
            ".filter"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                buttons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                this.classList.add(
                    "active"
                );


                activeGenre =
                    this.dataset.genre;


                renderMain();

            }
        );

    });

}


// ======================================
// MANGA DETAY PENCERESİ
// ======================================

function openModal(mangaName) {

    const manga =
        mangas.find(
            item =>
                item.name === mangaName
        );


    if (!manga) return;


    const modal =
        document.getElementById(
            "modal"
        );


    const content =
        document.getElementById(
            "modalContent"
        );


    let tags = "";


    // Yaş etiketi

    if (manga.age === "16+") {

        tags += `
            <span class="tag red">
                16+ / İLERİDE OKUYABİLİR
            </span>
        `;

    } else {

        tags += `
            <span class="tag green">
                16 YAŞ ALTI
            </span>
        `;

    }


    // Uzun etiketi

    if (manga.long) {

        tags += `
            <span class="tag green">
                UZUN
            </span>
        `;

    }


    // Yüksek öneri

    if (manga.high) {

        tags += `
            <span class="tag green">
                YÜKSEK ÖNERİ
            </span>
        `;

    }


    // Başlanan manga

    if (manga.started) {

        tags += `
            <span class="tag green">
                SENİN BAŞLADIĞIN
            </span>
        `;

    }


    content.innerHTML = `

        <p class="small-title">
            ${manga.genres.join(" · ")}
        </p>


        <h2>
            ${manga.name}
        </h2>


        <p class="modal-description">
            ${manga.description}
        </p>


        <div class="modal-tags">
            ${tags}
        </div>

    `;


    modal.classList.remove(
        "hidden"
    );

}


// ======================================
// MODALI KAPAT
// ======================================

function closeModal() {

    document
        .getElementById("modal")
        .classList.add("hidden");

}


// X BUTONU

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


// Modal dışına tıklayınca kapat

document
    .getElementById("modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );


// ESC tuşuyla kapat

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


// ======================================
// ARAMA
// ======================================

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        renderMain
    );


// ======================================
// SAYFAYI BAŞLAT
// ======================================

createGenreButtons();

renderFirstRead();

renderMain();

renderLater();