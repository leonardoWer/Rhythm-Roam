export function createTransitionSection() {
    const section = document.createElement('section');
    section.id = 'transitionSection';
    section.innerHTML = `
        <div class="transition-content-container">

            <div class="transition-img-container">
              <img src="img/hp-bg.png" alt="headphones-collection" class="transition-img">
            </div>

            <div class="pink-line">
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
              <div class="pink-line__item"></div>
            </div>
          </div>
    `

    return section;
}