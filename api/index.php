<?php
require_once 'config/cors.php';
require_once 'config/database.php';
require_once 'controllers/PropertyController.php';
require_once 'controllers/UserController.php';
require_once 'controllers/InquiryController.php';

header("Content-Type: application/json");

$propertyController = new PropertyController();
$userController = new UserController();
$inquiryController = new InquiryController();

// Simple routing mechanism
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));

try {
    if ($requestUri[0] === 'properties') {
        if ($requestMethod === 'GET') {
            echo json_encode($propertyController->getAllProperties());
        } elseif ($requestMethod === 'POST') {
            $data = json_decode(file_get_contents("php://input"), true);
            if (empty($data['title']) || empty($data['description']) || empty($data['price'])) {
                http_response_code(400);
                echo json_encode(['message' => 'Title, description, and price are required.']);
                return;
            }
            echo json_encode($propertyController->createProperty($data));
        } elseif ($requestMethod === 'PUT' && isset($requestUri[1])) {
            $data = json_decode(file_get_contents("php://input"), true);
            if (empty($data['title']) || empty($data['description']) || empty($data['price'])) {
                http_response_code(400);
                echo json_encode(['message' => 'Title, description, and price are required.']);
                return;
            }
            echo json_encode($propertyController->updateProperty($requestUri[1], $data));
        } elseif ($requestMethod === 'DELETE' && isset($requestUri[1])) {
            echo json_encode($propertyController->deleteProperty($requestUri[1]));
        }
    } elseif ($requestUri[0] === 'upload' && $requestMethod === 'POST') {
        require_once 'upload.php'; // Include the upload handling logic
    } elseif ($requestUri[0] === 'users') {
        if ($requestMethod === 'GET' && isset($requestUri[1])) {
            echo json_encode($userController->getUser($requestUri[1]));
        }
    } elseif ($requestUri[0] === 'inquiries') {
        if ($requestMethod === 'GET' && isset($requestUri[1])) {
            echo json_encode($inquiryController->getInquiriesByProperty($requestUri[1]));
        }
    } else {
        http_response_code(404);
        echo json_encode(['message' => 'Not Found']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Server error: ' . $e->getMessage()]);
}
?>
