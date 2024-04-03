const express = require('express');
const { signUpValidator } = require('../helpers/userValidator');
const user_route = express();
const bodyParser = require('body-parser');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, 'public/images'));
    },
    filename:function(req, file, cb){
        const name = Date.now() +'-'+file.originalname;
        cb(null, name);
    }
})

const upload = multer({storage:storage});

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended: true}));

user_route.use(express.static('public'));
user_route.set('view engine', 'ejs');
user_route.set('views', './views');

const userController = require('../controller/userController');

user_route.get('/', userController.loadLogin);
user_route.post('/', userController.login);
user_route.get('/seller', userController.loadseller);
user_route.post('/seller', userController.seller);


user_route.get('/register', userController.loadRegister);
user_route.post('/register',signUpValidator ,userController.register);

user_route.get('/dashboard', userController.loadDashboard);

module.exports = user_route;