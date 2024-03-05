<?php session_start(); ?>
<?php require ('account/db.php'); ?>

<!DOCTYPE html>
<html dir='ltr' lang='fr'>

<head>
    <title>ProjetSecret</title>
    <!-- faudra mettre un shortcut -->

    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0.0">

    <link rel="stylesheet" href="style.css">
</head>

<section class='homeBar'>
    <div class='burger-menu'>
        <div class='bars'>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
    <?php if($_SESSION['username']) {?>
        <div class='profil'>
            <a href='account'><span>Profile</span></a>
        </div>
    <?php } else { ?>
        <div class='login'>
            <span>Connexion</span>
        </div>
    <?php } ?>
</section>

<section class='banner'>
    <img src='image/home.jpg'>
</section>

<section class='navBar'>
    <form class="form">
        <input id="search" type="text" class="input" placeholder="Rechercher"/>
        <button id="clear" class="clear-results"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/></svg></button>
    </form>
    <ul class='navList'>
        <li class='item'><a href='#'>Nouveautés</a></li>
        <li class='item dropDown'>
            <a href='#'>Programmes</a>
            <button class='dropDownButton' type='button'></button>

            <div class='navDropDown' style='display: none'>
                <ul class='dropDownList' style='opacity: 0'>
                    <li>Musculations en salle</li>
                    <li>Poids du corps</li>
                    <li>Autres</li>
                </ul>
            </div>
        </li>
        <li class='item dropDown'>
            <a href='#'>Articles</a>
            <button class='dropDownButton dropDownButtonSecond' type='button'></button>

            <div class='navDropDown navDropDownSecond' style='display: none'>
                <ul class='dropDownList dropDownListSecond' style='opacity: 0'>
                    <li>Entrainements</li>
                    <li>Nutrition</li>
                </ul>
            </div>
        </li>
        <li class='item'><a href='#'>Actualité</a></li>
        <li class='item'><a href='#'>Communauté</a></li>
        <li class='item'><a href='#'>Nos offres</a></li>
        <li class='item'><a href='#'>Boutique</a></li>
    </ul>   

    <ul class='navSocial'>
        <li class='social'>
            <a class='socialLink' href='https://www.facebook.com'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
        </li>
        <li class='social'>
            <a class='socialLink' href='https://www.facebook.com'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
        </li>
    </ul>

    <div class='hprecommend'>
        <span>Séances populaires</span>
        <ul class='commendList'>
            <li class='item'><a href='fr/catalogue/show/sword-art-online'>SWORD ARD ONLINE</a></li>
            <li class='item'><a href='fr/catalogue/show/demon-slayer-kimetsu-no-yaiba'>DEMON SLAYER:KIMNETSU NO YAIBA</a></li>
        </ul>
    </div>
</section>

<section class='navLogin'>

<?php
    // When form submitted, check and create user session.
    if (isset($_POST['username'])) {
        $username = stripslashes($_REQUEST['username']);    // removes backslashes
        $username = mysqli_real_escape_string($con, $username);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $password);
        // Check user is exist in the database
        $query    = "SELECT * FROM `usertable` WHERE (username='$username' OR email='$username')
                     AND password='" . md5($password) . "'";
        $result = mysqli_query($con, $query) or die(mysql_error());
        $rows = mysqli_num_rows($result);
        if ($rows == 1) {
            $fetch = mysqli_fetch_assoc($result);
            $_SESSION['username'] = $fetch['username'];
            $_SESSION['email'] = $fetch['email'];
            // Redirect to user dashboard page
            header("Location: ../fr");
        } else {
            echo "<div class='form' style='color: #fff'>
                  <h3>Incorrect Username/password.</h3>
                  </div>";
        }
    } else {
?>
    <form class='navUserLogin' method='post' role='form' name='login'>
        <div class='inputGroup'>
            <label class='label' for='username'>Utilisateur/Email</label>
            <input class='input' type='text' id='username' name='username' autofocus='true'>
        </div>
        <div class='inputGroup'>
            <label class='label' for='username'>Mot de passe</label>
            <input class='input' type='password' id='password' name='password'>
        </div>
        <button class='button' type='submit' name='login'>Connexion</button>
        <a class='forgotPassword' href='/fr/account/forgotpassword'>Mot de passe oublié ?</a>
        <a class='forgotPassword' href='/fr/account/register.php'>Crée un compte?</a>
    </form>
<?php
    }
?>
</section>

<section class='siteTitle'>
    
    <div class="results-container">
       <ul class="results-list" id="list">

       </ul>
    </div>
</section>

<script src='script/search.js'></script>
<script src='script/burger.js'></script>
<script src='script/dropDown.js'></script>