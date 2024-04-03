const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

const adminRegister = async(req, res)=>{
    const {name, email, password} = req.body;
    const adminFind = await Admin.findOne({email:email});
    if(adminFind){
        res.status(401).json({
            msg:'Email already exisst'
        })
    }
    else{
        const bcryptPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({
            name:name,
            email:email,
            password: bcryptPassword
        });
    
        const response = await admin.save();
        if(response){
            res.status(200).json({
                msg:'success'
            });
        }else{
            res.status(400).json({
                msg:'failure'
            });
        }
    }
   

}

const loadAdminDashboard = (req, res)=>{
    try {
        res.render('adminDashboard')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    adminRegister,
    loadAdminDashboard
}