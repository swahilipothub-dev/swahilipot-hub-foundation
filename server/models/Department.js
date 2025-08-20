import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;