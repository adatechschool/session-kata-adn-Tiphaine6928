// Charger le fichier texte
fetch('adn.txt')
  .then(response => response.text())
  .then(data => {
    // Supprimer les éventuels espaces ou retours à la ligne
    const sequence = data.replace(/\s+/g, '').trim();

    // Découper la chaîne en groupes de 3 caractères
    const triplets = [];
    for (let i = 0; i < sequence.length; i += 3) {
      triplets.push(sequence.slice(i, i + 3));
    }

    // Afficher les triplets dans la console
    console.log(triplets);

    // Afficher les triplets dans la page web
    document.getElementById('output').textContent = triplets.join('\n');
  })
  .catch(error => {
    console.error('Erreur de chargement ou de traitement du fichier :', error);
  });



