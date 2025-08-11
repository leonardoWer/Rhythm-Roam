import styles from "./BenefitTile.module.css";

export function createBenefitTile({title, img}) {
    const tile = document.createElement('div');
    tile.classList.add(styles.tile);

    tile.innerHTML = `
        <div class="${styles.tile__imgContainer}">
            <img class="${styles.tileImgContainer__img}" src="${img}" alt="${title}" />
        </div>
        
        <div class="${styles.tile__titleContainer}">
            <h4 class="${styles.tile__title}">${title}</h4>
        </div>
    `

    return tile;
}