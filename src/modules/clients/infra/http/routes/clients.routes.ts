import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientsController.findById);

routes.put("/:id", ClientsController.edit);

routes.delete("/:id", ClientsController.delete);

export default routes;
