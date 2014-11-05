<?php 
$errors = '';
if(empty($_POST['Email']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name']; 
$surname = $_POST['surname']; 
$email_address = $_POST['email']; 
$company = $_POST['company']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = 'info@smglobaltech.co.za';
	$email_subject = "Contact form submission from SM Global Tech: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Surname: $surname \n Email: $email_address \n Company: $company  \n Message \n $message"; 
	
	$headers = "From: $to\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thanks.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
