const argv = require('yargs').options ({
    direccion: {
        alias: 'd',
        desc: 'direccion para obtener la info del clima',
        demand: true
    }
})
.help()
.version()
.argv

module.exports = {
    argv,
}