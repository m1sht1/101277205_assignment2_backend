const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
var validate_email = function (email) {
  var result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return result.test(email);
};

const Employee_Schema = mongoose.Schema(
  {
    _id: Number,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: {
      type: String,
      required: true,
      validate: [validate_email, "Invalid email address"],
    },
  },
  { _id: false },
  {
    timestamps: true,
  }
);
Employee_Schema.plugin(AutoIncrement);
module.exports = mongoose.model("Employee", Employee_Schema);
