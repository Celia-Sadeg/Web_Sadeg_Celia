<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page d'accueil</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Bienvenue sur notre site</h1>
        <?php if (isset($_SESSION['username'])): ?>
            <a href="dashboard.php">Tableau de bord</a>
            <a href="logout.php">Déconnexion</a>
        <?php else: ?>
            <a href="login.php">Connexion</a>
            <a href="register.php">Inscription</a>
        <?php endif; ?>
    </header>
    <main>
        <h2>Page d'accueil</h2>
        <p>Vous pouvez vous connecter ou vous inscrire pour accéder aux fonctionnalités du site.</p>
    </main>
</body>
</html>
