const mongoose=require('mongoose')
let empHistorySchema=new mongoose.Schema({
    id:String,
    emp_id:String,
    emp_tr_type:String,
    emp_branch:String,
    amount:Number,
    date:String,

})
module.exports=mongoose.model('EmpHistory',empHistorySchema)


