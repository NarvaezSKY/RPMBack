import { Router } from "express";
const router= Router();

import {registroRuta, obtenRutas, eliminaRutas  } from "../controllers/ruta.controllers.js";


router.get('/', obtenRutas)
router.post('/', registroRuta)
router.delete('/:id',eliminaRutas )



export default router;