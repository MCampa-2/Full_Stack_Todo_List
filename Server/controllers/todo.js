import Todo from "../models/todoShema.js"

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        if (!todos.length) {
            console.error("No todos found");
            return res.status(404).json({ msg: "No todos found" });
        }
        console.log(todos);
        res.status(200).json(todos);
    } catch (error) {
        console.error("No todos found");
        res.status(500).json({ msg: error.message });
    }
};

export const getTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
        if (!todo) {
            console.log("Todo not found")
            return res.status(404).json({ msg: "Todo not found" });
        }
        console.log("This is the todo you got", todo);
        res.status(200).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};

export const createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);
        console.log("You successfully created a todo!");
        res.status(201).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findByIdAndDelete(todoId);
        if (!todo) {
            console.log("Could not delete todo")
            return res.status(404).json({ msg: "Todo not found to delete" });
        }
        console.log("You've successfully deleted todo");
        res.status(200).json({ msg: `You've successfully deleted todo with the id of: ${todoId}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const { todo, completed } = req.body; // Destructure `todo` from the request body


        const updatedTodo = await Todo.findByIdAndUpdate(todoId,{todo, completed}, { new: true });
        
        if (!updatedTodo) {
            console.log("Could not update todo");
            return res.status(404).json({ msg: "Todo not found to update" });
        }

        console.log("You successfully updated todo");
        res.status(200).json(updatedTodo); // Return the updated todo
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};
