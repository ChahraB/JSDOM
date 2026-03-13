document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    // (FFFFFF en hexa)
    let nombre = Math.floor(Math.random() * 16777216);

    // hexadécimal
    let hexa = nombre.toString(16);

    while (hexa.length < 6) {
      hexa = "0" + hexa;
    }

    return "#" + hexa;
  }

  // Ajout de l'écouteur d'événement sur le bouton
  changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
