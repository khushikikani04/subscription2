
// import mongoose, { } from "mongoose";

// const userSchema = new mongoose.Schema({
//     name : {
//         type: String,
//         required: false,
//         trim: true,
//         minLength: 2,
//         maxLength: 50,
//     },
//     email: {
//         type: String,
//         required: [true, 'user email is required'],
//         unique: true,
//         trim: true,
//         lowercase: true,
//         match: [/\S+@\S+\.\S+/, 'please fill a valid email address'],
//     },
//     password: {
//         type: String,
//         required: [true, 'User Password is required'],
//         minLength: 6,
//     }
//    },  { timestamps: true});

// const User = mongoose.model('User', userSchema);

// export default User;


import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "User email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: [true, "User Password is required"],
    minLength: 6,
  },
}, { timestamps: true });

// ✅ Password ko hash karne ka middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// ✅ Password compare karne ka helper method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
