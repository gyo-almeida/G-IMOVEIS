import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { userRoutes } from "./routers/users";
import { loginRoute } from "./routers/login";
import { categoriesRoutes } from "./routers/categories";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoute);
app.use("/categories", categoriesRoutes);

app.use(handleErrors);
export default app;
