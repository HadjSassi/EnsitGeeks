<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: https://www.ensitgeeksclub.com");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// Include the configuration file
require_once 'config.php';

try {
    // Create a PDO instance
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);

    // Set PDO attributes
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare and execute the query
    $query = "select * from geekstore order by date desc";
    $stmt = $pdo->query($query);

    // Fetch the results as objects
    $objects = $stmt->fetchAll(PDO::FETCH_OBJ);

    // Output the JSON representation of the objects
    header('Content-Type: application/json');
    echo json_encode($objects);
} catch (PDOException $e) {
    // Handle database connection errors
    echo "Error: " . $e->getMessage();
}
?>
