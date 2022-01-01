<?php

  function CreateDBConnection() {
    require_once ('credantials.php');

    $conn = new mysqli($sqlName,  $strUserName, $strPassword, $sqlBase);

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    if (!$conn->set_charset("utf8")) {
      exit();
    }

    return $conn;
  }    
?>