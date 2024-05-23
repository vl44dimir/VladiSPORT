<?php
// Database connection
$db_host = '217.160.103.27';
$db_user = 'nathan_vlad';
$db_password = '9&rblM*L1Hzldck9';
$db_name = 'nathan_vladitok';

$db_connection = new mysqli($db_host, $db_user, $db_password, $db_name);

// CHECK DATABASE CONNECTION
if($db_connection->error){
    echo "Connection Failed - ".$db_connection->connect_error;
    exit;
}