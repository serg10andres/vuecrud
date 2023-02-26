<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>This is a student page
                    <RouterLink to="/students/create"
                    class="btn btn-primary float-end">
                    Add Student
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.students.length > 0">
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.id }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.course }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.phone }}</td>
                            <td>{{ student.created_at }}</td>
                            <td>
                                <RouterLink :to="{path: '/students/'+student.id+'/edit'}"
                                class="btn btn-warning">
                                    Edit
                                </RouterLink>
                                &nbsp;
                                <button @click="deleteStudent(student.id)" type="button" class="btn btn-danger">
                                    Delete
                                </button>  
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="5">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'students',
    data(){
        return {
            students: []
        }
    },
    mounted(){
        this.getStudents()
    },
    methods: {
        getStudents(){
            axios.get('http://127.0.0.1:8000/api/students').then(res =>{ 
                this.students = res.data.students
                console.log(this.students) 
            })
        },

        deleteStudent(studentId){
            console.log(studentId);
            
            axios.delete(`http://127.0.0.1:8000/api/students/${studentId}/delete`)
            .then(res =>{

                this.$swal({icon: 'success',
                            title: 'Already!',
                            text: res.data.message,
                            toast: true,
                            showConfirmButton: false,
                            timer: 2500,
                            position: 'top-end'});


                this.getStudents();
            }).catch(function(error){
                if (error.response) {
                    if(error.response.status == 404){
                        alert(error.response.data.message);
                    }
                } 
            });
            
        }
    },
}
</script>

  
  
  