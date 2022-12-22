const mongoose=require('mongoose')
let employeeSchema=new mongoose.Schema({
    id:String,
    emp_id:Number,
    emp_name:String,
    emp_dob:String,
    emp_mob:String,
    emp_branch:String,
    emp_passport:String,
    emp_passport_vf:String,
    emp_passport_vt:String,
    emp_iqama:String,
    emp_iqama_vf:String,
    emp_iqama_vt:String

})
module.exports=mongoose.model('Employee',employeeSchema)