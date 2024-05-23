<?php
require_once __DIR__ . '/../vendor/autoload.php';

# Add your client ID and Secret
$client_id = "517830919337-5k32b68h0cn6mah4dbi2jn95hmsubi2k.apps.googleusercontent.com";
$client_secret = "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";

$client = new Google\Client();
$client->setClientId($client_id);
$client->setClientSecret($client_secret);

# redirection location is the path to login.php
$redirect_uri = 'https://wizardly-hodgkin.217-160-103-27.plesk.page/loginWithGoogleAccount/break.php';
$client->setRedirectUri($redirect_uri);
$client->addScope("email");
$client->addScope("profile");

// https://console.cloud.google.com/apis/credentials/oauthclient/517830919337-5k32b68h0cn6mah4dbi2jn95hmsubi2k.apps.googleusercontent.com?project=vladitok