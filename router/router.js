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
    return res.render('../view/page1.ejs')
})
router.get('/page2', (req, res) => {
    return res.render('../view/page2.ejs')
})
router.get('/admin123', (req, res) => {
    return res.render('../view/admin.ejs')
})






//admincheck
router.post('/admin123/login',new Endpoint().checkadminEndpoint)
router.get('/username' ,new Endpoint().selectusernameEnpoint)
module.exports = router;