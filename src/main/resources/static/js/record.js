import {
    clearChildren
} from "./app.js";

import { displayArtistView } from "./artist.js";

function displayRecordView(mainEl, record) {
    const recordDisplaySectionEl = document.createElement("div");
    recordDisplaySectionEl.classList.add("record_dispaly_Section");

    const recordImageSectionEl = document.createElement("div");
    recordImageSectionEl.classList.add("record_image_div");

    const recordImageEl = document.createElement("img");
    recordImageEl.src = record.bigImageUrl;
    recordImageEl.classList.add("big_image");

    recordImageSectionEl.appendChild(recordImageEl);
    recordDisplaySectionEl.appendChild(recordImageSectionEl);

    const recordInfoSectionEl = document.createElement("div");
    recordInfoSectionEl.classList.add("record_info_section");

    const recordInfoEl = document.createElement("ul");
    recordInfoEl.classList.add("record_info");

    const recordNameArtistSectionEl = document.createElement("div");

    const recordNameEl = document.createElement("p");
    recordNameEl.src = record.name;
    recordNameEl.style.fontSize = "large";

    const recordArtistEl = document.createElement("p");
    recordArtistEl.src = record.artist.name;
    recordArtistEl.style.fontSize = "large";
    recordArtistEl.classList.add("clickable_el");
    recordArtistEl.addEventListener("click", () => {
        clearChildren(mainEl);
        displayArtistView(mainEl, record.artist);
    })

    recordNameArtistSectionEl.appendChild(recordNameEl);
    recordNameArtistSectionEl.appendChild(recordArtistEl);

    const recordCategoriesSectionEl = document.createElement("div");
    recordCategoriesSectionEl.classList.add("record_categories_Section");

    record.categories.forEach(category => {
        const singleCategorySectionEl = document.createElement("div");
        singleCategorySectionEl.classList.add("single_category");

        const singleCategoryEl = document.createElement("p");
        singleCategoryEl.src = category.name;

        singleCategorySectionEl.appendChild(singleCategoryEl);
        recordCategoriesSectionEl.appendChild(singleCategorySectionEl);
    })

    const recordColorEl = document.createElement("p");
    recordColorEl.src = record.color;

    const recordBarcodeEl = document.createElement("p");
    recordBarcodeEl.src = record.barcode;

    const recordLabelEl = document.createElement("p");
    recordLabelEl.src = record.label;

    const recordReleaseYearEl = document.createElement("p");
    recordReleaseYearEl.src = record.releaseYear;

    recordInfoSectionEl.appendChild(recordInfoEl);
    recordInfoEl.appendChild(recordNameArtistSectionEl);

    recordInfoEl.appendChild(recordNameArtistSectionEl);
    recordInfoEl.appendChild(recordCategoriesSectionEl);
    recordInfoEl.appendChild(recordLabelEl);
    recordInfoEl.appendChild();
    recordInfoEl.appendChild();
    recordInfoEl.appendChild();
    recordInfoEl.appendChild();
}

export {
    displayRecordView
};