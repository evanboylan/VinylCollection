import {
    clearChildren
} from "./app.js"

import {
    displayCategoryView
} from "./category.js"

function displayAllCategoriesView(mainEl, categories){
    const categoriesOverviewSectionEl = document.createElement("div");
    categoriesOverviewSectionEl.classList.add("categories_overview_section");

    categories.forEach(category => {
        const categorySectionEl = document.createElement("section");

        const categoryPictureEl = document.createElement("img");
        categoryPictureEl.src = category.image;
        categoryPictureEl.alt = "category picture";
        categoryPictureEl.classList.add("clickable_el");
        categoryPictureEl.classList.add("category_picture");
        categoryPictureEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayCategoryView(mainEl, category);
        })

        const categoryNameEl = document.createElement("p");
        categoryNameEl.src = category.name;
        categoryNameEl.alt = "category name";
        categoryNameEl.classList.add("clickable_el");
        categoryNameEl.classList.add("category_name");
        categoryNameEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayCategoryView(mainEl, category);
        })

        categorySectionEl.appendChild(categoryPictureEl);
        categorySectionEl.appendChild(categoryNameEl);

        categoriesOverviewSectionEl.appendChild(categorySectionEl);
    })

    mainEl.appendChild(categoriesOverviewSectionEl);
}

export {
    displayAllCategoriesView
};