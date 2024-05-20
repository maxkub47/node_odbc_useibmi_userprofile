const express = require("express");
const router = express.Router();
const controller = require('./controller')


//test use CL CMD by itoolkit
router.get('/clcmd', controller.rtvjoba);

//test call procedure by odbc
router.get('/callproc', controller.callproc)

//test query db2 by sql
router.get('/query', controller.getVehicle)

//test change library List 
router.get('/chglibl', controller.chgLibl)

//test change library List 
router.get('/chglibl2', controller.chgLibl2)

//test change library List 
router.get('/maxlib1/chglibl', controller.chgLibl3)
router.get('/maxlib2/chglibl', controller.chgLibl4)


module.exports = router