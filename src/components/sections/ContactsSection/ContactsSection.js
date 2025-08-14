import {createGlowLink} from "s/components/links/GlowLink/GlowLink.js";

export function createContactsSection() {
    const section = document.createElement('section');
    section.id = 'contactsSection';
    section.innerHTML = `
        <div class="container contacts-container">
            <div class="contacts-container__left">
              <ul class="contacts-container__list">
                <li class="contacts-container-list__title">nav</li>
                <li class="contacts-container-list__item">home</li>
                <li class="contacts-container-list__item">about</li>
                <li class="contacts-container-list__item">headphones</li>
                <li class="contacts-container-list__item">contact</li>
              </ul>
            </div>

            <div class="contacts-container__center">
              <div class="contacts-container-center__logo-container">
                RHYTM & ROAM
              </div>

              <div class="contacts-container-center__content-container">
                <h4 class="contacts-container-center-content-container__title">
                  Ready to Experience the Difference?
                </h4>

              </div>

            </div>

            <div class="contacts-container__right">
              <ul class="contacts-container__list">
                <li class="contacts-container-list__title">contacts</li>
                <li class="contacts-container-list__item">vk</li>
                <li class="contacts-container-list__item">tg</li>
                <li class="contacts-container-list__item">git</li>
              </ul>
            </div>
        </div>
    `

    const container = section.querySelector('.contacts-container-center__content-container');
    container.appendChild(createGlowLink({
        title: "Shop Now",
        onClick: {}
    }));

    return section;
}