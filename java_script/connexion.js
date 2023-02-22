// Récupérer les valeurs des champs du formulaire

const email = document.getElementById('email').value;
const motdepasse = document.getElementById('motdepasse').value;

// Récupérer lGes valeurs stockées dans le local storage

const emailEnregistre = localStorage.getItem('email');
const motdepasseEnregistre = localStorage.getItem('motdepasse');

// Vérifier les informations de connexion

if (email === emailEnregistre && motdepasse === motdepasseEnregistre) {
  // Les informations de connexion sont valides, rediriger l'utilisateur vers la page d'accueil ou afficher un message de bienvenue
  window.location.href = "../html/index.html";
} 
else {
  // Les informations de connexion sont invalides, afficher un message d'erreur
  alert('Email ou mot de passe incorrect.');
}
