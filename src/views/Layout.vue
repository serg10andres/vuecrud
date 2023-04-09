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
            <RouterLink class="nav-link text-white " to="/students" active-class="bg-gradient-primary active">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">dashboard</i>
              </div>
              <span class="nav-link-text ms-1">Students</span>
            </RouterLink>
          </li>
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
</body>
</template>