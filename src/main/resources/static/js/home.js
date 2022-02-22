import {
    clearChildren
} from "./app.js"

function  displayHomeView(mainEl){
    const hello = document.createElement("p");
    hello.innerText = "Hello";

    mainEl.appendChild(hello);
}

export {
    displayHomeView
};