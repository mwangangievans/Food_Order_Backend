import Express from "express";

const app = Express();

app.use('/', (req: any, res: any) => {
    return res.json("Hello Mwangangi welcome to node development!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});