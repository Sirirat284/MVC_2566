const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router()

const { Endpoint } = require('../controler/endpoint.js')

// router.get("/showInformation", new Endpoint().showInfoEndpoint);
router.get("/showInformation",(req, res) => {
    return res.render('../view/showInfo.ejs')
});

router.get('/', (req, res) => {
    return res.render('../view/page_home.ejs')
})
// router.get('/insert', (req, res) => {
//     return res.render('../view/page_insert.ejs')
// })
// router.post('/insert/insertdata',new Endpoint().insertdataEndpoint)
// router.get('/showdata',new Endpoint().showdataEndpoint)

router.post('/register/success',new Endpoint().registerEndpoint)
router.get('/register', (req, res) => {
    return res.render('../view/register.ejs')
})
router.get('/login', (req, res) => {
    return res.render('../view/login.ejs',{response:{notification:''} })
})
router.post('/login/success',new Endpoint().loginEndpoint)
router.post('/chat/:usersid',new Endpoint().chatEndpoint)
console.log("haha")


module.exports = router;
