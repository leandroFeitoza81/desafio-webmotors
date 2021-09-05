const Model = require('../models/announcementModels');
const httpResponse = require('../utils/httpResponse');

const readAllAnnouncement = async () => Model.readAllAnnouncement();

const readAnnouncementByID = async (id) => Model.readAnnouncementByID(id);

const createAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  if (!marca || !modelo || !versao || !ano || !quilometragem || !observacao) {
    return { error: httpResponse.BAD_REQUEST };
  }

  await Model.createAnnouncement(marca, modelo, versao, ano, quilometragem, observacao);

  return { marca, modelo, versao, ano, quilometragem, observacao };
};

const updateAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao, ID) => {
  if (!marca || !modelo || !versao || !ano || !quilometragem || !observacao) {
    return { error: httpResponse.BAD_REQUEST };
  }
  const announcementEdited = await Model.updateAnnouncement(
    marca,
    modelo,
    versao,
    ano,
    quilometragem,
    observacao,
    ID,
  );
  return announcementEdited;
};

const removeAnnouncement = async (id) => {
  const announcementRemoved = await Model.removeAnnouncement(id);
  return announcementRemoved;
};

module.exports = {
  readAllAnnouncement,
  readAnnouncementByID,
  createAnnouncement,
  updateAnnouncement,
  removeAnnouncement,
};
