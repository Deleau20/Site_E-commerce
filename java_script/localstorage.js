const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
event.preventDefault(); // Empêcher la soumission du formulaire
  
  // Récupérer les valeurs des champs du formulaire

  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const motdepasse = document.getElementById('motdepasse').value;
  
  // Stocker les valeurs dans le local storage

  localStorage.setItem('nom', nom);
  localStorage.setItem('prenom', prenom);
  localStorage.setItem('email', email);
  localStorage.setItem('motdepasse', motdepasse);
  
  // Rediriger l'utilisateur vers une autre page ou afficher un message de confirmation
  alert('Le formulaire a été soumis avec succès !');
  window.location.href = "../html/connexion.html"
});
