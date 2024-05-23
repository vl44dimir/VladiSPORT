<?php
session_start();

if(!isset($_SESSION['token'])){
  header('Location: index.php');
  exit;
}

require_once __DIR__ . '/loginWithGoogleAccount/config.php';
$client = new Google\Client();
$client->setAccessToken($_SESSION['token']);
# Révoquer le jeton d'accès google
$client->revokeToken();

# Suppression de la session que nous avons stockée
$_SESSION = array();

if (ini_get("session.use_cookies")) {
  $params = session_get_cookie_params();
  setcookie(session_name(), '', time() - 42000,
      $params["path"], $params["domain"],
      $params["secure"], $params["httponly"]
  );
}

session_destroy();
header("Location: index.php");
exit;