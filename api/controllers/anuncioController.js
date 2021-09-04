const Service = require('../services/anuncioService');

const getAnuncios = async (req, res) => {
  const result = await Service.getAll();
  res.status(200).json(result);
};

const publisher = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const result = await Service.publisher(marca, modelo, versao, ano, quilometragem, observacao);
    if (result.error) {
      return res.status(400).json(result.error);
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'ERRO' });
  }
};

module.exports = {
  getAnuncios,
  publisher,
};
