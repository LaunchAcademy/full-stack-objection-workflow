import express from "express";
import clientRouter from "./clientRouter.js";
import catsRouter from "./api/v1/catsRouter.js";

const rootRouter = new express.Router(); //place your server-side routes here

rootRouter.use("/api/v1/cats", catsRouter)
rootRouter.use("/", clientRouter)

export default rootRouter;
