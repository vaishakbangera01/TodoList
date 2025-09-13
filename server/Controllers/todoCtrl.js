const Todo = require("../Model/todo");


const createToDo = async (req, res)=> {
    const { message } = req.body;

    if (req.body.message === "") {
        return res.status(401).json({ errorMessage: "Message cannot be empty"});
        }
    
    // Validation : check if message is empty or does not meet the lenght requirements
    if ( message.lenght < 4 || message.lenght >20 ) {
        return res
        .status(400)
        .json({ errorMessage: "Message must be between 4 and 20 characters."});
    }
    try {
        const addToDo = await Todo.create({ message });
        res.status(200).json({ success: "created", data: addToDo });
    } catch ( error ) {
        console.log( error );
        res.status(500).json({ error: "Internal server Error"});
    }
 };
 const getAllToDo = async (req, res) => {
    try {
        const getToDo = await Todo.find({});
        res.status(200).json({ data: getToDo });
    } catch (error) {
        console.log(error);
    }
 };

//  When you see an empty {} object passed to the .find() method, it means that the funcation is requesting all the documents from the collections.

const deleteToDo = async(req,res) => {
    try {
        const deleted = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: "deleted", data: deleted });
    } catch (error) {
        console.log(error);
    }
};

// findByIdAndDelete(): This is a Mongoose method that performs two actions in one step:
// Find a document by its_id fields.
// Delete that documents from the collection.

// req.paramas.id refers to the ID og ToDo iteam that you want to delete, which is passed in the URL. for example, if the route is /
// delete/:id, req.params.id will contain the value of that id.

// A client make a request to an endpoint like:
// DELETE /todo/12345abcdef
// where 12345abcdef is the Id og the ToDo to be Deleted.

const updateToDo = async(req, res) => {
    try {
        const updatedToDo = await Todo.findByIdAndUpdate(
            req.params.id,
           {
            message: req.body.message,
           },
           {new: true}
        );
        if(updatedToDo) {
            res.json({ success: "updated", data: updatedToDo});
        } else {
            res.status (404).json({ error: "ToDo not found"});
        }
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

// { new: true }: this option tells mongoose to return to upadated documents instead of the old me. Without { new: true }, mongoose
// wont return the document as it was before the upadate.
// This ensures that the newly upadate versionof the document is returned

module.exports = {
    createToDo, 
    // if you want to export all the funcationsa, then you have to use brackers.
    getAllToDo,
    updateToDo,
    deleteToDo,
};