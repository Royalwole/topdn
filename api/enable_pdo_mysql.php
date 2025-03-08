<?php
$phpIniPath = php_ini_loaded_file();
$fileContent = file_get_contents($phpIniPath);

// Enable PDO MySQL extension
$fileContent = preg_replace('/;extension=pdo_mysql/', 'extension=pdo_mysql', $fileContent);
file_put_contents($phpIniPath, $fileContent);

echo "PDO MySQL extension enabled. Please restart the PHP server.";
?>
