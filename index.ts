import Express from "express";
import { VandorRoute } from "./routes/VandorRoute";
import { AdminRoute } from "./routes/AdminRoute";

const app = Express();

app.use('/vandor', VandorRoute);
app.use('/admin', AdminRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});