import mysql from "serverless-mysql"
const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    database: "bus_app"
  }
})

export const queryDB = async (sql) => {
  try {
    let dbRes = await db.query(sql);
    await db.end();
    return dbRes;
  }
  catch (error){
    console.log(error)
    return null;
  }
}