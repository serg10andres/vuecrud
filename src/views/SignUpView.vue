<template>
    <main class="main-content  mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" :style="{ backgroundImage: 'url(' +bgImage +')', backgroundSize: 'cover'}">
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div class="card card-plain">
                <div class="card-header">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body">
                    <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                            {{error[0] }}
                        </li>
                    </ul>
                  
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Full name</label>
                      <input type="text" class="form-control" v-model="model.user.name">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Phone</label>
                      <input type="text" class="form-control" v-model="model.user.phone">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Location</label>
                      <input type="text" class="form-control" v-model="model.user.location">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" v-model="model.user.email">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Password</label>
                      <input type="password" class="form-control" v-model="model.user.password">
                    </div>
                    <div class="form-check form-check-info text-start ps-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                      <label class="form-check-label" for="flexCheckDefault">
                        I agree the <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                      </label>
                    </div>
                    <div class="text-center">
                      <button @click="saveUser" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                    </div>
                  
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-2 text-sm mx-auto">
                    Already have an account?
                    <RouterLink to="/" class="text-primary text-gradient font-weight-bold">Sign in</RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import axios from 'axios';
import imgUrl from '@/assets_layout/img/illustrations/illustration-signup.jpg'

export default {
    name: "userCreate",
    data() {
        return {
            bgImage: imgUrl,
            errorList: "",
            model: {
                user: {
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    location: "",
                }
            }
        };
    },
    methods: {
        saveUser() {
            var mythis = this;
            axios.post("http://127.0.0.1:8000/api/users", this.model.user)
                .then(res => {
                console.log(res.data);
                //create alert in toastr
                // this.$toast.show(res.data.message, {
                // type: "success",
                // position: "top-right",
                // });
                this.$swal({ icon: "success", title: "Fine", text: res.data.message, toast: true, showConfirmButton: false, timer: 2500, position: "top-end" });
                this.model.user = {
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    location: ""
                };
                this.errorList = "";
                setTimeout(()=> {this.$router.push('/') }, 2600)
            })
                .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status == 422) {
                        mythis.errorList = error.response.data.errors;
                    }
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                }
                else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
            });
        }
    }
}
</script>