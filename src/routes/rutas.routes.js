import { Router } from "express";
const router= Router();

import {registroRuta, obtenRutas, eliminaRutas  } from "../controllers/ruta.controllers.js";


import { validate } from "../middlewares/validateToke.js";

router.get('/', validate,obtenRutas)
router.post('/' , validate,registroRuta)
router.delete('/:id',eliminaRutas )



export default router;