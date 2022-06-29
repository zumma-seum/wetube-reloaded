import express from "express";

const PORT = 4000;
const app = express();

const routerLogger = (req, res, next) => {
    console.log("path: ", req.path);
    next();
};
const methodLogger = (req, res, next) => {
    console.log("method: ", req.method);
    next();
};
const home = (req, res) => res.send("home");
const login = (req, res) => res.send("login");

app.use(methodLogger, routerLogger);
app.get("/",home);
app.get("/login",login );

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);