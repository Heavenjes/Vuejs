<template>
  <div class="row loginPage">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="container">
        <div class="card">
          <center>
            <div class="card-header">REGISTER</div>
          </center>
          <div class="card-body">
            <div class="form-group">
              <label for="username" class="bmd-label-floating">Username</label>
              <input
                type="text"
                class="form-control"
                v-model="form.username"
                placeholder="Enter username..."
              >
            </div>
            <div class="form-group">
              <label for="email" class="bmd-label-floating">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
                placeholder="Enter email address..."
              >
            </div>
            <div class="form-group">
              <label for="passw" class="bmd-label-floating">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="form.password"
                placeholder="Enter password..."
              >
            </div>
            <div class="form-group">
              <label for="cpassw" class="bmd-label-floating">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                v-model="form.cpassword"
                placeholder="Enter password ..."
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
        password: "",
        confirmPassword: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      sessionStorage.setItem("pass", this.form.password);
      AUTH.register(this.form.email, this.form.password);
      // ROUTER.push('/login')
    }
  }
};
</script>

<style scoped>
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

input[type="text"],
[type="password"] ,
[type="email"] {
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
