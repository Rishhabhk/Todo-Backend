//import the model
const Todo = require("../models/Todo");

//define route handler
exports.getTodos = async (req, res) => {
    try {
        //fetch all todos from db
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "all todos are fetched"
        })
    }
    catch (err) {
      console.error(err);
      res.status(500)
      .json({
        success: false,
        error: err.message,
        message: "server error"
      })
    }
}




exports.getTodoById = async (req, res) => {
  try {
      //getting id
      const id = req.params.id;
      const todo = await Todo.findById({_id: id})

      //if data not found
      if(!todo){
        return res.status(404)
        .json({
          success:false,
          message: "No data found for given id"
        })
      }

      //data found
      res.status(200)
      .json({
        success:true,
        data: todo,
        message: `Todo ${id} data successfully found`
      })

      
  }
  catch (err) {
    console.error(err);
    res.status(500)
    .json({
      success: false,
      error: err.message,
      message: "server error"
    })
  }
}