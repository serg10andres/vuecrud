<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Student</h4>
            </div>
            <div class="card-body">

                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                        {{error[0] }}
                    </li>
                </ul>

                <div class="mb-3">
                    <label>Name</label>
                    <input v-model="model.student.name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label>Course</label>
                    <input v-model="model.student.course" class="form-control" />
                </div>
                <div class="mb-3">
                    <label>Email</label>
                    <input v-model="model.student.email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label>Phone</label>
                    <input v-model="model.student.phone" class="form-control" />
                </div>

                <div class="mb-3">
                    <button @click="updateStudent" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'studentEdit',
    data(){
        return{
            errorList: '',
            studentId: '',
            model:{
                student:{
                    name: '',
                    course: '',
                    email: '',
                    phone: ''
                }
            }
        }
    },

    mounted(){
        // console.log(this.$route.params.id)
        this.studentId = this.$route.params.id;
        this.getStudentData(this.$route.params.id);
    },

    methods:  {
        getStudentData(studentId){
            //change '' by ``
            axios.get(`http://127.0.0.1:8000/api/students/${studentId}/edit`).then(res => {
                console.log(res.data.student);

                //all model
                this.model.student = res.data.student

                //or assign each one
                //this.model.student.name = res.data.student.name
            })
            .catch(function(error){
                if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                    if(error.response.status == 404){
                        alert(error.response.data.message);
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
        },

        updateStudent(){
            var mythis = this;
            axios.put(`http://127.0.0.1:8000/api/students/${this.studentId}/edit`, this.model.student)
            .then(res => {
                console.log(res.data)
                //create alert in toastr
                // this.$toast.show(res.data.message, {
                // type: "info",
                // position: "top-right",
                // });

                this.$swal({icon: 'success',
                            title: 'Fine',
                            text: res.data.message,
                            toast: true,
                            showConfirmButton: false,
                            timer: 2500,
                            position: 'top-end'});

                
                this.errorList = ''
            })
            .catch(function(error){
                if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                    if(error.response.status == 422){
                        mythis.errorList = error.response.data.errors;
                    }

                    if(error.response.status == 404){
                        this.$swal({icon: 'error',
                            title: 'Oopss!',
                            text: error.response.data.message,
                            toast: true,
                            showConfirmButton: false,
                            timer: 2500,
                            position: 'top-end'});


                        //alert (error.response.data.message);
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
