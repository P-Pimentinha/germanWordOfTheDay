import express from 'express';
const router = express.Router();

import { createWord } from '../controllers/wordsController.js';

router.route('/').post(createWord);

export default router;
