<?php
$host = 'localhost'; // Database host
$db_name = 'topdialn_toppy'; // Database name
$username = 'topdialn_toppy'; // Database username
$password = '080@Topdialtechnical'; // Database password

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
