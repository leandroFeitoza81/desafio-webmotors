const connection = require('../database/connections');

const readAllAnnouncement = async () => {
  const [vehicles] = await connection.execute('SELECT * FROM tb_AnuncioWebmotors');
  return vehicles;
};

const readAnnouncementByID = async (id) => {
  const [vehicle] = await connection.execute('SELECT * FROM tb_AnuncioWebmotors WHERE ID = ?', [
    id,
  ]);
  return vehicle;
};

const createAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  const published = await connection.execute(
    'INSERT INTO teste_webmotors.tb_AnuncioWebmotors(marca, modelo, versao, ano, quilometragem, observacao) VALUES(?,?,?,?,?,?)',
    [marca, modelo, versao, ano, quilometragem, observacao],
  );
  return published;
};

const updateAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao, ID) => {
  const result = await connection.execute(
    `UPDATE tb_AnuncioWebmotors SET marca=?, modelo=?, versao=?, ano=?, quilometragem=?, observacao=? WHERE ID=${ID}`,
    [marca, modelo, versao, ano, quilometragem, observacao],
  );
  return result;
};

const removeAnnouncement = async (id) => {
  const result = await connection.execute('DELETE FROM tb_AnuncioWebmotors WHERE ID = ?', [id]);
  return result;
};

module.exports = {
  readAllAnnouncement,
  readAnnouncementByID,
  createAnnouncement,
  updateAnnouncement,
  removeAnnouncement,
};
