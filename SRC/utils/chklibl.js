const { Database } = require('../helpers/odbc')
const getlibl = async ({decoded},setLibl) => {
    if (setLibl === 'SET1') {
        libl = 'MAXLIB1, MAXLIB, MAXTOOL';
    } else {
        libl = 'MAXLIB2, MAXLIB, MAXTOOL';
    }

    await Database.connect([
        `DRIVER=IBM i Access ODBC Driver`,
        `SYSTEM=${process.env.DB_HOST}`,
        `UID=${decoded.username}`,
        `Password=${decoded.password}`,
        `Naming=1`,
        `DBQ=,${libl}`,
    ].join(';'));
};



module.exports = {
    getlibl
};
