import 's/css/style.css'

import {createGlowLink} from "s/components/links/GlowLink/GlowLink.js";

const heroButtonContainer = document.querySelector('.hero-button-container');
heroButtonContainer.appendChild(createGlowLink({
    title: 'Buy now',
    onClick: {

    }
}));