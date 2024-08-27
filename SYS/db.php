<?php
$host = 'localhost';
$dbname = 'my_database';
$username = 'root';  // Remplacez par votre nom d'utilisateur MySQL
$password = '';      // Remplacez par votre mot de passe MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Échec de la connexion : " . $e->getMessage());
}
?>
