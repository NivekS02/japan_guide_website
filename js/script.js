// ---- Menu hamburger ----
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// ouvre/ferme le menu principal
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ouvre/ferme les sous-menus
const deroulants = document.querySelectorAll('.deroulant > a');

deroulants.forEach(link => {
  link.addEventListener('click', (e) => {
    const parentLi = link.parentElement;
    
    // Empêche le lien de naviguer
    e.preventDefault();

    // Ferme les autres sous-menus
    deroulants.forEach(l => {
      if(l !== link) l.parentElement.classList.remove('open');
    });

    // Ouvre ou ferme le sous-menu cliqué
    parentLi.classList.toggle('open');
  });
});

// ---- Bouton “remonter en haut” ----
const backToTop = document.getElementById("backToTop");
let hideTimeout;

function showButton() {
  backToTop.classList.add("show");
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    backToTop.classList.remove("show");
  }, 3000);
}

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    showButton();
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
