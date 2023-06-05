export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
        this.streams = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    mostrarDetalleStreamer() {
        console.log(`Detalle de un streamer: `);
        console.log(`Nickname: ${this.nickname}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Redes sociales: ${this.redesSociales}` + '\n\n');
    }
}
