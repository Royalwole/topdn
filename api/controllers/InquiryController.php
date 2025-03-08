<?php
require_once 'config/database.php';

class InquiryController {
    public function getInquiriesByProperty($propertyId) {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM inquiries WHERE property_id = :property_id");
        $stmt->bindParam(':property_id', $propertyId);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Additional methods for creating and managing inquiries can be added here
}
?>
