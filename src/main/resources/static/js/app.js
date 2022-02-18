import {displayAllRecordsView} from "./records.js";
import {displayAllArtistsView} from "./artists.js";
import {displayAllCategoriesView} from "./categories.js";
import {displayHomeView} from "./home.js";

const containerEl = document.querySelector(".container");

buildHeader();
buildMainElement();
buildFooter();

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

function buildHeader() {
    const sectionEl = document.createElement("section");
    const headerEl = document.createElement("header");
    headerEl.id = "header";

    const headerLogoEl = document.createElement("img");
    headerLogoEl.src = "images/logo.jpg";
    headerLogoEl.alt = "site logo";
    headerLogoEl.classlist.add("logo");
    headerLogoEl.classList.add("clickable_el");
    headerLogoEl.addEventListener("click", () => {
        window.location = "./index.html";

    })

    const pageLinksEl = document.createElement("div");
    pageLinksEl.classList.add("page_links");

    const allRecordsEl = document.createElement("p");
    allRecordsEl.innerText = "Records";
    allRecordsEl.classList.add("nav_link");
    allRecordsEl.classList.add("clickable_el");
    allRecordsEl.addEventListener("click", () => {
        const mainEl = document.querySelector(".main-content");
        clearChildren(mainEl);
        displayAllRecordsView(mainEl);
    })

    const allCategoriesEl = document.createElement("p");
    allCategoriesEl.innerText = "Categories";
    allCategoriesEl.classList.add("nav_link");
    allCategoriesEl.classList.add("clickable_el");
    allCategoriesEl.addEventListener("click", () => {
        const mainEl = document.querySelector(".main-content");
        clearChildren(mainEl);
        displayAllCategoriesView(mainEl);
    })

    const allArtistsEl = document.createElement("p");
    allArtistsEl.innerText = "Artists";
    allArtistsEl.classList.add("nav_link");
    allArtistsEl.classList.add("clickable_el");
    allArtistsEl.addEventListener("click", () => {
        const mainEl = document.querySelector(".main-content");
        clearChildren(mainEl);
        displayAllArtistsView(mainEl);
    })

    pageLinksEl.appendChild(allRecordsEl);
    pageLinksEl.appendChild(allCategoriesEl);
    pageLinksEl.appendChild(allArtistsEl);

    headerEl.appendChild(headerLogoEl);
    headerEl.appendChild(pageLinksEl);

    sectionEl.appendChild(headerEl);

    containerEl.appendChild(headerEl);

}

function buildMainElement(){

    const mainEl = document.createElement("main");
    mainEl.classList.add("main-content");
    containerEl.appendChild(mainEl);
    clearChildren(mainEl);
    displayHomeView(mainEl);
}

function buildFooter(){
    const footerEl = document.createElement("footer");
    const footerDivEl = document.createElement("div");
    footerDivEl.classList.add("footer_text");
    const footerTextEl = document.createElement("p");
    footerTextEl.innerText = "Evan Boylan - 2022";
    footerDivEl.appendChild(footerTextEl);
    footerEl.appendChild(footerDivEl);
    containerEl.appendChild(footerEl);
}

export {
    clearChildren
};