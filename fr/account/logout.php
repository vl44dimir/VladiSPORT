<?php
    session_start();
    // Destroy session
    if(session_destroy()) {
        // Ramene à la page d'accueil
        header("Location: ../../");
    }
?>