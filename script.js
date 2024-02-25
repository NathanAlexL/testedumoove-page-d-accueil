document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour valider l'adresse e-mail
    function validerEmail(email) {
        // Expression régulière pour valider l'adresse e-mail
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Fonction pour valider le mot de passe
    function validerMotDePasse(password) {
        // Vous pouvez ajouter vos propres règles de validation pour le mot de passe
        return password.length >= 6; // Exemple : Le mot de passe doit avoir au moins 6 caractères
    }

    // Fonction pour valider le nom d'utilisateur
    function validerNomUtilisateur(username) {
        // Vous pouvez ajouter vos propres règles de validation pour le nom d'utilisateur
        return username.length >= 3; // Exemple : Le nom d'utilisateur doit avoir au moins 3 caractères
    }

    // Gestionnaire d'événement pour le formulaire de connexion
    var formConnexion = document.getElementById("form-connexion");
    if (formConnexion) {
        formConnexion.addEventListener("submit", function(event) {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Valider l'adresse e-mail et le mot de passe
            if (!validerEmail(email)) {
                alert("Veuillez saisir une adresse e-mail valide.");
                event.preventDefault();
                return;
            }

            if (!validerMotDePasse(password)) {
                alert("Le mot de passe doit avoir au moins 6 caractères.");
                event.preventDefault();
                return;
            }
        });
    }

    // Gestionnaire d'événement pour le formulaire de création de compte
    var formInscription = document.getElementById("form-inscription");
    if (formInscription) {
        formInscription.addEventListener("submit", function(event) {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var username = document.getElementById("username").value;

            // Valider l'adresse e-mail, le mot de passe et le nom d'utilisateur
            if (!validerEmail(email)) {
                alert("Veuillez saisir une adresse e-mail valide.");
                event.preventDefault();
                return;
            }

            if (!validerMotDePasse(password)) {
                alert("Le mot de passe doit avoir au moins 6 caractères.");
                event.preventDefault();
                return;
            }

            if (!validerNomUtilisateur(username)) {
                alert("Le nom d'utilisateur doit avoir au moins 3 caractères.");
                event.preventDefault();
                return;
            }
        });
    }
});
