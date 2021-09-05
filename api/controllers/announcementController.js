const Service = require('../services/announcementService');
const httpResponse = require('../utils/httpResponse');
const statusCode = require('../utils/statusCode');

const readAllAnnouncement = async (req, res) => {
  try {
    const vehicles = await Service.readAllAnnouncement();
    res.status(statusCode.OK).json(vehicles);
  } catch (e) {
    console.log(e);
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(httpResponse.SERVER_ERROR);
  }
};

const readAnnouncementByID = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Service.readAnnouncementByID(id);
    res.status(statusCode.OK).json(vehicle);
  } catch (e) {
    console.log(e);
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(httpResponse.SERVER_ERROR);
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;

    const announcement = await Service.createAnnouncement(
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      observacao,
    );
    console.log(announcement);
    if (announcement.error) {
      return res.status(statusCode.BAD_REQUEST).json(announcement.error);
    }
    res.status(statusCode.NOT_CONTENT).json(httpResponse.NOT_CONTENT);
  } catch (e) {
    console.log(e);
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(httpResponse.SERVER_ERROR);
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const { id } = req.params;
    const ID = parseInt(id, 10);

    const announcementEdited = await Service.updateAnnouncement(
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      observacao,
      ID,
    );

    if (announcementEdited.error) {
      return res.status(statusCode.BAD_REQUEST).json(announcementEdited.error);
    }

    return res.status(statusCode.NOT_CONTENT).json(httpResponse.NOT_CONTENT);
  } catch (e) {
    console.log(e);
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(httpResponse.SERVER_ERROR);
  }
};

const removeAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    await Service.removeAnnouncement(id);
    res.status(statusCode.NOT_CONTENT).json(httpResponse.NOT_CONTENT);
  } catch (e) {
    console.log(e);
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(httpResponse.SERVER_ERROR);
  }
};

module.exports = {
  readAllAnnouncement,
  readAnnouncementByID,
  createAnnouncement,
  updateAnnouncement,
  removeAnnouncement,
};
