const express = require('express');
const bodyParser = require('body-parser');

const admin_route = express();

admin_route.use(bodyParser.json());
admin_route.use(bodyParser.urlencoded({extended: true}));

admin_route.use(express.static('public'));
admin_route.set('view engine', 'ejs');
admin_route.set('views', './views');
admin_route.set('views', './views/admin');

const adminController = require('../controller/adminController');

admin_route.post('/adminRegister', adminController.adminRegister);
admin_route.get('/adminDashboard', adminController.loadAdminDashboard);

module.exports = admin_route;
