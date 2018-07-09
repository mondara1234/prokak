

<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];

// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

//Applying User Login query with email and password match.
$Sql_Query = "select * from UserRegistrationTable where email = '$email' and password = '$password' ";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));


if(isset($check)){

    $SuccessLoginMsg = 'Data Matched';

    // Converting the message into JSON format.
    $SuccessLoginJson = json_encode($SuccessLoginMsg);

// Echo the message.
    echo $SuccessLoginJson ;

}

else{

    // If the record inserted successfully then show the message.
    $InvalidMSG = 'Invalid Username or Password Please Try Again' ;

// Converting the message into JSON format.
    $InvalidMSGJSon = json_encode($InvalidMSG);

// Echo the message.
    echo $InvalidMSGJSon ;

}

mysqli_close($con);
?>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

// Populate User email from JSON $obj array and store into $email.
$email = $obj['email'];

// Populate Password from JSON $obj array and store into $password.
$password = $obj['password'];

//Applying User Login query with email and password match.
$Sql_Query = "select * from UserRegistrationTable where email = '$email' and password = '$password' ";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));


if(isset($check)){

    $SuccessLoginMsg = 'Data Matched';

    // Converting the message into JSON format.
    $SuccessLoginJson = json_encode($SuccessLoginMsg);

// Echo the message.
    echo $SuccessLoginJson ;

}

else{

    // If the record inserted successfully then show the message.
    $InvalidMSG = 'Invalid Username or Password Please Try Again' ;

// Converting the message into JSON format.
    $InvalidMSGJSon = json_encode($InvalidMSG);

// Echo the message.
    echo $InvalidMSGJSon ;

}

mysqli_close($con);
?>
