import {
    clearChildren
} from "./app.js"

import {
    displayRecordView
} from "./record.js"

import {
    displayArtistView
} from "./artist.js"

function displayAllRecordsView(mainEl, records){
    const recordsOverviewSectionEl = document.createElement("div");
    recordsOverviewSectionEl.classList.add("records_overview_section");

    records.forEach(record => {
        const recordSectionEl = document.createElement("section");

        const recordPictureEl = document.createElement("img");
        recordPictureEl.src = record.imageUrl;
        recordPictureEl.alt = "record picture";
        recordPictureEl.classList.add("clickable_el");
        recordPictureEl.classList.add("record_picture");
        recordPictureEl.addEventListener("click", () => {
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

        recordSectionEl.appendChild(recordPictureEl);
        recordSectionEl.appendChild(recordNameEl);
        recordSectionEl.appendChild(recordArtistNameEl);

        recordsOverviewSectionEl.appendChild(recordSectionEl);
    })

    mainEl.appendChild(recordsOverviewSectionEl);
}

export {
    displayAllRecordsView
};