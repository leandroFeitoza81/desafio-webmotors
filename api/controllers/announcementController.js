const Service = require('../services/announcementService');
const httpResponse = require('../utils/httpResponse');
const statusCode = require('../utils/statusCode');

const getAnuncios = async (req, res) => {
  const result = await Service.getAll();
  res.status(200).json(result);
};

const createAnnouncement = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;

    const result = await Service.createAnnouncement(
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      observacao,
    );
    if (result.error) {
      return res.status(statusCode.BAD_REQUEST).json(result.error);
    }
    res.status(statusCode.OK).json(result);
  } catch (e) {
    console.log(e);
    res.status(statusCode.INTERNAL_SERVER_ERROR).json(httpResponse.SERVER_ERROR.message);
  }
};

const update = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const { id } = req.params;
    const ID = parseInt(id, 10);

    const result = await Service.update(marca, modelo, versao, ano, quilometragem, observacao, ID);
    return res.status(httpResponse.OK.code).json(result);
  } catch (e) {
    console.log(e);
    res.status(httpResponse.SERVER_ERROR.code).json(httpResponse.SERVER_ERROR.message);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await Service.remove(id);
    res.status(httpResponse.NO_CONTENT.code).json(httpResponse.NO_CONTENT.message);
  } catch (e) {
    console.log(e);
    res.status(httpResponse.SERVER_ERROR.code).json(httpResponse.SERVER_ERROR.message);
  }
};

module.exports = {
  getAnuncios,
  createAnnouncement,
  update,
  remove,
};
