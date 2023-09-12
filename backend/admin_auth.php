<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: *');

header("Access-Control-Allow-Headers: *");
$host="ensitgsgeeks.mysql.db";
    $user="ensitgsgeeks";
    $password="21128038AbcD";

try {
    $conn = new PDO("mysql:host=$host;dbname=ensitgsgeeks", $user, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

  $coord= json_decode(file_get_contents('php://input'),true);

  // echo json_encode(["response"=>$coord['email']]);
//   http_response_code(200);


    
        $sql ="select * from admin WHERE email = '".$coord['email']."';";
        
 //$sql ="select * from admin;";
$data= [];
 $i=0;
          foreach  ($conn->query($sql) as $row) {
              $data[$i]['email']=  $row['email'] ;

          }
          echo json_encode($data);
?>
			