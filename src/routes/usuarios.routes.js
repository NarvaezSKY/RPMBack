import { Router } from "express";
import { registroUsuario, obtenerUsuarios, eliminarUsuario, logOut, login} from "../controllers/user.controllers.js";

const router= Router();


router.post('/', registroUsuario)
router.get('/', obtenerUsuarios)
router.delete('/:id', eliminarUsuario)

router.post('/login',login )
router.post('/logOut',logOut )

export default router;