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

    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Posts</li>
          </ol>
          <h6 class="font-weight-bolder mb-0">Posts</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group input-group-outline">
              
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              
            </li>
            <li class="nav-item d-flex align-items-center">
              <a href="#" class="nav-link text-body font-weight-bold px-0">
                <i class="fa fa-user me-sm-1"></i>
                <span class="d-sm-inline d-none">{{ currentUser.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-capitalize ps-3">Posts table</h6>
              </div>
              <div class="pt-2">
                <RouterLink to="/posts/create"
                    class="btn btn-info float-end">
                    Add Post
              </RouterLink>
              </div>
              
            </div>
            <div class="card-body px-0 ">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">ID</th>
                      <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Title</th>
                      <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Category</th>
                      <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Content</th>
                      <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Status</th>
                      <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Created by</th>
                      <th class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Created at</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody v-if="this.posts.length != 0">
                    <tr v-for="(post, index) in this.posts" :key="index">
                        <td class="align-middle text-center text-sm"><p class="text-xs font-weight-bold mb-0">{{ post.id }}</p></td>
                        <td ><p class="text-xs font-weight-bold mb-0">{{ post.title }}</p></td>
                        <td><p class="text-xs font-weight-bold mb-0">{{ post.category }}</p></td>
                        <td class="align-middle text-center text-sm"><p class="text-xs font-weight-bold mb-0">{{ post.content }}</p></td>
                        <td class="align-middle text-center text-sm"><p class="text-xs font-weight-bold mb-0">{{ post.status }}</p></td>
                        <td class="align-middle text-center text-sm"><p class="text-xs font-weight-bold mb-0">{{ post.created_by }}</p></td>
                        <td class="align-middle text-center text-sm"><p class="text-xs font-weight-bold mb-0">{{ post.created_at }}</p></td>
                        
                        <td class="align-middle text-center">
                            <RouterLink :to="{path: '/posts/'+post.id+'/edit'}"
                            class="btn btn-warning">
                            <span class="btn-inner--icon"><i class="material-icons">edit</i></span>
                                Edit
                            </RouterLink>
                            &nbsp;
                            <button class="btn btn-icon btn-3 btn-danger" @click="deletePost(post.id)" type="button">
                                <span class="btn-inner--icon"><i class="material-icons">delete</i></span>
                                <span class="btn-inner--text"> Delete</span>
                            </button>
                        </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                      <tr>
                          <td class="align-middle text-center" colspan="7">Loading...</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <footer class="footer py-4  ">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-12 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-center">
                © 
                <i class="fa fa-hand-peace-o" aria-hidden="true"></i> by
                <a href="#" class="font-weight-bold">Sergio Diaz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main> 
</body>    
</template>

<script>
import axios from 'axios'
export default{
    name: 'posts',
    data(){
        return {
            posts: [],
            currentUser: {},
            token: localStorage.getItem('token'),
        }
    },
    mounted(){
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        this.getPosts(),
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

        deletePost(postId){
            console.log(postId);
            
            axios.delete(`http://127.0.0.1:8000/api/posts/${postId}/delete`)
            .then(res =>{

                this.$swal({icon: 'success',
                            title: 'Already!',
                            text: res.data.message,
                            toast: true,
                            showConfirmButton: false,
                            timer: 2500,
                            position: 'top-end'});


                this.getPosts();
            }).catch(function(error){
                if (error.response) {
                    if(error.response.status == 404){
                        alert(error.response.data.message);
                    }
                } 
            });
            
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

  
  
  