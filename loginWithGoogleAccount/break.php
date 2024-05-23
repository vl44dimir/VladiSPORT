<?php
session_start();
require_once __DIR__ . '/config.php';
/* 
 * Après avoir obtenu l'autorisation de l'utilisateur,
 * Google redirigera l'utilisateur vers le fichier test.php avec le paramètre de requête "code".
*/
if (isset($_GET['code'])):

    session_start();
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    if(isset($token['error'])){
      exit;
    }
    $_SESSION['token'] = $token;

/* -- Insérer les données de l'utilisateur dans la base de données -- */

  # Récupérer les données de l'utilisateur à partir du compte google
    $client->setAccessToken($token);
    $google_oauth = new Google_Service_Oauth2($client);
    $user_info = $google_oauth->userinfo->get();
  
    $google_id = trim($user_info['id']);
    $f_name = trim($user_info['given_name']);
    $l_name = trim($user_info['family_name']);
    $email = trim($user_info['email']);
    $gender = trim($user_info['gender']);
    $local = trim($user_info['local']);
    $picture = trim($user_info['picture']);
  
    # Ajoute le mail & la pp en session 
    $_SESSION['email'] = $email;
    $_SESSION['picture'] = $picture;
    $_SESSION['name'] = $f_name;
    # Database connection
    require_once __DIR__ . '/dbConnection.php';

    # Vérifier si l'email existe déjà dans notre base de données.
    $check_email = $db_connection->prepare("SELECT `email` FROM `users` WHERE `email`=?");
    $check_email->bind_param("s", $email);
    $check_email->execute();
    $check_email->store_result();

  if($check_email->num_rows === 0){
    # Insertion du nouvel utilisateur dans la base de données
    $query_template = "INSERT INTO `users` (`oauth_uid`, `first_name`, `last_name`,`email`,`profile_pic`,`gender`,`local`) VALUES (?,?,?,?,?,?,?)";
    $insert_stmt = $db_connection->prepare($query_template);
    $insert_stmt->bind_param("sssssss", $google_id, $f_name, $l_name, $email, $gender, $local, $picture);
    if(!$insert_stmt->execute()){
      echo "Failed to insert user.";
      exit;
    }
  }
  
  endif;
?>
<script>
  window.opener.location.reload(true);
  window.close();
</script>