<template>
  <div>
     <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <a class="navbar-brand" href="#">Katana</a>
                  </div>
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                  </ul>
                  <form class="navbar-form navbar-left" action="/action_page.php">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search" name="search">
                      <div class="input-group-btn">
                        <button class="btn btn-default" type="submit">
                          <i class="glyphicon glyphicon-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </nav>
              
<div class="login-form">
    <form action="#" >
        <h2 class="text-center">LogIn Page</h2>   
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="email" class="form-control" name="username" placeholder="Email Address" required="required">             
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" class="form-control" name="password" placeholder="Password" required="required">             
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-primary login-btn btn-block"><a href="#">Log In</a></button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>
        <div class="or-seperator"><i>or</i></div>
        <p class="text-center">Login with your social media account</p>
        <div class="text-center social-btn">
            <a href="#" class="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
            <a href="#" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
            <a href="#" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
        </div>
    </form>
      </div>
    </nav>
    <h1 class="text-primary">Login using VueJs</h1>
    <div class="row loginPage">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="container">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="bmd-label-floating">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="uname"
                  placeholder="Enter your username here!"
                />
              </div>
              <div class="form-group">
                <label for="pwd" class="bmd-label-floating">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passw"
                  placeholder="Enter your password!"
                />
              </div>
              <center>
                <button type="button" class="btn btn-outline-success login-btn" id="btnLogin">Login</button>
                
                <!-- <input type = "login" class = "form -control" id = "login" value = "Login" v-on:> -->
              </center>
            </div>
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
  $("#btnLogin").click(function() {
    let input = $("#uname").val();
    let pass = $("#passw").val();
    $("#passw").attr({
      pattern: "[A-Za-z]{8,}",
      title: "This field is required"
    });
    if (input != "" && pass != "") {
      console.log($("#uname").val());
      console.log($("#passw").val());
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
.card {
  background-color: black;
  margin-top: 40px;
}
  

.h3 {
  margin-left: 500px;
  margin-top: 300px;
  font-size: 40px;
  font-family: Times new;
}
.nav {
  margin-block: auto;
}
</style>
