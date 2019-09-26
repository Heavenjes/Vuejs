<template>
 <div class="col-md-4">
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div class="form-group">
                <label for="name" class="bmd-label-floating" id ="label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter your username here!"
                />
              </div>
              <div class="form-group">
                <label for="email" class="bmd-label-floating" id ="label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password!"/>
              </div>
               <div class="form-group">
                <label for="passw" class="bmd-label-floating" id ="label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password!"/>
              </div>
               <div class="form-group">
                <label for="passw" class="bmd-label-floating" id ="label">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="cpassword"
                  placeholder="Enter your password!"/>
              </div>
            </div>
              <center>
                <button type="button" class="btn btn-outline-success login-btn" id="register">Register</button>
                </center>
          </div>
        </div>
      </div>
    </div>
    </div>            
  </template>
  <script>
$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
if (name == '' || email == '' || password == '' || cpassword == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
}

if(name != " " && email != " " && password != " " && cpassword != " "){
	console.log($("#name").val());
	console.log($("#email").val());
	console.log($("#password").val());
	console.log($("#cpassword").val());
}
 });
  });

</script>

<style scoped>
.card-header{
text-align: center;
font-size: 50px;
color:white;
}
hr{
margin-bottom: 30px;
}
.container{
width: 960px;
height: 610px;
margin:50px auto;
font-family: 'Droid Serif', serif;
position:relative;
padding-left: 400px;
padding-top:100px;
}
.card{
width: 520px;
float:left;
padding: 10px 55px 40px;
background-color: black;
border: 15px solid white;
box-shadow: 0 0 10px;
border-radius: 50px;
font-size: 13px;
}
input[type=text],[type=password] {
width: 97.7%;
height: 34px;
padding-left: 5px;
margin-bottom: 20px;
margin-top: 8px;
box-shadow: 0 0 5px #00F5FF;
border: 2px solid violet;
color: #4f4f4f;
font-size: 16px;
}
label{
color: white;
text-shadow: 0 1px 0 red;
font-size: 20px;
font-weight: bold;
}
#login {
font-size: 20px;
margin-top: 15px;
background: linear-gradient(#22abe9 5%, #36caf0 100%);
border: 1px solid #0F799E;
padding: 7px 35px;
color: white;
text-shadow: 0px 1px 0px #13506D;
font-weight: bold;
border-radius: 2px;
cursor: pointer;
width: 100%;
}
#login:hover{
background: linear-gradient(#36caf0 5%, #22abe9 100%);
}
</style>

