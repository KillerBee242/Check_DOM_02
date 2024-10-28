document.addEventListener('DOMContentLoaded', function(){
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }

    // Déclencher l'événement de clic sur le bouton
    changeColorBtn.addEventListener('click', function(){
        // Changer la couleur de la boîte
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;

        // Assombrir temporairement le bouton
        const originalColor = changeColorBtn.style.backgroundColor;
        changeColorBtn.style.backgroundColor = '#d3d3d3'; // Couleur plus sombre

        // Rétablir la couleur d'origine après 200 millisecondes
        setTimeout(() => {
            changeColorBtn.style.backgroundColor = originalColor;
        }, 200);
    });
});