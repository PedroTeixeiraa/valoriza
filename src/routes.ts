import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"

const router = Router()

const createUserController = new CreateUserController() 
const createTagController = new CreateTagController()

// USERS
router.post("/users", createUserController.handle)

// TAGS
router.post("/tags", createTagController.handle)

export { router }