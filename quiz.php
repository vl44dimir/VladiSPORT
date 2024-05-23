<?php
session_start();
if(!isset($_SESSION['token'])){
  header('Location: index.php');
  exit;
}
require_once __DIR__ . '/loginWithGoogleAccount/config.php';
require_once __DIR__ . '/loginWithGoogleAccount/dbConnection.php';


$client->setAccessToken($_SESSION['token']);

if($client->isAccessTokenExpired()){
  header('Location: logout.php');
  exit;
}
$google_oauth = new Google_Service_Oauth2($client);
$user_info = $google_oauth->userinfo->get();
?>

<!DOCTYPE html>
<html lang="fr" dir="ltr">

<head>
  <!-- HEADER -->
  <title>vladiTOK</title>
  <link rel="shortcut icon" type="image/png" href="img/logo/logo.ico"/>

  <!-- META -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0.0">

  <!-- CSS -->
  <link rel="stylesheet" href="style.css">
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
</head>
<?php 
  #Vérifier si le quiz à déjà étais réaliser par l'user
  $email = $_SESSION['email'];

  $checkQuiz = $db_connection->prepare("SELECT `email` FROM `quiz` WHERE `email`=?");
  $checkQuiz->bind_param("s", $email);
  $checkQuiz->execute();
  $checkQuiz->store_result();

  if($checkQuiz->num_rows !== 0){
    header('Location: ../premium');
  }
?>
    <body>
      <section id="quiz">
        <div class="container">

            <div class="mm-survey-results">
                <div class="mm-survey-results-container">
                    <p class="mm-survey-results-score">Great job! Thanks for submitting a quote to WebDevlopr, you should be receiving an email soon.</p>
                    <ul class="mm-survey-results-list"></ul>
                </div>
                <div class="mm-survey-results-controller">
                    <div class="mm-back-btn">
                        <button>Back</button>
                    </div>
                </div>
            </div>

            <div class="mm-survey-container"></div>
            <div class="quizController">
                <div class="nextBtn">
                    <button>Next</button>
                </div>
                <div class="finishBtn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </section>
    </body>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="/script/quiz.js"></script>

</html