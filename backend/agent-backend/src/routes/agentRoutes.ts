import express from 'express';
import { AgentController } from '../controllers/agentController';
import { auth } from '../middlewares/auth';
import { validate } from '@linerra/system/src/middlewares/validate';
import { signUpSchema, signInSchema } from '@linerra/system/src/utils/validationSchemas';

const router = express.Router();
const agentController = new AgentController();

router.post('/signUp', validate(signUpSchema), agentController.signUp);
router.post('/signIn', validate(signInSchema), agentController.signIn);
router.get('/getUserInfo', auth, agentController.getUserInfo);

export default router;
