import Student from './compont/Student/Student.vue';
import NewStudent from './compont/Student/NewStudent.vue';
import EditStudent from './compont/Student/EditStudent.vue';
import Test from './compont/Test.vue';
export default {
    routes: [
      { path: '/Student' , component: Student },
      { path: '/NewStudent' , component: NewStudent },
      { path: '/EditStudent:id' , component: EditStudent },
      { path: '/Test' , component: Test },
      { path: '*' , redirect: Student }
    ]
}
  