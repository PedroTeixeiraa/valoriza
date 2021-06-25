import { Router } from "express"

import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentController"
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentController"
import { ListTagsController } from "./controllers/ListTagsController"

import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate"
import { ListUsersController } from "./controllers/ListUsersController"

const router = Router()

const createUserController = new CreateUserController() 
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentController()
const listUserSendComplimentController = new ListUserSendComplimentController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticate, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiveComplimentController.handle)

router.get("/tags", ensureAuthenticate, listTagsController.handle)
router.get("/users", ensureAuthenticate, listUsersController.handle)

export { router }