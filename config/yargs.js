const opts1 = {
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
};

//opción de yargs para configurar comandos directamente en la raíz de la aplicación "option"
const argv = require('yargs')
    .options(opts1)
    .argv;

module.exports = {
    argv
}