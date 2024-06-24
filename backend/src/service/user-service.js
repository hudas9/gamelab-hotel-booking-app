import {
  loginUserValidation,
  registerUserValidation,
  updateUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  if (user.password !== user.confirmPassword) {
    throw new ResponseError(
      400,
      "Password and confirm password must be the same"
    );
  }

  const countUser = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(409, "Email already registered");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    select: {
      name: true,
      email: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email,
    },
    select: {
      email: true,
      role: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password wrong");
  }

  return jwt.sign(
    { email: user.email, name: user.name, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

const get = async (email) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return user;
};

const update = async (currentEmail, data) => {
  const user = validate(updateUserValidation, data);

  if (currentEmail !== user.email) {
    const countUser = await prismaClient.user.count({
      where: {
        email: user.email,
      },
    });

    if (countUser === 1) {
      throw new ResponseError(409, "Email already taken");
    }
  }

  const updatedUser = await prismaClient.user.update({
    where: {
      email: currentEmail,
    },
    data: {
      name: user.name,
      email: user.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  const newToken = jwt.sign(
    {
      email: updatedUser.email,
      name: updatedUser.name,
      role: updatedUser.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { updatedUser, newToken };
};

const getAllUsers = async () => {
  return prismaClient.user.findMany({
    select: {
      name: true,
      email: true,
      role: true,
    },
  });
};

export default { register, login, get, update, getAllUsers };
