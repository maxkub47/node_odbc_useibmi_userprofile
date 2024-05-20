const repository = require('./repository')
const jwt = require('jsonwebtoken')

const rtvjoba = async (req, res) => {
  try {
    let results = await repository.rtvjoba()
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      msg: 'function RTVJOBA Error',
      ODBCmsg: error,
    })
    console.log(error)
  }
}

const callproc = async (req, res) => {
  try {
    const { numa, numb } = req.body
    let results = await repository.callProc({ numa, numb })
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      msg: 'function RTVJOBA Error',
      ODBCmsg: error,
    })
    console.log(error)
  }
}

const getVehicle = async (req, res) => {
  try {
    let results = await repository.getVehicle()
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: 'error',
      msg: 'function getVehicle Error',
      ODBCmsg: error,
    })
  }
}

const chgLibl = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.decode(token)

    let results = await repository.chgLibl({decoded})
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: 'error',
      msg: 'function chgLibl Error',
      ODBCmsg: error,
    })
  }
}

const chgLibl2 = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.decode(token)

    let results = await repository.chgLibl2({decoded})
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    res.status(500).send({
      status: 'error',
      msg: 'function chgLibl Error',
      ODBCmsg: error,
    })
  }
}

const chgLibl3 = async (req, res) => {
  try {
    let results = await repository.getVehicle()
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: 'error',
      msg: 'function getVehicle Error',
      ODBCmsg: error,
    })
  }
}

const chgLibl4 = async (req, res) => {
  try {
    let results = await repository.getVehicle()
    res.status(200).send({
      status: 'success',
      ...results,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: 'error',
      msg: 'function getVehicle Error',
      ODBCmsg: error,
    })
  }
}

module.exports = {
  rtvjoba,
  callproc,
  getVehicle,
  chgLibl,
  chgLibl2,
  chgLibl3,
  chgLibl4
}
