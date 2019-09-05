const express = require('express');

const Student = require('./student');

const router = module.exports = express.Router();

// router.prefix = '/api'

/**
 * GET /api/music
 */
router.get('/api/students', (req, res) => {
    // JSONP在当下的WEB开发过程中经常用到，express就是将经常用到的东西进行封装
    // jsonp方法中会自动接收客户端传来的回调函数名称

    Student.find((err,students) => {
        if (err) {
            return res.status(500).send("Server error")
        }
        res.jsonp(students.map(item => {
            const temp = {};
            Object.assign(temp,item._doc);
            //console.log(temp);
            return temp;
        }))
    });

  });

router.post('/api/students/new',(req,res) => {
    new Student(req.body).save((err)=>{
        if (err) {
            return res.status(500).send("Server error");
        }
        res.redirect('http://127.0.0.1:8080/#/Student');
    })
});

router.get('/api/students/edit',(req,res) => {
    Student.findById(req.query.id,(err,student) => {
      if (err) {
          return res.status(500).send("Server error")
      }
      res.jsonp(student);
    }) ;
});

router.post('/api/students/edit',(req,res) => {
    //console.log(req.body);
    Student.findByIdAndUpdate(req.body.id,req.body,(err) => {
        if (err) {
            return res.status(500).send("Server error");
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.send('...');
    });
});

router.post('/api/students/delete',(req,res) => {  
    Student.findByIdAndRemove(req.body.id,(err) => {
        if (err) {
            return res.status(500).send("Server error");
        }   
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.send('...');
    });
})



