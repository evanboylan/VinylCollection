import {
    clearChildren
} from "./app.js";

import { displayArtistView } from "./artist.js";
import { displayCategoryView } from "./category.js";

function displayRecordView(mainEl, record) {
    const recordDisplaySectionEl = document.createElement("div");
    recordDisplaySectionEl.classList.add("record_dispaly_Section");

    const recordImageSectionEl = document.createElement("div");
    recordImageSectionEl.classList.add("record_image_div");

    const recordImageEl = document.createElement("img");
    recordImageEl.src = record.bigImageUrl;
    recordImageEl.classList.add("big_image");

    recordImageSectionEl.appendChild(recordImageEl);

    const recordInfoSectionEl = document.createElement("div");
    recordInfoSectionEl.classList.add("record_info_section");

    const recordInfoEl = document.createElement("div");
    recordInfoEl.classList.add("record_info");

    const recordNameArtistSectionEl = document.createElement("div");

    const recordNameEl = document.createElement("p");
    recordNameEl.src = record.name;
    recordNameEl.style.fontSize = "large";

    const recordArtistEl = document.createElement("p");
    recordArtistEl.src = record.artist.name + " - ";
    recordArtistEl.style.fontSize = "large";
    recordArtistEl.classList.add("clickable_el");
    recordArtistEl.addEventListener("click", () => {
        clearChildren(mainEl);
        displayArtistView(mainEl, record.artist);
    })

    recordNameArtistSectionEl.appendChild(recordArtistEl);
    recordNameArtistSectionEl.appendChild(recordNameEl);

    const recordCategoriesSectionEl = document.createElement("div");
    recordCategoriesSectionEl.classList.add("record_categories_Section");

    record.categories.forEach(category => {
        const singleCategorySectionEl = document.createElement("div");
        singleCategorySectionEl.classList.add("single_category");

        const singleCategoryEl = document.createElement("p");
        singleCategoryEl.src = category.name;
        singleCategoryEl.classList.add("clickable_el");

        singleCategoryEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayCategoryView(mainEl, category);
        })

        singleCategorySectionEl.appendChild(singleCategoryEl);
        recordCategoriesSectionEl.appendChild(singleCategorySectionEl);
    })

    const secondaryRecordInfoEl = document.createElement("div");
    secondaryRecordInfoEl.classList.add("secondary_record_info");

    const recordLabelEl = document.createElement("p");
    recordLabelEl.src = "Label: " + record.label;

    const recordReleaseYearEl = document.createElement("p");
    recordReleaseYearEl.src = "Pressing Released: " + record.releaseYear;
    
    const recordColorEl = document.createElement("p");
    recordColorEl.src = "Pressing Color: " + record.color;

    const recordBarcodeEl = document.createElement("p");
    recordBarcodeEl.src = "Label Code: " + record.barcode;

    secondaryRecordInfoEl.appendChild(recordLabelEl);
    secondaryRecordInfoEl.appendChild(recordReleaseYearEl);
    secondaryRecordInfoEl.appendChild(recordColorEl);
    secondaryRecordInfoEl.appendChild(recordBarcodeEl);

    recordInfoSectionEl.appendChild(recordInfoEl);
    recordInfoEl.appendChild(recordImageSectionEl);
    recordInfoEl.appendChild(recordNameArtistSectionEl);
    recordInfoEl.appendChild(recordCategoriesSectionEl);
    recordInfoEl.appendChild(secondaryRecordInfoEl);

    recordDisplaySectionEl.appendChild(recordInfoEl);

    mainEl.appendChild(recordDisplaySectionEl);
}

export {
    displayRecordView
};