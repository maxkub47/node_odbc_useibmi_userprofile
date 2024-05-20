const odbc = require('odbc')
require('dotenv').config();

class Database {
  static pool;
  static async connect(connectionString) {
    console.log(connectionString)
    this.pool = await odbc.pool(connectionString);
  }

  static async query(statement, bindingsValues = []) {
    if (!this.pool) {
      throw new Error('ODBC is not connected.');
    }
    const connection = await this.pool.connect()
    return connection.query(statement, bindingsValues);
  }

  static async callProcedure(catalog, library, procedure, bindingsValues = []) {
    if (!this.pool) {
      throw new Error('ODBC is not connected.');
    }
    const connection = await this.pool.connect();
    return connection.callProcedure(catalog, library, procedure, bindingsValues);
  }
}

// const connection = async (user,pass,libl) => {
//   const connection = await odbc.pool(
//     [
//       `DRIVER=IBM i Access ODBC Driver`,
//       `SYSTEM=${process.env.DB_HOST}`,
//       `UID=${user}`,
//       `Password=${pass}`,
//       `Naming=1`,
//       `DBQ=${libl ? libl : process.env.DB_DBQ}`,
//     ].join(';')
//   )
//   return connection

// }

// const query = async (statement, parameters = []) => {
//   console.log(connectionString)
//   const connection = await odbc.pool(connectionString)
//   try {
//     return await connection.query(statement, parameters)
//   } finally {
//     connection.close()
//   }
// }

// const callProcedure = async (
//   catalog,
//   library,
//   procedure,
//   bindingsValues = []
// ) => {
//   const connection = await Database.pool.connect()
//   try {
//     return connection.callProcedure(catalog, library, procedure, bindingsValues)
//   } finally {
//     connection.close()
//   }
// }

// const insertWithCommitAndRollback = async (statement, parameters = []) => {
//   const connection = await Database.pool.connect()
//   try {
//     await connection.beginTransaction()
//     const result = await connection.query(statement, parameters)
//     await connection.commit()
//     return result
//   } catch (error) {
//     await connection.rollback()
//     throw error
//   } finally {
//     connection.close()
//   }
// }

module.exports = {
  Database
}
