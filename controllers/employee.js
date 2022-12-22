const Employee=require('../models/Employee')
const EmployeeHistory=require('../models/EmployeeHistory')


exports.EmployeesHome=async(req,res)=>{
    let data=await Employee.find()
    res.render('employeesPage',{data})
}

exports.addEmployee=async(req,res)=>{
    let {emp_id,emp_name,emp_dob,emp_mob,emp_branch,emp_passport,emp_passport_vf,emp_passport_vt,emp_iqama,emp_iqama_vf,emp_iqama_vt}=req.body
    await Employee.create({id:Date.now(),emp_id:emp_id,emp_name:emp_name,emp_dob:emp_dob,emp_mob:emp_mob,emp_branch:emp_branch,emp_passport:emp_passport,emp_passport_vf:emp_passport_vf,emp_passport_vt:emp_passport_vt,emp_iqama:emp_iqama,emp_iqama_vf:emp_iqama_vf,emp_iqama_vt:emp_iqama_vt})
    res.redirect('/employee')
}

exports.getEmployeePage=async(req,res)=>{
    let emp_id=req.params.emp_id
    let data=await Employee.findOne({emp_id:emp_id})
    let totSalary=await EmployeeHistory.find({emp_id:emp_id})
    let balance_salary=0
    totSalary.forEach((x) => {
        balance_salary+=x.amount        
    });


    res.render('employeePage',{data,balance_salary,emp_id})
}

exports.addSalary=async(req,res)=>{
    let emp_id=req.params.emp_id
    let {add_amout,emp_branch,add_date}=req.body
    await EmployeeHistory.create({
        id:Date.now(),
        emp_id:emp_id,
        emp_tr_type:'add',
        emp_branch:emp_branch,
        amount:+add_amout,
        date:add_date
    })
    res.redirect(`/employee/${emp_id}`)
}

exports.paySalary=async(req,res)=>{
    let emp_id=req.params.emp_id
    let {pay_amout,emp_branch,pay_date}=req.body
    await EmployeeHistory.create({
        id:Date.now(),
        emp_id:emp_id,
        emp_tr_type:'pay',
        emp_branch:emp_branch,
        amount:-pay_amout,
        date:pay_date
    })
    res.redirect(`/employee/${emp_id}`)
}

exports.getAddHistory=async(req,res)=>{
    let emp_id=req.params.emp_id
    let data=await EmployeeHistory.find({emp_id:emp_id,emp_tr_type:'add'})
    res.render('employeeHistoryPage',{data,emp_id})
}

exports.getPayHistory=async(req,res)=>{
    let emp_id=req.params.emp_id
    let data=await EmployeeHistory.find({emp_id:emp_id,emp_tr_type:'pay'})
    res.render('employeeHistoryPage',{data,emp_id})
}
