import mongoose, { Document, Schema } from "mongoose";
export interface IWorkspace extends Document {
  user: mongoose.Types.ObjectId;
  bio?: string;
  profilePicture?: string;
  branding?: string;
  courses?: mongoose.Types.ObjectId[];
  subdomain?: string;
}

const workspaceSchema: Schema<IWorkspace> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    bio: { type: String, default: '' },
    profilePicture: { type: String, default: '' },
    branding: {
      type: String,
      default: "Default Branding",
    },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    subdomain: {
      type: String,
      sparse: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Workspace = mongoose.model<IWorkspace>('Workspace', workspaceSchema);

export default Workspace;
