<template>
    <div>
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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
          <h1 class="page-header">Dashboard</h1>

          <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </div>

          <h2 class="sub-header">学生列表</h2>
          <routerLink class="btn btn-success" to="/NewStudent">添加学生</routerLink>

          <div class="table-responsive">
            <table class="table table-striped" >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Hobbies</th>
                </tr>
              </thead>
              <tbody v-for="(item,index) in list" :key="item._id">
                <tr>
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.age }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ item.hobbies }}</td>
                  <td>
                      <router-link :to="'/EditStudent'+item._id">编辑</router-link>
                      <a href="#" @click.prevent="del(item._id)">删除</a>
                      <!-- <button  @click="del(item._id)">删除</button> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Script } from 'vm';

  export default {
    data() {
        return{
            list:[
              // { 'id': 1, 'name': 'xx', 'age': 12, 'gender': 0 ,'hobbies':'吃饭，睡觉，打豆豆'},
              // { 'id': 2, 'name': 'xx', 'age': 12, 'gender': 0 ,'hobbies':'吃饭，睡觉，打豆豆'},
              // { 'id': 3, 'name': 'xx', 'age': 12, 'gender': 0 ,'hobbies':'吃饭，睡觉，打豆豆'},
              // { 'id': 4, 'name': 'xx', 'age': 12, 'gender': 0 ,'hobbies':'吃饭，睡觉，打豆豆'}
            ]
        }
    },
  created() {
      this.getStudentsList();
  },
  inject: ['reload'],
    methods: {
      getStudentsList(){
        this.$http.jsonp('http://127.0.0.1:3000/api/students').then(res=>{
          this.list = res.body
          //console.log(res.body);
        }).catch(err=>{
          alert('error!')
        })
      },
      del(id){
      this.$http.post('http://127.0.0.1:3000/api/students/delete',{'id':id},{emulateJSON:true}).then(res=>{
         console.log(res.status);
        }).catch(err=>{
          alert('error!')
        });
        this.reload();
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