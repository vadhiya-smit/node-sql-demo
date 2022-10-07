const dotenv = require("dotenv")
dotenv.config()
const express = require('express');
const { errorConverter, errorHandler } = require("./src/middleware/Error");
const app = express()
const port = 3000

const db = require("./src/modals/index")
db.sequelize.sync()
const allRoutes = require("./src/routes")
// const mysql = require("mysql");
// const options = {
//     host : process.env.HOST,
//     port : 3306,
//     user : process.env.DB_USER,
//     password : process.env.PASSWORD,
//     database : process.env.DB,
// }
// console.log(options);
// const db = mysql.createConnection(options)


// try {
//     db.connect((err) => {
//         try {
//             if (err) {
//               throw err;
//             }
//             console.log("MySql Connected");
//         } catch (error) {
//             console.log(error);
//         }
//       });
    
// } catch (error) {
//     console.log(error);
// }
  
app.use(express.json())
app.use("/api",allRoutes)

app.get('/',async (req, res) =>{
    try {
        const data = await db.Users.findAll()
        console.log("Userssss", data);
        
    } catch (error) {
        console.log("Error",err);
    }
     res.send('Hello World!')
})

// app.use((next,req,res,err) => {
//     console.log("rrrrrRRRRR>>>>>>>>>>>>>>>>>>>",err);
//     res.send("error is there")
// })

app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))