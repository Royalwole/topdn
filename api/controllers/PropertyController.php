<?php
require_once '../config/database.php';

class PropertyController {
    public function getAllProperties() {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM properties");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProperty($id) {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM properties WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Additional methods for creating, updating, and deleting properties can be added here
}
?>
