<!DOCTYPE html>
<html dir='ltr' lang='fr'>

<head>
<title>Registration</title>
    <!-- faudra mettre un shortcut -->

    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0.0">

    <link rel="stylesheet" href="../style.css">
</head>

<body>
<h1 class="login-title">Registration</h1>
<?php
    require('db.php');
    $errors = [];
    // Lorsque le formulaire est soumis, insérer les valeurs dans la base de données.
    if (!empty($_REQUEST['username']) && !empty($_REQUEST['password']) && !empty($_REQUEST['email'])) {
        // Function qui remplacer tous les caractères spéciaux par une chaîne vide
        function deleteSpecialChar($str) {
            $username = str_replace( array( '%', '@', '/', '\'', ';', '<', '>' ), ' ', $str);

            return $username;
        }
        $str = $_REQUEST['username'];
        $username = deleteSpecialChar($str);     

        //escapes special characters in a string
        $username = mysqli_real_escape_string($con, $username);
        $email    = mysqli_real_escape_string($con, $_REQUEST['email']);
        $password = mysqli_real_escape_string($con, $_REQUEST['password']);
        $cpassword = mysqli_real_escape_string($con, $_REQUEST['cpassword']);
        $create_datetime = date("Y-m-d H:i:s");

        // Vérifie si la confirmation du mots de passe est juste
        if($password !== $cpassword) {
            $errors['password'] = 'Les mots de passe ne sont pas identiques!';
        }
        // Vérifie si l'adresse mail est déjà prise.
        $email_check = "SELECT * FROM `usertable` WHERE `email` = '$email'";
        $res = mysqli_query($con, $email_check);
        if(mysqli_num_rows($res) > 0){
            $errors['email'] = 'Cette adresse mail existe déjà!';
        }
        // Vérifie si le pseudo est déjà prit.
        $username_check = "SELECT * FROM `usertable` WHERE `username` = '$username'";
        $red = mysqli_query($con, $username_check);
        if(mysqli_num_rows($red) > 0){
            $errors['username'] = 'Ce pseudo existe déjà!';
        }
        // Si zero errors alors je fais :
        if(count($errors) === 0){
            $query    = "INSERT into `usertable` (username, password, email, create_datetime)
                     VALUES ('$username', '" . md5($password) . "', '$email', '$create_datetime')";
            $result   = mysqli_query($con, $query);
            if ($result) {
                echo ('sa marche');
            }
        }
    }
?>




    <?php
        if(count($errors) >= 1){
            ?>
                <div class="alert">
                    <?php
                    foreach($errors as $showerror){
                    ?>
                    <li><?php echo $showerror; ?></li>
                    <?php
                }
                    ?>
                </div>
            <?php
        }
    ?>

    <form class="form" action="" method="post">
        <input type="text" class="login-input" name="username" placeholder="Username" required />
        <input type="text" class="login-input" name="email" placeholder="Email Adress">
        <input type="password" class="login-input" name="password" placeholder="Password">
        <input type="password" class="login-input" name="cpassword" placeholder="Confirm password">
        <input type="submit" name="submit" value="Register" class="login-button">
        <p class="link"><a href="../">Click to Login</a></p>
    </form>
</body>
</html>