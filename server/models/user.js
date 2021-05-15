const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "First name is required."],
    },

    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
