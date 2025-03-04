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

if ($requestUri[0] === 'properties') {
    if ($requestMethod === 'GET') {
        echo json_encode($propertyController->getAllProperties());
    }
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
?>
