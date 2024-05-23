<?php
session_start();
require_once __DIR__ . '/../loginWithGoogleAccount/dbConnection.php';

$type = $_GET['type'];
$email = $_SESSION['email'];


if(empty($type)){
    // Champs vide, l\'utilisateur reste sans compte'
    echo "non account create";
  
} 
elseif ($type == "basic"){
    // Champs rempli avec "basic", l\'utilisateur passe en compte gratuit'
    echo "basic";
    $query = "UPDATE `users` SET `type`=? WHERE `email`='$email'";
    $addBasic = $db_connection->prepare($query);
    $basic = 'basic';
    $addBasic->bind_param("s", $basic);
    header('Location: ../basic');
    if(!$addBasic->execute()){
        echo "Failed to insert premium.";
        exit;
    }
}
elseif ($type == "premium"){
    // Champs rempli avec "premium", l\'utilisateur passe en compte premium'
    echo "premium";
    $query = "UPDATE `users` SET `type`=? WHERE `email`='$email'";
    $addPremium = $db_connection->prepare($query);
    $premium = 'premium';
    $addPremium->bind_param("s", $premium);
    header('Location: ../quiz');
    if(!$addPremium->execute()){
        echo "Failed to insert premium.";
        exit;
    }
};
?> 