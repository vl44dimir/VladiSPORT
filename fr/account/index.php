<?php
session_start();
require '../script/db_conn.php';
//include auth_session.php file on all user panel pages
include("auth.php");

$email = $_SESSION['email'] ?? '';
$request = "SELECT name, redirection
                FROM `user_programs` 
                INNER JOIN `programs` ON `user_programs`.`programs` = `programs`.`id`
                WHERE `email` = ?";
                // Recuperer tous les programmes que l'utilisateur possède
$ps = $conn->prepare($request);
$ps->execute([$email]);
$userPrograms = $ps->fetchAll(PDO::FETCH_ASSOC);


?>

<!DOCTYPE html>
<html dir='ltr' lang='fr'>

<head>
    <title>Profile - Client area</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0.0">

    <link rel="stylesheet" href="../style.css" />
</head>


<section class='homeBar'>
    <div class='burger-menu'>
        <div class='bars'>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
    
</section>

<section class='navBar'>
    <form class="form">
        <input id="search" type="text" class="input" placeholder="Rechercher"/>
        <button id="clear" class="clear-results"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/></svg></button>
    </form>
    <ul class='navList'>
        <li class='item'><a href='../'>Accueil</a></li>
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
    <form action='/fr/account/login?' class='navUserLogin' method='post' role='form'>
        <div class='inputGroup'>
            <label class='label' for='username'>Utilisateur/Email</label>
            <input class='input' type='text' id='username' name='Username'>
        </div>
        <div class='inputGroup'>
            <label class='label' for='username'>Mot de passe</label>
            <input class='input' type='password' id='password' name='Password'>
        </div>
        <button class='button' type='submit' name='login'>Connexion</button>
        <a class='forgotPassword' href='/fr/account/forgotpassword'>Mot de passe oublié ?</a>
    </form>
</section>


<body>
    <section class='accountSetting'>
        <div class='title'>Brand</div>
        <div class='accountPicture'>
            <img src='../image/pp.jpg' class='profil'>
            <img src='../image/defaultBanner.jpg' class='baniere'>
        </div>
        <div class='container'>
            <div class='part'>
                <h3>Profile Picture</h3>
                <p>JPEG, PNG, GIF and less than 10MB</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
        </div>
        <div class='container close'>
            <div class='part'>
                <h3>Profile Banner</h3>
                <p>Recommended 1200x480 and less<br>than 10MB</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
        </div>
        <div class='subTitle'>Customize you and your program's visual appearence <br>across Name.</div>
    </section>

    <section class='accountProfils'>
        <div class='title'>About</div>
        <div class='container debut'>
            <div class='part'>
                <h3>Bio</h3>
                <p>Who you are in fewer than 300 characters.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class='container'>
            <div class='part'>
                <h3>Username</h3>
                <p><?= $_SESSION['username']; ?></p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class='container close'>
            <div class='part'>
                <h3>Email</h3>
                <p><?= $_SESSION['email']; ?></p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
    </section>

    <section class='accountPrograms'>
        <div class='title'>YOUR PROGRAMS</div>
        <div class='container'>
            <div class='part'>
                <h3>Manage Your Programs</h3>
            </div>
            <div class='partDown' style='display: none'>
                <ul>
                    <?php $programsCount = 0; ?>
                    <?php foreach($userPrograms as $userProgram) { ?>
                        <li><a href="../programme/<?= $userProgram['redirection']?>"><?php echo $userProgram['name'] ?></a><li>
                        <?php $programsCount = $programsCount+1;?>
                    <?php } ?>
                </ul>
            </div>
        </div>
        <div class='subTitle'>Manage the <?= $programsCount ?> programs you own. You can delete them or change the days.</div>
    </section>

    <section class='accountLogout'>
        <h3>Name v0.11 (232511929371025080)</h3>
        <span><a href="logout.php">Log out</a></span>
    </section>

    <section class='vide'></section>

</body>
</html>

<script src='../script/search.js'></script>
<script src='../script/burger.js'></script>
<script src='../script/dropDown.js'></script>
<script src='../script/accountProgram.js'></script>