import express from "express";
import userController from "../controller/user-controller.js";
import healthController from "../controller/health-controller.js";
import hotelController from "../controller/hotel-controller.js";
import paymentController from "../controller/payment-controller.js";

const publicRouter = new express.Router();

// User routes
publicRouter.post("/api/users/register", userController.register);
publicRouter.post("/api/users/login", userController.login);

// Health check route
publicRouter.get("/ping", healthController.ping);

// Hotel routes
publicRouter.get("/api/hotels", hotelController.getAllHotels);
publicRouter.get("/api/hotel/:id", hotelController.getHotelById);
publicRouter.get("/api/hotels/:city", hotelController.getHotelByCity);
publicRouter.get("/api/featured-cities", hotelController.getFeaturedCities);

publicRouter.post("/api/payment/status", paymentController.verifyPayment);

export { publicRouter };
