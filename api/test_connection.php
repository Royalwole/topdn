<?php
$host = 'localhost';
$db_name = 'topdialn_toppy';
$username = 'topdialn_toppy';
$password = '080@Topdialtechnical';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connection successful!";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
