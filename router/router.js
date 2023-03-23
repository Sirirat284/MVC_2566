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

module.exports = router;