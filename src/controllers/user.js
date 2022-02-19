import User from "../models/Users";

export async function getAll(req, res) {
  try {
    const item = await User.findAll();
    res.json({ data: item });
  } catch (error) {
    console.log("error", error);
  }
}

export async function create(req, res) {
  console.log(req.body);
  try {
    let newItem = await User.create({
      name: "a name",
      age: 1,
      description: "a desc",
    });
    if (newItem) {
      res.json({
        message: "Success",
        data: newItem,
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
  res.send("received");
}
