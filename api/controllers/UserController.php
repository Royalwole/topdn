<?php
require_once '../config/database.php';

class UserController {
    public function getUser($id) {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM users WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Additional methods for user registration, updating, and deleting users can be added here
}
?>
