const studentModel = require('../model/studentModel')

exports.createUser = async (req, res) => {
    try {
        const { name, stack, email,registeredCourses,result } = req.body
        const newUser = await studentModel.create({
            name: name.toUpperCase(),
            stack: stack,
            email: email.toUpperCase(),
            registeredCourses:registeredCourses.length,
            result: result
        
            
        })
//         const results =(courseRegistered)=>{
// const courseRegistered = registeredCourses.req.body
// if(!courseRegistered){
//     res.status(404).json({
//         message:"cannot input result for unregistered "
//     })
// }
//         } 
//         courseRegistered;


    
        if (!newUser) {
            res.status(404).json({
                message: 'user not found'
            })
        } else {
            res.status(200).json({
                message: 'user found',
                newUser
            })

        }
    }

    catch (err) {
        res.status(400).json('cannot get create user ' + err)

    }
}

exports.getAll = async (req, res) => {
    try {
        const allUser = await studentModel.find()
        if (!allUser.length === 0) {
            res.status(200).json({
                message: 'no user was created'
            })
        } else {
            res.status(200).json({
                message: 'user found',
                allUser
            })
        }
    } catch (err) {
        res.status(400).json('cannot get all user ' + err)

    }
}
exports.getOne = async (req, res) => {
    try {
        const id = req.params.Id
        const oneUser = await studentModel.findById(id)
        if (!oneUser) {
            res.status(404).json({
                message: 'cannot get User'
            })
        } else {
            res.status(200).json({
                message: 'student found',
                oneUser
            })
        }
    } catch (err) {
        res.status(400).json('cannot get one user ' + err)
    }
}


exports.updateUser = async (req, res) => {
    try {
        const { name, stack, email, registeredCourses,result } = req.body
        const userId = req.params.id
        const update = await studentModel.findAndUpdateById(userId, { name, stack, email,registeredCourses,result}, { new: true })
        if (!update) {
            res.status(404).json({
                message: "cannot update user"
            })
        } else {
            res.status(200).json({
                mesage: 'user has been updated successfully',
                update
            })               
        }
    } catch (err) {
        res.status(400).json('cannot update user ' + err)
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
    const delId = await studentModel.findByIdAndDelete(id)
    const allUser = await studentModel.find()
    res.json({message:delId.name + "has been deleted",delId,allUser})

    // if(!userId){
    //     res.status(404).json({
    //         message:'unable to delete user'
    //     })
    // }else{
    //     res.status(200).json({
    //         message:"user has been deleted successfully"
    //     })
    // }
}catch(err){
    res.json(err.message)
}
}

exports.createArrayCourses = async(req,res)=>{
    try{
        const arrayCourses = req.body.registeredCourse;
        const arrayResult = req.body.result;

        const unregisteredCourses = arrayResult.filter(courses =>!arrayCourses.includes(unregisteredCourses))
  if(registeredCourse.length > 0 ){
    res.status(400).json({
        message:"unregistered courses found in the result ",
        unregisteredCourses
    })
    return;
  }
  const totalCourses = arrayCourses.lenth;
    
req.body.no_of_courses = totalCourses;


const newUser =await studentModel.create(req.body);

if(!newUser){
    res.status(400).json({
        message:"unable to create user"
    })
}else{
    res.status(201).json({
        message:'user created succefully',
        newUser,
        totalCourses

    })
}


}catch(err){
    res.json(err.message)
}
}  