import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1699962604~exp=1699963204~hmac=537e41296999770fb3a692e2e88ccceda7113dc5cb6ee0aa7647bf2129adf5f8",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
