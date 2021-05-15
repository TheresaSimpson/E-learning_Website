import User from "../models/User";

export const allUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  const users = await User.findById(id);
  res.status(200).json({ users });
};

export const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const users = await User.create({ fullName, email, password });
  res.status(201).json({ users });
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id);
  res.status(200).json({ user });
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.status(200).send("User Deleted.");
};
