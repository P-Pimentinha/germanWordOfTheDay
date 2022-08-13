import Word from '../models/Word.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createWord = async (req, res) => {
  const { wort, word } = req.body;

  if (!wort || !word) {
    throw new BadRequestError('Please Provide All Values');
  }

  const words = await Word.create(req.body);
  res.status(StatusCodes.CREATED).json({ words });
};

export { createWord };
