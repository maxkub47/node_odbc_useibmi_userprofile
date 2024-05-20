const jwt = require('jsonwebtoken')
require('dotenv').config();

const { QSYGETPH } = require('../AS400API/QSYGETPH.js')
const { errorMsg } = require('../utils/errormsg.js')
const { Database } = require('./odbc.js')

const login = async (req,res) => {
    const {username , password} = req.body
    let isLogin = await QSYGETPH(username,password)

    if(isLogin === ''){
        const token = jwt.sign({username,password}, process.env.JWT_SECRET, {expiresIn:'1d'})
        Database.connect([
            `DRIVER=IBM i Access ODBC Driver`,
            `SYSTEM=${process.env.DB_HOST}`,
            `UID=${username}`,
            `Password=${password}`,
            `Naming=1`,
            `DBQ=,${process.env.DB_DBQ}`,
          ].join(';'))
        return res.json({username,token})
    }else{
        return res.status(500).send(errorMsg.qsygetph[isLogin])
    }
}

module.exports = {
    login
}