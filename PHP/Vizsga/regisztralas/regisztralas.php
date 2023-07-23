<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8"/>  
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="regisztralas.css" />
    <link rel="stylesheet" type='text/css' href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
</head>
<body class="form-body">
  <div class="form-box">
    <h1>Registration</h1>
    <form method="get" action="#" id="sampleForm">
    <hr>
    <label id="icon" for="name"><i class="fa fa-user fa-fw"></i></label>
    <input type="text" name="name" id="name" placeholder="Name" />
    <label id="icon" for="email"><i class="fa fa-phone fa-fw"></i></label>
    <input type="text" name="phone" id="phone" placeholder="Phone" />
    <label id="icon" for="email"><i class="fa fa-envelope fa-fw"></i></label>
    <input type="text" name="email" id="email" placeholder="Email" />    
    <label id="icon" for="pass"><i class="fa fa-key fa-fw"></i></label>
    <input type="password" name="pass" id="pass" placeholder="Password" />
    <label id="icon" for="pass"><i class="fas fa-calendar-alt"></i></label>
    <input type="calender" name="calender" id="calender" placeholder="Calender" />
    <label id="icon" for=""><i class="fa fa-key fa-fw"></i></label>
    <input type="" name="" id="" placeholder="" />
    <label id="icon" for=""><i class="fa fa-key fa-fw"></i></label>
    <input type="" name="" id="" placeholder="" />
    <button type="submit" ><i class="fa fa-reply fa-fw"></i> Register</button> 

    
    </form>
  </div>
  
  <div id="errors" class="visible"></div>      
  <script type="text/javascript" language="javascript" src="regisztralas.js"></script>
</body>
</html>