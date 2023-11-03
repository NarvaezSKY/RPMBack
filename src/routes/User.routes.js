import { Router } from "express";
import { RegisterUser,getAllUsers,Login,logout,Profile } from "../controllers/User.controller.js";

const router=Router();

router.post('/register',RegisterUser)
router.get('/',getAllUsers) 
router.post('/login',Login)
router.post('/logout',logout)
router.get('/profile/:id',Profile)

export default router