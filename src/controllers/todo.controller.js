import { Todo } from "../models/todo.model.js";

/* CREATE TODO */
export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* GET ALL TODOS */
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* UPDATE TODO */
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* DELETE TODO */
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
