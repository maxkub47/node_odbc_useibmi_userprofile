const { Connection } = require('odbc')
const { CL_CMD } = require('../../helpers/AS400_CL_CMD')
const { Database} = require('../../helpers/odbc')
const { getlibl } = require('../../utils/chklibl')

const rtvjoba = async () => {
  const cmd = 'RTVJOBA USRLIBL(?) SYSLIBL(?)'
  //const cmd = 'RTVUSRPRF JOBD(?) JOBDLIB(?)'
  //const cmd = 'DSPJOBD JOBD(QGPL/QDFTJOBD) OUTPUT(*)'
  //const cmd = 'DSPLIBL output(*)'
  let result = await CL_CMD(cmd)
  console.log('result', JSON.stringify(result))
  return result
}

const callProc = async ({ numa, numb }) => {
  let result = await Database.callProcedure(null, `MAXLIB`, `SUMPGM`, [numa, numb, 0])
  return result
}

const getVehicle = async () => {
  let result = await Database.query("SELECT * FROM PRD1DBLIB.fi010P limit 1")
  return result
}

const chgLibl = async ({decoded}) => {
  await getlibl({decoded},'SET1')
  let result = await Database.query('SELECT * FROM file1')
  return result
}

const chgLibl2 = async ({decoded}) => {
  await getlibl({decoded},'SET2')
  let result = await Database.query('SELECT * FROM file1')

  return result
}

const chgLibl3 = async () => {
  let result = await Database.query('SELECT * FROM maxlib1.file1')
  return result
}

const chgLibl4 = async () => {
  let result = await Database.query('SELECT * FROM maxlib2.file1')
  return result
}

module.exports = {
  rtvjoba,
  callProc,
  getVehicle,
  chgLibl,
  chgLibl2,
  chgLibl3,
  chgLibl4
}
