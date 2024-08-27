<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de Bord</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Tableau de Bord</h1>
        <a href="logout.php">Déconnexion</a>
    </header>
    <main>
        <h2>Bienvenue, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
        <p>Vous êtes maintenant connecté. Voici le contenu réservé aux utilisateurs connectés.</p>
    </main>
</body>
</html>
