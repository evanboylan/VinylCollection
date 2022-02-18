import {
    clearChildren
} from "./app.js"

import {
    displayRecordView
} from "./record.js"

function displayArtistView(mainEl, artist) {
    const artistSectionEl = document.createElement("div");
    artistSectionEl.classList.add("artist_section");
    
    const artistInfoSectionEl = document.createElement("section");
    artistInfoSectionEl.classList.add("artist_info_section");

    const artistPictureEl = document.createElement("img");
    artistPictureEl.src = artist.imageUrl;
    artistPictureEl.alt = "artist portrait";

    const artistNameEl = document.createElement("p");
    artistNameEl.src = artist.name;
    artistNameEl.alt = "artist name";

    const recordsDisplayEl = document.createElement("div");

    artist.records.forEach(record => {
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

        recordInfoEl.appendChild(recordImageEl);
        recordInfoEl.appendChild(recordNameEl);

        recordsDisplayEl.appendChild(recordInfoEl);
    })

    artistInfoSectionEl.appendChild(artistPictureEl);
    artistInfoSectionEl.appendChild(artistNameEl);

    artistSectionEl.appendChild(artistInfoSectionEl);
    artistSectionEl.appendChild(recordsDisplayEl);

    mainEl.appendChild(artistSectionEl);
}

export {
    displayArtistView
};