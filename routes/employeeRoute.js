const express = require('express')
const { EmployeesHome, addEmployee, getEmployeePage, addSalary, paySalary, getAddHistory, getPayHistory } = require('../controllers/employee')
const { isLoggedin } = require('../middlewares/user')
const router=express.Router()



router
    .route('/')
    .get(isLoggedin,EmployeesHome) 

router
    .route('/add')
    .post(addEmployee)

router
    .route('/:emp_id')
    .get(getEmployeePage)  

router
    .route('/:emp_id/add_salary')
    .post(addSalary)

router
    .route('/:emp_id/pay_salary')
    .post(paySalary) 
    
router
    .route('/:emp_id/add_history')
    .get(getAddHistory)  
    
router
    .route('/:emp_id/pay_history')
    .get(getPayHistory)      








module.exports=router
