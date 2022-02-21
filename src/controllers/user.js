import User from "../models/Users";

export async function deleteUser(req, res) {
  try {
    const item = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.json({ message: "Error trying to delete an user" });
  }
}

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
    let newItem = await User.create(req.body);
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
}

export async function modifyUser(req, res) {
  try {
    const item = await User.updateAttributes(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "changed" });
  } catch (error) {
    res.json({ message: "Error trying to change an user" });
  }
}
