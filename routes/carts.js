import { Router } from 'express';
import { getBooks } from '../controllers/carts.js';

const router = Router();

router.get('/', getBooks);

export default router;
