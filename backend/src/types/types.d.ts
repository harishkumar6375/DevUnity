import { JwtPayload } from "jsonwebtoken";
import express from "express";
import { Document, Types } from "mongoose";

interface JwtPayload extends JwtPayload {
  _id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      file?: any;
    }
  }
}
interface IVerification {
  verified: boolean;
  expiresAt: NativeDate;
  token: string;
}
interface IUser extends Document {
  _id: Types.ObjectId;
  rooms: Types.ObjectId[];
  email: string;
  username: string;
  name?: string;
  password: string;
  resetPassword: {
    token: string | null;
    expiresAt: NativeDate | null;
  };
  verification: IVerification;
  avatar: {
    secure_url: string | null;
    public_id: string | null;
  };
  updatedAt: NativeDate;
  createdAt: NativeDate;
  comparePassword: (token: string) => Promise<boolean>;
  genJwt: () => string | false;
}
interface IRoom extends Document {
  _id: Types.Objectid;
  roomId: string;
  password: string;
  admin: Types.ObjectId;
  participents: Types.ObjectI[];
  discussion: Types.ObjectId;
  project: {
    title: string;
    slogan?: string;
    description?: string;
    lang: "js" | "ts" | "py" | "cpp" | "c";
    code?: string;
  };
  createdAt: NativeDate;
  updatedAt: NativeDate;
}

interface IMessage {
  message: string;
  sender: Types.ObjectId;
}
interface IDiscussion {
  _id: Types.ObjectId;
  admin: Types.ObjectId;
  room: Types.ObjectId;
  chat: TMessage[];
  createdAt: NativeDate;
  updatedAt: NativeDate;
}