<?php

    require_once "api.php";
    $api=new Api();
    echo json_encode($api->sendMailsForManyPeople());
    