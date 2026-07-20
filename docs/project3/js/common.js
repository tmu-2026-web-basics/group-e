// ハンバーガーメニューの開閉
const menu = document.getElementById("menu-overlay");
const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");

if (menu && openBtn && closeBtn) {
    const openMenu = () => {
        menu.setAttribute("aria-hidden", "false");
        openBtn.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        menu.setAttribute("aria-hidden", "true");
        openBtn.setAttribute("aria-expanded", "false");
    };

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    menu.addEventListener("click", (event) => {
        if (event.target === menu) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
