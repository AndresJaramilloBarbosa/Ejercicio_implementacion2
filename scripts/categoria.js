export class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.streams = [];
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    mostrarStreams() {
        console.log(`Listado de streams:`);
        this.streams.forEach((stream) => {
            console.log(stream.streamer.nickname);
            console.log(stream.fecha);
            console.log(stream.duracion + '\n\n');
        });
    }
}
