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
router.get('/insert', (req, res) => {
    return res.render('../view/page_insert.ejs')
})
router.post('/insert/insertdata',new Endpoint().insertdataEndpoint)
router.get('/showdata',new Endpoint().showdataEndpoint)




//admin function
router.get('/admin123', (req, res) => {
    return res.render('../view/admin.ejs',{response:{notification:''} })
})
router.post('/admin123/login', new Endpoint().loginEndpoint)

router.get('/admin123/function/editanddelete' , new Endpoint().adminshowdataEndpoint)

router.post('/edituser/:userid',new Endpoint().editdataforadminEndpoint)

module.exports = router;