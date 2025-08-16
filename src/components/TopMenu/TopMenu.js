import styles from "./TopMenu.module.css";

import gsap from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import logo from "/logo/logo-horizontal.svg";

export function createTopMenu() {
    const topMenu = document.createElement("nav");
    topMenu.classList.add(styles["top-menu"]);
    topMenu.innerHTML = `
        <div class="${styles['top-menu__left']}">
          <a href="#heroSection" class="${styles.logoWrapper}">
            <img src="${logo}" alt="logo" class="${styles.logo}"/>
          </a>
        </div>

        <div class="${styles['top-menu__right']}">
          <ul class="${styles['top-menu-list']}">
            <li class="${styles['top-menu-list__item']}">
                <a href="#aboutSection">
                    about
                </a>
            </li>
            <li class="${styles['top-menu-list__item']}">
                <a href="#benefitsSection">
                    benefits
                </a>
            </li>
            <li class="${styles['top-menu-list__item']}">
                <a href="#shopSection">
                    shop
                </a>
            </li>
            <li class="${styles['top-menu-list__item']}">
                <a href="#contactsSection">
                    contacts
                </a>
            </li>
          </ul>
        </div>
    `

    const topMenuItems = topMenu.querySelectorAll(`.${styles['top-menu-list__item']}`);
    const logoLink = topMenu.querySelector(`.${styles.logoWrapper}`);

    function setupSmoothScroll() {

        const handleClick = (link, e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: {
                        y: targetElement,
                    },
                    ease: "power3.inOut"
                });
            } else {
                console.warn(`Элемент с ID "${targetId}" не найден на странице.`);
            }
        }

        topMenuItems.forEach(item => {
            const link = item.querySelector('a');

            link.addEventListener("click", (e) => {
                handleClick(link, e);
            });
        });

        logoLink.addEventListener("click", (e) => handleClick(logoLink, e));
    }

    // Вызываем функцию, чтобы настроить скролл
    setupSmoothScroll();


    // Обработчик для подсветки активного пункта меню
    function highlightActiveMenuItem() {
        const sections = document.querySelectorAll('section[id]'); // Выбираем все section с id
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Убираем активный класс у всех элементов меню
                topMenuItems.forEach(item => item.classList.remove('active'));

                // Добавляем активный класс к соответствующему элементу меню
                const activeMenuItem = topMenu.querySelector(`a[href="#${sectionId}"]`);
                if (activeMenuItem) {
                    const li = activeMenuItem.parentElement;
                    li.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('load', highlightActiveMenuItem);
    window.addEventListener('scroll', highlightActiveMenuItem);

    return topMenu;
}