import Word from '../models/Word.js';

const createWord = async (req, res) => {
  const { wort, word } = req.body;

  const words = await Word.create(req.body);
  res.status(201).json({ words });
};

export { createWord };
