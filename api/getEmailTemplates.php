<?php

 require_once ('helpers/funcDBConnection.php');

 $conn = CreateDBConnection();

 $out = array('error' => false);

 $crud = 'read';

 if(isset($_GET['apropos22_is'])){
	 $crud = $_GET['apropos22_is'];
 }


 if($crud = 'read'){
	 $sqlTemplates = "select * from admin_email_templates";
	 $queryTemplates = $conn->query($sqlTemplates);
	 $templates = array();
	 while($row = $queryTemplates->fetch_assoc()){
		$row['content'] = html_entity_decode(htmlspecialchars_decode($row['content']));
		array_push($templates, $row);
	 }
	 $out['templates'] = $templates;
 }


 $conn->close();

 header("Content-type: application/json");
 echo json_encode($out);
 die();
 ?>
