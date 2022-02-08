import { Router } from "express";
import OrdersController from "../controllers/OrdersController";

const routes = Router();

routes.post("/", OrdersController.create);

routes.get("/", OrdersController.list);

routes.get("/:id", OrdersController.findById);

routes.get("/cliente/:id", OrdersController.findByClientId);

routes.put("/:id", OrdersController.update);

export default routes;
