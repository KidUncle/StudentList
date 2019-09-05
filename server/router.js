
var fs = require('fs');
var student = require('./student');
//Express 提供了一种更好的方式 专门用来包装路由的

var express = require('express');
//1. 创建一个路由容器
var router = express.Router();
//2. 把路由都挂载到 router 路由容器中

    router.get('/students',(req,res) => {
        student.find((err,students) => {
            if (err) {
                return res.status(500).send("Server error")
            }
            res.render('index.html',{
                students: students
            })
        })
    });

    router.get('/students/new',(req,res) => {
        res.render('new.html');
    });

    router.post('/students/new',(req,res) => {
        new student(req.body).save((err)=>{
            if (err) {
                return res.status(500).send("Server error");
            }
            res.redirect('/students');
        })
    });

    router.get('/students/edit',(req,res) => {
      student.findById(req.query.id,(err,student) => {
        if (err) {
            return res.status(500).send("Server error")
        }
        res.render('edit.html',{
            student: student
        }) 
      }) 
    });

    router.post('/students/edit',(req,res) => {
        student.findByIdAndUpdate(req.body.id,req.body,(err) => {
            if (err) {
                return res.status(500).send("Server error")
            }
           res.redirect('/students')
        })
    });

    router.get('/students/delete',(req,res) => {
        student.findByIdAndRemove(req.query.id,(err) => {
            console.log(req.query.id)
            if (err) {
                return res.status(500).send("Server error")
            }
            res.redirect('/students');
        })
    })

    module.exports = router;




