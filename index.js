const express = require("express");
const app = express();

require("dotenv").config()


app.use(express.json());


const cors=require("cors");

app.use(cors({
	origin:"http://localhost:3000"
}))

// basically in which folder my static content lies 

app.use(express.static("public"))




app.get("/", (req, res) => {
	return res.status(200)
		.json(
			{
				success: true,
				message: "server is up and running"
			}
		)
})

const dbConnect = require('./config/database');
dbConnect()



const taskRoutes = require("./routes/taskRoutes");
app.use("/api/v1", taskRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log("server is listening at PORT", PORT)
})


// steps to serve static files 
// 1. create the folder,  name of folder shouldbe public 
// 2.  create the static files like index.html in that flder
// 3. import the kiddlewares ad execute that

// aap.use(express.static("public"))  this middleware should be imported 
 
// public, like public we have to specify folder name in which our staic files are placed