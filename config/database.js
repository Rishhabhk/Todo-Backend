const mongooose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongooose.connect(process.env.DATABASE_URL)
    .then(() => console.log("connection successfull"))
    .catch((error) => {
        console.log("db not connected");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;