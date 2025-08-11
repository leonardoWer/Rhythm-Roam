import styles from "./GlowLink.module.css";

export function createGlowLink({title, onClick}) {
    const link = document.createElement("a");
    link.className = styles.glowLink;
    link.innerHTML = `
        <span class="${styles.glowLink__inner}">${title}</span>
    `;

    return link;
}