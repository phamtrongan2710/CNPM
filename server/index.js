const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun() {
  let con;

  try {
    con = await oracledb.getConnection({
      user: "sys",
      password: "123456",
      connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVER=G07)(SID=xe)))",
      privilege: oracledb.SYSDBA
    })
    
  } catch(err) {
    console.error(err);
  }
}
fun();