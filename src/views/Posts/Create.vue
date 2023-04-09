<template>
 <body class="g-sidenav-show  bg-gray-200">
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <RouterLink class="navbar-brand m-0" to="/">
        <img src="@/assets_layout/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
      </RouterLink>
    </div>
    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/posts" active-class="bg-gradient-primary active">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">table_view</i>
              </div>
              <span class="nav-link-text ms-1">Posts</span>
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/users" active-class="bg-gradient-primary active">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">group</i>
              </div>
              <span class="nav-link-text ms-1">Users</span>
            </RouterLink>
          </li>

          <li class="nav-item mt-3">
            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white " to="/profile" active-class="bg-gradient-primary active">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">person</i>
              </div>
              <span class="nav-link-text ms-1">Profile</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white ">
              <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                  <!-- @csrf -->
              </form>
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">login</i>
              </div>
              <span class="nav-link-text ms-1">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Posts</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                        {{error[0] }}
                    </li>
                </ul>

                <div class="mb-3">
                    <label>Title</label>
                    <input v-model="model.post.title" class="form-control" />
                </div>
                <div class="mb-3">
                    <label>Category</label>
                    <select v-model="model.post.category" class="form-control">
                        <option v-for="category in categories" :value="category">{{category}}</option>
                    </select>    
                </div>
                <div class="mb-3">
                    <label>Content</label>
                    <textarea v-model="model.post.content" class="form-control" rows="5"></textarea>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" v-model="model.post.status" type="checkbox" checked="booleanValue">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Do you wish publish this post?</label>
                </div>

                

                <div class="mb-3">
                    <button @click="savePost" class="btn btn-primary">Save</button>
                    <RouterLink to="/posts" class="btn btn-default">Back</RouterLink>
                </div>
            </div>
        </div>
    </div>
</body>    
</template>

<script>
import axios from 'axios';

export default {
    name: 'postCreate',
    data(){
        return{
            currentUser: {},
            token: localStorage.getItem('token'),
            categories: {1: 'xxx', 2: 'www', 3: 'yyy', 4: 'zzz'},
            errorList: '',
            model:{
                post:{
                    title: '',
                    category: '',
                    content: '',
                    status: '',
                    created_by: ''
                }
            }
        }
    },
    mounted(){
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      axios.get('http://127.0.0.1:8000/api/user').then(res =>{ 
              this.currentUser = res.data
          }).catch((errors)=>{
            console.log(errors)
          })  
    },
    methods:  {
        savePost(){
            var mythis = this;
            this.model.post.created_by = this.currentUser.id 
            axios.post('http://127.0.0.1:8000/api/posts', this.model.post)
            .then(res => {
                console.log(res.data)
                //create alert in toastr
                // this.$toast.show(res.data.message, {
                // type: "success",
                // position: "top-right",
                // });
                this.$swal({icon: 'success',
                            title: 'Fine',
                            text: res.data.message,
                            toast: true,
                            showConfirmButton: false,
                            timer: 2500,
                            position: 'top-end'});



                this.model.post ={
                    title: '',
                    category: '',
                    content: '',
                    status: '',
                    created_by: ''
                }
                this.errorList = ''
            })
            .catch(function(error){
                if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                    if(error.response.status == 422){
                        mythis.errorList = error.response.data.errors;
                    }
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                }
            });
        }
    },  
}

</script>
