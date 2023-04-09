<template>
<body class="g-sidenav-show  bg-gray-200">
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href="#">
        <img src="@/assets_layout/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold text-white">Welcome!</span>
      </a>
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
            <a class="nav-link text-white" href="javascript:;" @click="logout">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">login</i>
              </div>
              <span class="nav-link-text ms-1">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <div class="main-content position-relative max-height-vh-100 h-100">
        <!-- Navbar -->
        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Profile</li>
              </ol>
              <h6 class="font-weight-bolder mb-0">Profile</h6>
            </nav>
            <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                <div class="input-group input-group-outline">
                  
                </div>
              </div>
              <ul class="navbar-nav  justify-content-end">
                
                <li class="nav-item d-flex align-items-center">
                  <a href="#" class="nav-link text-body font-weight-bold px-0">
                    <i class="fa fa-user me-sm-1"></i>
                    <span class="d-sm-inline d-none">{{ currentUser.name }}</span>
                  </a>
                </li>

                <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                    <div class="sidenav-toggler-inner">
                      <i class="sidenav-toggler-line"></i>
                      <i class="sidenav-toggler-line"></i>
                      <i class="sidenav-toggler-line"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->
        <div class="container-fluid px-2 px-md-4">
          <div class="page-header min-height-300 border-radius-xl mt-4" style="background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')">
            <span class="mask  bg-gradient-primary  opacity-6"></span>
          </div>
          <div class="card card-body mx-3 mx-md-4 mt-n6">
            <div class="row gx-4 mb-2">
              <div class="col-auto">
                <div class="avatar avatar-xl position-relative">
                  <img src="@/assets_layout/img/bruce-mars.jpg" alt="profile_image" class="w-100 border-radius-lg shadow-sm">
                </div>
              </div>
              <div class="col-auto my-auto">
                <div class="h-100">
                  <h5 class="mb-1">
                    {{ currentUser.name }}
                  </h5>
                  <p class="mb-0 font-weight-normal text-sm">
                    Blogger
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div class="nav-wrapper position-relative end-0">
                  
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row">
                <div class="col-12 col-xl-4">
                  <div class="card card-plain h-100">
                    <div class="card-header pb-0 p-3">
                      <div class="row">
                        <div class="col-md-8 d-flex align-items-center">
                          <h6 class="mb-0">Profile Information</h6>
                        </div>
                        <div class="col-md-4 text-end">
                          <RouterLink :to="{path: '/users/'+currentUser.id+'/edit'}">
                            <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                          </RouterLink>
                        </div>
                      </div>
                    </div>
                    <div class="card-body p-3">
                      <p class="text-sm">
                        Hi, I’m {{ currentUser.name }}, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                      </p>
                      <hr class="horizontal gray-light my-4">
                      <ul class="list-group">
                        <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; {{currentUser.name}}</li>
                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; {{currentUser.phone}}</li>
                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; {{ currentUser.email }}</li>
                        <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; {{ currentUser.location }}</li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-xl-4">
                  <div class="card card-plain h-100">
                    <div class="card-header pb-0 p-3">
                      <h6 class="mb-0">Blogs</h6>
                    </div>
                    <div class="card-body p-3">
                      <ul class="list-group">

                        <li v-for="(post, index) in this.posts" :key="index" class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                          <div class="avatar me-3">
                            <img src="@/assets_layout/img/illustrations/chat.png" alt="kal" class="border-radius-lg shadow">
                          </div>
                          <div class="d-flex align-items-start flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{{post.title}}</h6>
                            <p class="mb-0 text-xs">{{post.content}}</p>
                          </div>
                          <RouterLink :to="{path:'/posts/'+post.id+'/edit'}" class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto">Edit</RouterLink>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</body>     
</template>

<script>
import axios from 'axios'
export default{
    name: 'users',
    data(){
        return {
            currentUser: {},
            token: localStorage.getItem('token'),
            posts: []
        }
    },
    mounted(){

        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        this.getPosts()
        axios.get('http://127.0.0.1:8000/api/user').then(res =>{ 
                this.currentUser = res.data
            }).catch((errors)=>{
              console.log(errors)
            })
    },
    methods: {
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/posts').then(res =>{ 
                this.posts = res.data.posts
                console.log(this.posts) 
            })
        },

        logout(){
          axios.post('http://127.0.0.1:8000/api/logout').then(res =>{ 
                localStorage.removeItem('token')
                this.$router.push('/')
            }).catch((errors)=>{
              console.log(errors)
            })
        }
    },
}
</script>