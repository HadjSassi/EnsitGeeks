<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: https://www.ensitgeeksclub.com");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
// Include the configuration file
require_once 'config.php';

try {
    // Create a PDO instance
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);

    // Set PDO attributes
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get the 'id' parameter from the query string
    $id = $_GET['id'];

    // Prepare and execute the query
    $query = "SELECT * FROM geekstore WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    // Fetch the result as an associative array
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Output the JSON representation of the result
    header('Content-Type: application/json');
    echo json_encode($result);
} catch (PDOException $e) {
    // Handle database connection errors
    echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
}
?>
