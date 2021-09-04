const connection = require('../database/connections');

const getAll = async () => {
  const [veiculos] = await connection.execute('SELECT * FROM teste_webmotors.tb_AnuncioWebmotors');
  return veiculos;
};

const publisher = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  const published = await connection.execute(
    'INSERT INTO teste_webmotors.tb_AnuncioWebmotors(marca, modelo, versao, ano, quilometragem, observacao) VALUES(?,?,?,?,?,?)',
    // eslint-disable-next-line comma-dangle
    [marca, modelo, versao, ano, quilometragem, observacao]
  );
  return published;
};

module.exports = {
  getAll,
  publisher,
};
