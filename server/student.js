var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast',{ useNewUrlParser: true });
mongoose.set('useFindAndModify', false)

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
let studentSchema = new Schema({
    name: {
      type: String,
      required: true // 必须有
    },
    gender: {
      type: Number,
      enum: [0,1],
      default: 0
    },
    age: {
      type: Number,
      required: true
    },
    hobbies: {
      type: String
    }
  })

module.exports = mongoose.model('Student', studentSchema);

 