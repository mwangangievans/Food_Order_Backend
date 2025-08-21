import Express from "express";
import { VandorRoute } from "./routes/VandorRoute";
import { AdminRoute } from "./routes/AdminRoute";
import BodyParser from "body-parser";
import mongoose from "mongoose";

const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.use('/vandor', VandorRoute);
app.use('/admin', AdminRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});