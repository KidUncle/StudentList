<template>
    <div>
       <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" placeholder="Search...">
                </form>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Export</a></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li><a href="">Nav item</a></li>
                    <li><a href="">Nav item again</a></li>
                    <li><a href="">One more nav</a></li>
                    <li><a href="">Another nav item</a></li>
                    <li><a href="">More navigation</a></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li><a href="">Nav item again</a></li>
                    <li><a href="">One more nav</a></li>
                    <li><a href="">Another nav item</a></li>
                </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h2 class="sub-header">编辑</h2>
                <form >
                    <input type="hidden" name="id" value="">
                    <div class="form-group">
                        <label for="">姓名</label>
                        <input type="text" class="form-control" id="" name="name" v-model='stuInfo.name'>
                    </div>
                    <div class="form-group">
                        <label for="">性别</label>
                        <div>
                            <!-- <label class="radio-inline">
                                <input type="radio" name="gender" id="" value="0"> 男
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="gender" id="" value="1"> 女
                            </label> -->
                            <input type="radio" id="one" value="0" v-model="stuInfo.gender">
                            <label for="one" class="radio-inline">男</label>
                            <br>
                            <input type="radio" id="two" value="1" v-model="stuInfo.gender">
                            <label for="two" class="radio-inline">女</label>
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="">年龄</label>
                        <input class="form-control" type="number" id="" name="age" v-model='stuInfo.age'>
                        <div class="form-group">
                            <label for="">爱好</label>
                            <input class="form-control" type="text" id="" name="hobbies" v-model='stuInfo.hobbies'>
                        </div>
                        <!-- <button  @click="goHome()" class="btn btn-default">Submit</button> -->
                    </div>   
                </form>
                <button  @click="goHome()" class="btn btn-default">Submit</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
    data(){
      return{
        id: this.$route.params.id,
        stuInfo: {}
      }
    },
    created(){
      this.getinfo(this.id);
    },
    methods:{
     getinfo(id){
       this.$http.jsonp(`http://127.0.0.1:3000/api/students/edit?id=${id}`).then(
         res => {
         this.stuInfo = res.body;
         }
       ).catch(err=>{
         if(err) alert('Eeeor!')
       })
     },

     goHome(){
      let stu = this.stuInfo;
      stu.id = this.id
       this.$http.post('http://127.0.0.1:3000/api/students/edit',stu,{emulateJSON:true}).then(res=>{
         console.log(res.status);
       }).catch(
         err=>{
           if (err) {
             alert('Error!')
           }
         }
       );
       this.$router.push('/Student');
     }
    }
}
</script>

<style >
body {
    padding-top: 50px;
  }
  .sub-header {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .navbar-fixed-top {
    border: 0;
  }
  .sidebar {
    display: none;
  }
  @media (min-width: 768px) {
    .sidebar {
      position: fixed;
      top: 51px;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
    }
  }
  .nav-sidebar {
    margin-right: -21px; /* 20px padding + 1px border */
    margin-bottom: 20px;
    margin-left: -20px;
  }
  .nav-sidebar > li > a {
    padding-right: 20px;
    padding-left: 20px;
  }
  .nav-sidebar > .active > a,
  .nav-sidebar > .active > a:hover,
  .nav-sidebar > .active > a:focus {
    color: #fff;
    background-color: #428bca;
  }
  
  .main {
    padding: 20px;
  }
  @media (min-width: 768px) {
    .main {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  .main .page-header {
    margin-top: 0;
  }
  .placeholders {
    margin-bottom: 30px;
    text-align: center;
  }
  .placeholders h4 {
    margin-bottom: 0;
  }
  .placeholder {
    margin-bottom: 20px;
  }
  .placeholder img {
    display: inline-block;
    border-radius: 50%;
  }
</style>