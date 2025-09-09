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


// ---- load header and footer ----

function loadHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Erreur chargement HTML :", err));
}

// Charger le header et le footer
loadHTML('header', '/japan_guide_website/partials/header.html');
loadHTML('footer', '/japan_guide_website/partials/footer.html');



// ---- Popup de don avant téléchargement du guide ----

document.getElementById("downloadBtn").addEventListener("click", function(e) {
  e.preventDefault(); // empêche le téléchargement direct
  document.getElementById("donationPopup").style.display = "flex";
});

// Bouton "Oui"
document.getElementById("donateYes").addEventListener("click", function() {
  // Redirection vers la page de don
  window.open("https://streamelements.com/niveks02/tip", "_blank");
  // Téléchargement du PDF ensuite
  window.location.href = "../docs/Guide_Japon_v2.pdf";
  document.getElementById("donationPopup").style.display = "none";
});

// Bouton "Non"
document.getElementById("donateNo").addEventListener("click", function() {
  // Téléchargement direct
  window.location.href = "../docs/Guide_Japon_v2.pdf";
  document.getElementById("donationPopup").style.display = "none";
});