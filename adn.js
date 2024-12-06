// Charger le fichier texte
fetch('adn.txt')
.then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier');
        }
        return response.text(); // Lire le fichier en tant que texte
})
.catch(error => {
    console.error('Erreur:', error);
});