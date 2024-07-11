import mongoose from "mongoose";

const todoShema = new mongoose.Schema({
    todo: {
        type: String,
        maxLength: [20, "Only 20 characters allowed"],
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model("Todo", todoShema);

export default Todo;