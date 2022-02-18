import {
    clearChildren
} from "./app.js"

import {
    displayRecordView
} from "./record.js"

import {
    displayArtistView
} from "./artist.js"

function displayCategoryView(mainEl, category){
    const categorySectionEl = document.createElement("div");
    categorySectionEl.classList.add("category_section");

    const categoryInfoSectionEl = document.createElement("section");
    categoryInfoSectionEl.classList.add("category_info_section");

    const categoryPictureEl = document.createElement("img");
    categoryPictureEl.src = category.imageUrl;
    categoryPictureEl.alt = "category picture";

    const categoryNameEl = document.createElement("p");
    categoryNameEl.src = category.name;
    categoryNameEl.alt = "artist name";

    const recordsDisplayEl = document.createElement("div");

    category.records.forEach(record => {
        const recordInfoEl = document.createElement("div");
        recordInfoEl.classList.add("singleRecordEl");
        
        const recordImageEl = document.createElement("img");
        recordImageEl.src = record.imageUrl;
        recordImageEl.alt = "record image";
        recordImageEl.classList.add("clickable_el");
        recordImageEl.classList.add("record_image");
        recordImageEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayRecordView(mainEl, record);
        })

        const recordNameEl = document.createElement("p");
        recordNameEl.src = record.name;
        recordNameEl.alt = "record name";
        recordNameEl.classList.add("clickable_el");
        recordNameEl.classList.add("record_name");
        recordNameEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayRecordView(mainEl, record);
        })

        const recordArtistNameEl = document.createElement("p");
        recordArtistNameEl.src = record.artist.name;
        recordArtistNameEl.alt = "artist name";
        recordArtistNameEl.classList.add("clickable_el");
        recordArtistNameEl.classList.add("artist_name");
        recordArtistNameEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayArtistView(mainEl, record.artist);
        })

        recordInfoEl.appendChild(recordImageEl);
        recordInfoEl.appendChild(recordNameEl);
        recordInfoEl.appendChild(recordArtistNameEl);

        recordsDisplayEl.appendChild(recordInfoEl);
    })

    categoryInfoSectionEl.appendChild(categoryPictureEl);
    categoryInfoSectionEl.appendChild(categoryNameEl);

    categorySectionEl.appendChild(categoryInfoSectionEl);
    categorySectionEl.appendChild(recordsDisplayEl);

    mainEl.appendChild(categorySectionEl);
}

export {
    displayCategoryView
};