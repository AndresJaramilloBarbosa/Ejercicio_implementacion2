export class Stream {
    constructor(fecha, duracion, streamer) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.streamer = streamer;
        streamer.agregarStream(this);
        this.categorias = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
        categoria.agregarStream(this);
    }
    mostrarDetalleStream() {
        console.log(`Detalle de un stream: `);
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Duracion: ${this.duracion}`);
        console.log(`Streamer: ${this.streamer.nickname}`);
    }
}
