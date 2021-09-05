const Model = require('../models/anuncioModels');

const getAll = async () => Model.getAll();

const publisher = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  if (!marca || !modelo || !versao || !ano || !quilometragem || !observacao) {
    return { error: 'Todos campos são requeridos' };
  }
  await Model.publisher(marca, modelo, versao, ano, quilometragem, observacao);

  return { marca, modelo, versao, ano, quilometragem, observacao };
};

const update = async (marca, modelo, versao, ano, quilometragem, observacao, ID) => {
  const result = await Model.update(marca, modelo, versao, ano, quilometragem, observacao, ID);
  return result;
};

const remove = async (id) => {
  const result = await Model.remove(id);
  return result;
};

module.exports = {
  getAll,
  publisher,
  update,
  remove,
};
