import styles from "./ShopTile.module.css"

import {createGlowLink} from "s/components/links/GlowLink/GlowLink.js";
import {color} from "three/tsl";

export function createShopTile({title, description,
                               price, colors,
                               img, imgBg}) {

    // Контейнер с изображением
    const imgPart = document.createElement("div")
    imgPart.className = styles.imgContainer;
    imgPart.style.background = imgBg;
    imgPart.innerHTML = `
        <img class="${styles.hpImg}" src="${img}" alt="${title}">
    `;

    // Контейнер с текстом
    const contentPart = document.createElement("div")
    contentPart.className = styles.contentContainer;
    contentPart.innerHTML = `
        <div class="${styles.contentContainer__top}">
            <div class="${styles.titleContainer}">
                <div class="${styles.colorsContainer}"></div>
    
                <h4 class="${styles.title}">${title}</h4>
            </div>
    
            <p class="${styles.description}">${description}</p>
        </div>
      
        <div class="${styles.priceContainer}">
            <span class="${styles.price}">$${price}</span>
        </div>
    `;

    const colorsContainerElement = contentPart.querySelector(`.${styles.colorsContainer}`);
    if (colorsContainerElement) {
        colors.forEach((color, index) => {
            const colorItem = document.createElement("div");
            colorItem.className = styles.colorItem;
            colorItem.style.backgroundColor = color;
            if (index > 0) {
                colorItem.style.marginLeft = "-20%"
            }
            colorsContainerElement.appendChild(colorItem);
        });
    } else {
        console.log("colors container not found")
    }

    const priceContainer = contentPart.querySelector(`.${styles.priceContainer}`);
    const buyLink = createGlowLink({
        title: "buy",
        onClick: {}
    });
    priceContainer.appendChild(buyLink);

    return {imgPart, contentPart}
}