import express from 'express';
const router = express.Router();

import { createWord, getWords } from '../controllers/wordsController.js';

router.route('/').post(createWord).get(getWords);

export default router;
