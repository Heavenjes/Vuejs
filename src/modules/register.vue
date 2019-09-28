<template>
<div class="row loginPage">
    <div class="col-md-4"></div>
    <div class="col-md-4">
        <div class="container">
            <div class="card">
                <center>
                    <div class="card-header">LOGIN</div>
                </center>
                <div class="card-body">
                    <div class="form-group">
                        <label for="username" class="bmd-label-floating">Username</label>
                        <input type="text" class="form-control" id="uname" placeholder="Enter username..." />
                    </div>
                    <div class="form-group">
                        <label for="email" class="bmd-label-floating">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email address..." />
                    </div>
                    <div class="form-group">
                        <label for="passw" class="bmd-label-floating">Password</label>
                        <input type="password" class="form-control" id="pass" placeholder="Enter password..." />
                    </div>
                    <div class="form-group">
                        <label for="cpassw" class="bmd-label-floating">Confirm Password</label>
                        <input type="password" class="form-control" id="cpass" placeholder="Enter password ..." />
                    </div>
                    <center>
                        <button type="button" class="btn btn-outline-success login-btn" id="login">Login</button>

                        <!-- <input type = "login" class = "form -control" id = "login" value = "Login" v-on:> -->
                    </center>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// $(document).ready(function () {
//     $("#register").click(function () {
//         var name = $("#name").val();
//         var email = $("#email").val();
//         var password = $("#password").val();
//         var cpassword = $("#cpassword").val();
//         if (name == '' || email == '' || password == '' || cpassword == '') {
//             alert("Please fill all fields...!!!!!!");
//         } else if ((password.length) < 8) {
//             alert("Password should atleast 8 character in length...!!!!!!");
//         } else if (!(password).match(cpassword)) {
//             alert("Your passwords don't match. Try again?");
//         }
//         if (name != " " && email != " " && password != " " && cpassword != " ") {
//             console.log($("#name").val());
//             console.log($("#email").val());
//             console.log($("#password").val());
//             console.log($("#cpassword").val());
//         }
//     });
// });
</script>

<style scoped>
.container {
    width: 400px;
    height: 210px;
    margin: 50px auto;
    font-family: 'Droid Serif', serif;
    position: relative;

}

.card-header {
    background-color: aqua;
    color: white;
    font-size: 30px;
}

input[type=text],
[type=password] {
    width: 97.7%;
    height: 34px;
    padding-left: 5px;
    margin-bottom: 20px;
    margin-top: 8px;
    box-shadow: 0 0 5px #00F5FF;
    border: 2px solid violet;
    color: white;
    font-size: 16px;
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

#login:hover {
    background: linear-gradient(#36caf0 5%, #22abe9 100%);
}

.card-body {
    background-color: black;
    color: white;
    font-size: 20px;
}
</style>
