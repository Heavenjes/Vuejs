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
              <label for="username" class="bmd-label-floating">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
                placeholder="Enter email address..."
              >
            </div>
            <div class="form-group">
              <label for="pwd" class="bmd-label-floating">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="form.password"
                placeholder="Enter password..."
              >
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
import AUTH from "services/auth";
export default {
  data() {
    return {
      auth: AUTH,
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      AUTH.login(this.form.email, this.form.password);
    },
    onReset(e) {
      e.preventDefault();
      this.form.email = "";
      this.form.password = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* body{
        background-image: url(http://www.sclance.com/backgrounds/key-background/key-background_1376694.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    } */

.container {
  width: 400px;
  height: 210px;
  margin: 50px auto;
  font-family: "Droid Serif", serif;
  position: relative;
}

.card-header {
  background-color: aqua;
  color: white;
  font-size: 30px;
}

input[type="email"],
[type="password"] {
  width: 97.7%;
  height: 34px;
  padding-left: 5px;
  margin-bottom: 20px;
  margin-top: 8px;
  box-shadow: 0 0 5px #00f5ff;
  border: 2px solid violet;
  color: black;
  font-size: 16px;
}

#login {
  font-size: 20px;
  margin-top: 15px;
  background: linear-gradient(#22abe9 5%, #36caf0 100%);
  border: 1px solid #0f799e;
  padding: 7px 35px;
  color: white;
  text-shadow: 0px 1px 0px #13506d;
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
