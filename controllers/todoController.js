import tododbtest from "../models/todoModel.js";

const getTodos = async (req, res) => {
  try {
    const todos = await tododbtest.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new tododbtest({
    title,
    description,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  let updatedTodo = null;

  try {
    title == undefined || description == undefined
      ? (updatedTodo = await tododbtest.findByIdAndUpdate(id, {
          status,
        }))
      : (updatedTodo = await tododbtest.findByIdAndUpdate(id, {
          title,
          description,
        }));

    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await tododbtest.findByIdAndDelete(id);
    res.json({ message: "todo deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
