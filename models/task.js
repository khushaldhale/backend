const mongoose = require("mongoose");



const taskSchema = new mongoose.Schema(
	{
		fname: {
			type: String,
			required: true
		},


		age: {
			type: Number,
			required: true
		},

		city: {
			type: String,
			required: true
		}
	}
)

module.exports = mongoose.model("TASK", taskSchema)