<?php
require_once 'config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $targetDir = "uploads/properties/";
    $imageUrls = [];

    // Ensure the target directory exists
    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    foreach ($_FILES['images']['name'] as $key => $name) {
        $targetFile = $targetDir . basename($name);
        $uploadOk = 1;

        // Check file size
        if ($_FILES['images']['size'][$key] > 2000000) {
            $uploadOk = 0;
            $imageUrls[] = ['error' => "File $name is too large."];
        }

        // Check file type
        $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
        $allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];
        if (!in_array($fileType, $allowedTypes)) {
            $uploadOk = 0;
            $imageUrls[] = ['error' => "File $name is not a valid image type."];
        }

        // Check if file already exists
        if (file_exists($targetFile)) {
            $uploadOk = 0;
            $imageUrls[] = ['error' => "File $name already exists."];
        }

        // Attempt to upload the file
        if ($uploadOk === 1) {
            if (move_uploaded_file($_FILES['images']['tmp_name'][$key], $targetFile)) {
                $imageUrls[] = $targetFile; // Store the file path
            } else {
                $imageUrls[] = ['error' => "Error uploading file $name."];
            }
        }
    }

    echo json_encode(['imageUrls' => $imageUrls]);
}
?>
