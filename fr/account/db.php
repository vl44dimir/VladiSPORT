<?php
    // Saisissez votre nom d'hôte, le nom d'utilisateur de la base de données, le mot de passe et le nom de la base de données.
    // Si vous n'avez pas défini le mot de passe de la base de données sur localhost, définissez-le comme vide.
    $con = mysqli_connect("localhost","nathan_nath","cacher","nathan_projet");
    // Check connection
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>