const express = require ('express')
const router = express.Router()

const {getOne, getAll,createUser,updateUser,deleteUser,createArrayCourses} = require ("../controller/studentController")

router.get('/getone/:id',getOne)
router.get('/getall',getAll)
router.post('/createuser',createUser)
router.put('/updateuser/:id',updateUser)
router.delete('/deleteuser/:id',deleteUser)
router.post('/createarraycourses',createArrayCourses)


module.exports = router