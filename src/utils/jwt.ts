import { config } from "../config/app.config";
import { UserDocument } from "../models/user.model";
import { SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export type AccessPayload = {
  userId: UserDocument["_id"];
};

type SignOptsAndSecret = SignOptions & {
  secret: string;
  expiresIn: SignOptions["expiresIn"];
};

const defaults: SignOptions = {
  audience: ["user"],
};

export const accessTokenSignOptions: SignOptsAndSecret = {
  secret: config.JWT_SECRET,
  expiresIn: config.JWT_EXPIRES_IN as SignOptions["expiresIn"],
};

export const signJwtToken = (
  payload: AccessPayload,
  options?: SignOptsAndSecret
) => {
  const { secret, ...opts } = options || accessTokenSignOptions;
  return jwt.sign(payload, secret, {
    ...defaults,
    ...opts,
  });
};
