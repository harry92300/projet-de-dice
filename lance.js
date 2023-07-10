function lancerDe(joueur) {
    var resultat = Math.floor(Math.random() * 6) + 1;
    var resultatSpan = document.getElementById("de" + joueur);
    resultatSpan.src = "dé" + resultat + ".png";
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    lancerDe(1);
    lancerDe(2);
  });