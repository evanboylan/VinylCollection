import {displayAllRecordsView} from "./records.js";
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

}

function buildMainElement(){

}

function buildFooter(){

}

export {
    clearChildren
};