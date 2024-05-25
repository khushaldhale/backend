const mongoose = require("mongoose");


const dbConnect = () => {
	mongoose.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then((data) => {
			console.log("connection is established at ", data.connection.host)
		})
		.catch((error) => {
			console.log("DB connection resfused ", error)
		})
}

module.exports = dbConnect