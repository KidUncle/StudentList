// student API
// 操作文件中的数据  只关心数据 不关心业务

var fs = require('fs');

/*
*   获取所有学生列表
*/
exports.find = function (callback) {
    fs.readFile('./db.json','utf-8',(err,data) => {
        if (err) {
            return res.satus(500).send('Server error!');
        } 
        var students = JSON.parse(data).student;
        callback(err,students);
    }) 
}

/*
*   添加保存学生列表
*/
exports.save = function (student,callback) {
    fs.readFile('./db.json','utf-8',(err,data) => {
        if (err) {
            return res.satus(500).send('Server error!');
        } 
        var students = JSON.parse(data).student;
        student.id = students.length+1;
        students.push(student);
        fs.writeFile('./db.json',JSON.stringify({"student":students}),(err)=>{
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
              }
              // 成功就没错，所以错误对象是 null
              callback(null)
        })
    }) 
}

/*
*   根据id查找学生
*/
exports.findById = function(id,callback){
    fs.readFile('./db.json','utf-8',(err,data) => {
        if (err) {
            return res.satus(500).send('Server error!');
        } 
        var students = JSON.parse(data).student;
        var ret = students.find((item) => {
            return item.id === id;
        })
       callback(err,ret)
    }) 
}


/*
*   更新学生列表
*/
exports.updateById = function (student,callback) {
    fs.readFile('./db.json','utf-8',(err,data) => {
        if (err) {
            return res.satus(500).send('Server error!');
        } 
        var students = JSON.parse(data).student;

        student.id = parseInt(student.id);
        var stu = students.find(function (item) {
            return item.id === student.id
          })

        for(key in student) {
            stu[key] = student[key];
        }

        fs.writeFile('./db.json',JSON.stringify({"student":students}),(err)=>{
            if (err) return callback(err);
            callback(null)
        })
    })
}

/*
*   删除学生列表
*/
exports.delete = function (id,callback) {
    fs.readFile('./db.json','utf-8',(err,data) => {
        if (err) {
            return res.satus(500).send('Server error!');
        } 
        var students = JSON.parse(data).student;

        var delindex = students.findIndex((item) => {
            return item.id === id;
        })
        students.splice(delindex,1);
        fs.writeFile('./db.json',JSON.stringify({"student":students}),(err)=>{
           if (err) return callback(err);
           callback(null)
        })
    }) 
}