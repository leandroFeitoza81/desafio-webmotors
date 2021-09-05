const Model = require('../models/announcementModels');
const httpResponse = require('../utils/httpResponse');

const getAll = async () => Model.getAll();

const createAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  if (!marca || !modelo || !versao || !ano || !quilometragem || !observacao) {
    return { error: 'Campos obrigatorios' };
  }
  await Model.createAnnouncement(marca, modelo, versao, ano, quilometragem, observacao);

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
  createAnnouncement,
  update,
  remove,
};
