const Model = require('../models/anuncioModels');

const getAll = async () => Model.getAll();

const publisher = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  if (!marca || !modelo || !versao || !ano || !quilometragem || !observacao) {
    return { error: 'Todos campos são requeridos' };
  }
  await Model.publisher(marca, modelo, versao, ano, quilometragem, observacao);

  return { marca, modelo, versao, ano, quilometragem, observacao };
};

module.exports = {
  getAll,
  publisher,
};
