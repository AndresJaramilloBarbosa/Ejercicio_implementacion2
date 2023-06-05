export class Canal {
    constructor(nombre, banner, descripcion, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streamer = streamer;
        streamer.agregarCanal(this);
        this.plataformas = [];
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarCanal(this);
    }
    mostrarDetalleCanal() {
        console.log(`Detalle de un canal:`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Descripcion: ${this.descripcion}` + '\n\n');
    }
}
