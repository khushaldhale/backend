const taskSchema = require("../models/task");



exports.createTask = async (req, res) => {
	try {



		const response = await taskSchema.create(req.body);

		return res.status(200)
			.json({
				success: true,
				message: "task is created succesfuly",
				data: response

			})

	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json(
				{
					success: false,
					message: "Internal error occured"
				}
			)
	}
}


// mongodb operators 
// comparison operators 

// $eq :  whenever we haveto match somethinhg and return that docuemnt 
// $ne : match the docuemnet and return all the other document exceot that doc 
// $gt  : greater than  the value 
// $gte : graeter than and equal to 
// $lt : less than 
// $lte : less than  equal to 
// $in :  provides an array , and rerurn doc where at least one element/value matches 
// $nin :   it is oposite of $in


// logical operatosrs 



// $and : all codnition true 
// $or : even if the one condition is true still works 
// $not  : negates the output of the condition
// $nor :   gives all doc  where multiple condition specifoed does not match




exports.getAllTask = async (req, res) => {
	try {
		//   age:10    // key: { operator: value for that }
		// const response = await taskSchema.find({ age: { $nin: [15, 6] } });
		// const response = await taskSchema.find({ $or: [{ taskName: "Task-5" }, { age: 55 }] });
		// const response = await taskSchema.find({ $nor: [{ taskName: "Task-5" }, { age: 55 }] });
		// const response = await taskSchema.find({ $and: [{ taskName: "Task-5" }, { age: { $not: { $eq: 54 } } }] });

		// { 
		// 	$group: { 
		// 	  _id: "$cust_id", 
		// 	  total: { $sum: "$amount" } 
		// 	} 
		//   }


		// db.sales.aggregate([
		// 	{
		// 	  $group: {
		// 		_id: "$product",
		// 		totalAmount: { $sum: "$amount" },
		// 		minAmount: { $min: "$amount" },
		// 		maxAmount: { $max: "$amount" },
		// 		averageAmount: { $avg: "$amount" },
		// 		count: { $sum: 1 }
		// 	  }
		// 	}
		//  ])


		// db.sales.aggregate([
		// 	{ $match: { product: "A" } },
		// 	{ $count: "totalDocuments" }
		//  ])




		// const response = await taskSchema.aggregate([{ $match: {} }, { $group: { _id: "$city", totalage: { $sum: "$age" } } }])

		const response = await taskSchema.find({})

		// $match and $group 
		//$match it is used for filtration purpose and $group it is used for griuping
		// { $match: { city: "pune" } }   filtration specified 
		// const response = await taskSchema.aggregate([{ $group: { _id: "$city", totalage: { $max: "$age" } } }])
		return res.status(200)
			.json({
				success: true,
				message: "all tasks are fetched",
				data: response
			})

	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json(
				{
					success: false,
					message: "Internal error occured",

				}
			)
	}
}



exports.updateTask = async (req, res) => {
	try {
		const { taskName, taskDeadline, taskDesc, _id } = req.body;

		if (!taskName || !taskDeadline || !taskDesc || !_id) {
			return res.status(404)
				.json({
					success: false,
					message: "please provide all details"
				})
		}

		const response = await taskSchema.findByIdAndUpdate({ _id }, { taskName, taskDeadline, taskDesc }, { new: true })

		return res.status(200)
			.json({
				success: true,
				message: "Task is updated succesfully",
				data: response
			})
	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json(
				{
					success: false,
					message: "Internal error occured"
				}
			)
	}
}

exports.deleteTask = async (req, res) => {
	try {

		const _id = req.body._id;

		if (!_id) {
			return res.status(404)
				.json({
					success: false,
					message: "please provide an ID"
				})
		}
		const response = await taskSchema.findByIdAndDelete({ _id })

		return res.status(200)
			.json({
				success: true,
				message: "task is deleted succesfully ",
				data: response
			})
	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json(
				{
					success: false,
					message: "Internal error occured"
				}
			)
	}
}