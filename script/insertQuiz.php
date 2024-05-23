<?php
session_start();
require_once __DIR__ . '/../loginWithGoogleAccount/dbConnection.php';

$quiz = $_GET['quiz'];
$list = json_decode($quiz);
$email = $_SESSION['email'];

if($list){
    $query = "INSERT INTO `quiz` (`email`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`) VALUES ('$email',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    $addPremium = $db_connection->prepare($query);
    $addPremium->bind_param("ssssssssssssssssssssss", $list[0], $list[1], $list[2], $list[3], $list[4], $list[5], $list[6], $list[7], $list[8], $list[9], $list[10], $list[11], $list[12], $list[13], $list[14], $list[15], $list[16], $list[17], $list[18], $list[19], $list[20], $list[21]);
    header('Location: ../quiz.php');
    if(!$addPremium->execute()){
        echo "Failed to insert premium.";
        exit;
    }
};

?>