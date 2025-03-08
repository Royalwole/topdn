<?php
require_once 'config/database.php';

class PropertyController {
    public function getAllProperties() {
        global $conn;
        if (!$conn) {
            http_response_code(500);
            return ['error' => 'Database connection not established.'];
        }
        try {
            $stmt = $conn->prepare("SELECT * FROM properties");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            http_response_code(500);
            return ['error' => 'Failed to retrieve properties: ' . $e->getMessage()];
        }
    }

    public function getProperty($id) {
        global $conn;
        if (!$conn) {
            http_response_code(500);
            return ['error' => 'Database connection not established.'];
        }
        try {
            $stmt = $conn->prepare("SELECT * FROM properties WHERE id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            http_response_code(500);
            return ['error' => 'Failed to retrieve property: ' . $e->getMessage()];
        }
    }

    public function createProperty($data) {
        global $conn;
        if (!$conn) {
            http_response_code(500);
            return ['error' => 'Database connection not established.'];
        }

        // Validate incoming data
        if (empty($data['title']) || empty($data['description']) || empty($data['price'])) {
            http_response_code(400);
            return ['error' => 'Title, description, and price are required.'];
        }

        try {
            $stmt = $conn->prepare("INSERT INTO properties (title, description, price, address, city, state, bedrooms, bathrooms, area, type, status, agent_id, created_at, updated_at, image_urls) VALUES (:title, :description, :price, :address, :city, :state, :bedrooms, :bathrooms, :area, :type, :status, :agent_id, NOW(), NOW(), :image_urls)");
            $stmt->bindParam(':title', $data['title']);
            $stmt->bindParam(':description', $data['description']);
            $stmt->bindParam(':price', $data['price']);
            $stmt->bindParam(':address', $data['address']);
            $stmt->bindParam(':city', $data['city']);
            $stmt->bindParam(':state', $data['state']);
            $stmt->bindParam(':bedrooms', $data['bedrooms']);
            $stmt->bindParam(':bathrooms', $data['bathrooms']);
            $stmt->bindParam(':area', $data['area']);
            $stmt->bindParam(':type', $data['type']);
            $stmt->bindParam(':status', $data['status']);
            $stmt->bindParam(':agent_id', $data['agent_id']);
            $stmt->bindParam(':image_urls', implode(',', $data['imageUrls'])); // Store image URLs as a comma-separated string
            $stmt->execute();
            return ['message' => 'Property created successfully', 'id' => $conn->lastInsertId()];
        } catch (Exception $e) {
            http_response_code(500);
            return ['error' => 'Failed to create property: ' . $e->getMessage()];
        }
    }

    public function updateProperty($id, $data) {
        global $conn;
        if (!$conn) {
            http_response_code(500);
            return ['error' => 'Database connection not established.'];
        }

        // Validate incoming data
        if (empty($data['title']) || empty($data['description']) || empty($data['price'])) {
            http_response_code(400);
            return ['error' => 'Title, description, and price are required.'];
        }

        try {
            $stmt = $conn->prepare("UPDATE properties SET title = :title, description = :description, price = :price, address = :address, city = :city, state = :state, bedrooms = :bedrooms, bathrooms = :bathrooms, area = :area, type = :type, status = :status, agent_id = :agent_id, updated_at = NOW() WHERE id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':title', $data['title']);
            $stmt->bindParam(':description', $data['description']);
            $stmt->bindParam(':price', $data['price']);
            $stmt->bindParam(':address', $data['address']);
            $stmt->bindParam(':city', $data['city']);
            $stmt->bindParam(':state', $data['state']);
            $stmt->bindParam(':bedrooms', $data['bedrooms']);
            $stmt->bindParam(':bathrooms', $data['bathrooms']);
            $stmt->bindParam(':area', $data['area']);
            $stmt->bindParam(':type', $data['type']);
            $stmt->bindParam(':status', $data['status']);
            $stmt->bindParam(':agent_id', $data['agent_id']);
            $stmt->execute();
            return ['message' => 'Property updated successfully'];
        } catch (Exception $e) {
            http_response_code(500);
            return ['error' => 'Failed to update property: ' . $e->getMessage()];
        }
    }

    public function deleteProperty($id) {
        global $conn;
        if (!$conn) {
            http_response_code(500);
            return ['error' => 'Database connection not established.'];
        }
        try {
            $stmt = $conn->prepare("DELETE FROM properties WHERE id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return ['message' => 'Property deleted successfully'];
        } catch (Exception $e) {
            http_response_code(500);
            return ['error' => 'Failed to delete property: ' . $e->getMessage()];
        }
    }
}
?>
</create_file>
