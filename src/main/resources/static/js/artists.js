import {
    clearChildren
} from "./app.js"

import {
    displayArtistView
} from "./artist.js"

function displayAllArtistsView(mainEl, artists){
    const artistsOverviewSectionEl = document.createElement("div");
    artistsOverviewSectionEl.classList.add("artists_overview_section");

    artists.forEach(artist => {
        const artistSectionEl = document.createElement("section");

        const artistPictureEl = document.createElement("img");
        artistPictureEl.src = artist.imageUrl;
        artistPictureEl.alt = "artist portrait";
        artistPictureEl.classList.add("clickable_el");
        artistPictureEl.classList.add("artist_portrait");
        artistPictureEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayArtistView(mainEl, artist);
        })

        const artistNameEl = document.createElement("p");
        artistNameEl.src = artist.name;
        artistNameEl.alt = "artist name";
        artistNameEl.classList.add("clickable_el");
        artistNameEl.classList.add("artist_name");
        artistNameEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayArtistView(mainEl, artist);
        })

        artistSectionEl.appendChild(artistPictureEl);
        artistSectionEl.appendChild(artistNameEl);

        artistsOverviewSectionEl.appendChild(artistSectionEl);
    })

    mainEl.appendChild(artistsOverviewSectionEl);
}

export {
    displayAllArtistsView
};