<template>
  
   <div class="row loginPage">
      <div class="col-md-4">
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="bmd-label-floating" id ="label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter your username here!"
                />
              </div>
              <div class="form-group">
                <label for="pwd" class="bmd-label-floating" id ="label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password!"/>
              </div>
            </div>
              <center>
                <button type="button" class="btn btn-outline-success login-btn" id="login">Login</button>
                </center>
          </div>
        </div>
      </div>
    </div>
    </div>            
  
</template>
 <script>
//eslint-disable-next-line
/*eslint-disable*/
window.$ = require("jquery");
window.JQuery = require("jquery");
$(document).ready(function() {
  $("input").attr("required", true);
  // $("#email").prop('required', 'required');
  $("#login").click(function() {
    let input = $("#email").val();
    let pass = $("#password").val();
    $("#passw").attr({
      pattern: "[A-Za-z]{8,}",
      title: "This field is required"
    });
    if (input != "" && pass != "") {
      console.log($("#email").val());
      console.log($("#password").val());
    }
  });

  // $("#btnSignup").click(function(){
  //     $("#homepage").hide();
  //     $("#test").show();
  // })
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* body{
        background-image: url(http://www.sclance.com/backgrounds/key-background/key-background_1376694.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    } */
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
