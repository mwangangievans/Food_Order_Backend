import Express from "express";
import { VandorRoute } from "./routes/VandorRoute";
import { AdminRoute } from "./routes/AdminRoute";
import BodyParser from "body-parser";
import mongoose from "mongoose";
import { MONGO_URL } from "./config";

const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.use('/vandor', VandorRoute);
app.use('/admin', AdminRoute);

mongoose.connect(MONGO_URL)
    .then((result) => {
        // console.log("✅ Connected to MongoDB", result);

        console.log("✅ Connected to MongoDB");
    })
    .catch((error) => {
        console.error("❌ MongoDB connection error:", error);
    });


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});