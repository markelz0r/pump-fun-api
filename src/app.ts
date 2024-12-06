import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import pumpFunRoutes from "./routes/pumpFunRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/api/v1/pumpFun/", pumpFunRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || "Internal Server Error" });
});

export default app;