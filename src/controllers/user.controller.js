const service = require("../services/user.service");

const addUSer = async (req, res) => {
  const data_user = req.body;
  const data = await service.add(data_user);
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(403).json("NOT ALLOWED");
};

const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    const data = service.getAll();
    return res.status(200).json(data);
  }
  const data = service.getSingle(id);
  return res.status(200).json(data);
};

const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

const controller = { addUSer, getUser };
module.exports = controller;
