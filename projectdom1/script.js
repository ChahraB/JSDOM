document.addEventListener("DOMContentLoaded", function () {
  // 1. RÉCUPÉRER TOUS LES BOUTONS

  var plusButtons = document.querySelectorAll(".fa-plus-circle"); // Boutons +
  var minusButtons = document.querySelectorAll(".fa-minus-circle"); // Boutons -
  var trashButtons = document.querySelectorAll(".fa-trash-alt"); // Poubelles
  var heartButtons = document.querySelectorAll(".fa-heart"); // Cœurs

  // Élément qui affiche le prix total
  var totalElement = document.querySelector(".total");

  // 2. FONCTION POUR CALCULER LE PRIX TOTAL

  function calculerTotal() {
    var total = 0;

    // Récupérer tous les produits
    var produits = document.querySelectorAll(".list-products > .card-body");

    for (var i = 0; i < produits.length; i++) {
      var produit = produits[i];

      var prixElement = produit.querySelector(".unit-price");
      var prixTexte = prixElement.textContent;
      var prixNombre = parseInt(prixTexte);

      // Trouver la quantité
      var quantiteElement = produit.querySelector(".quantity");
      var quantite = parseInt(quantiteElement.textContent);

      // Calculer : prix × quantité
      var sousTotal = prixNombre * quantite;

      // Ajouter au total général
      total = total + sousTotal;
    }

    totalElement.textContent = total + " $";
  }

  // 3. AJOUTER LES ÉVÉNEMENTS SUR LES BOUTONS +

  for (var i = 0; i < plusButtons.length; i++) {
    var bouton = plusButtons[i];

    bouton.addEventListener("click", function () {
      var quantiteElement = this.nextElementSibling;

      var valeurActuelle = parseInt(quantiteElement.textContent);
      var nouvelleValeur = valeurActuelle + 1;

      // Mettre à jour l'affichage
      quantiteElement.textContent = nouvelleValeur;

      // Recalculer le prix total
      calculerTotal();
    });
  }

  // 4. AJOUTER LES ÉVÉNEMENTS SUR LES BOUTONS -

  for (var i = 0; i < minusButtons.length; i++) {
    var bouton = minusButtons[i];

    bouton.addEventListener("click", function () {
      var quantiteElement = this.previousElementSibling;

      // Récupérer la valeur actuelle
      var valeurActuelle = parseInt(quantiteElement.textContent);

      if (valeurActuelle > 0) {
        var nouvelleValeur = valeurActuelle - 1;
        quantiteElement.textContent = nouvelleValeur;

        // Recalculer le prix total
        calculerTotal();
      }
    });
  }

  // 5. AJOUTER LES ÉVÉNEMENTS SUR LES POUBELLES

  for (var i = 0; i < trashButtons.length; i++) {
    var bouton = trashButtons[i];

    bouton.addEventListener("click", function () {
      var produit = this.closest(".list-products > .card-body");

      // Supprimer le produit de la page
      produit.remove();

      // Recalculer le prix total
      calculerTotal();
    });
  }

  // 6. AJOUTER LES ÉVÉNEMENTS SUR LES CŒURS

  for (var i = 0; i < heartButtons.length; i++) {
    var bouton = heartButtons[i];

    bouton.addEventListener("click", function () {
      // Vérifier la couleur actuelle
      var couleurActuelle = this.style.color;

      if (couleurActuelle === "red") {
        // Si rouge, on remet en noir
        this.style.color = "black";
      } else {
        // Sinon on met en rouge
        this.style.color = "red";
      }
    });
  }

  // 7. CALCULER LE TOTAL AU DÉMARRAGE

  calculerTotal();
});
