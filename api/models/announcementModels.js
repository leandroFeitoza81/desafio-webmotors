const connection = require('../database/connections');

const getAll = async () => {
  const [veiculos] = await connection.execute('SELECT * FROM teste_webmotors.tb_AnuncioWebmotors');
  return veiculos;
};

const createAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  const published = await connection.execute(
    'INSERT INTO teste_webmotors.tb_AnuncioWebmotors(marca, modelo, versao, ano, quilometragem, observacao) VALUES(?,?,?,?,?,?)',
    [marca, modelo, versao, ano, quilometragem, observacao],
  );
  return published;
};

const update = async (marca, modelo, versao, ano, quilometragem, observacao, ID) => {
  const result = await connection.execute(
    `UPDATE tb_AnuncioWebmotors SET marca=?, modelo=?, versao=?, ano=?, quilometragem=?, observacao=? WHERE ID=${ID}`,
    [marca, modelo, versao, ano, quilometragem, observacao],
  );
  return result;
};

const remove = async (id) => {
  const result = await connection.execute('DELETE FROM tb_AnuncioWebmotors WHERE ID = ?', [id]);
  return result;
};

module.exports = {
  getAll,
  createAnnouncement,
  update,
  remove,
};
