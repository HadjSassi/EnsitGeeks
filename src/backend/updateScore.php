<?php

    require_once "api.php";
    $api=new Api();
    if($api->updtaeScore()){
        echo json_encode(["update"=>"success"]);

    }
    else{
        echo json_encode(["update"=>"failde"]);
    }