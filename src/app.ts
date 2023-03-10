import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { userRoutes } from "./routers/users";
import { loginRoute } from "./routers/login";
import { categoriesRoutes } from "./routers/categories";
import { realEstateRoutes } from "./routers/realEstate";
import { scheduleRoutes } from "./routers/schedules";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoute);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", scheduleRoutes);

app.use(handleErrors);
export default app;
