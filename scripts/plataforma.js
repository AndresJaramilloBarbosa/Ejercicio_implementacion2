export class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canales = [];
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        //canal.agregarPlataforma(this)
    }
    mostrarDetalle() {
        console.log('Detalle de la plataforma:');
        console.log(`Nombre:${this.nombre}`);
        console.log(`Logo:${this.logo}`);
        console.log(`Descripcion:${this.descripcion}`);
        console.log(`Empresa:${this.empresa} ` + '\n\n');
    }
    mostrarCanales() {
        console.log('Canales: ');
        this.canales.forEach((canal) => {
            console.log(canal.nombre + '\n\n');
        });
    }
    mostrarListadoStreamer() {
        console.log('Streamers: ');
        this.canales.forEach((canal) => {
            console.log(canal.streamer.nickname + '\n\n');
        });
    }
}
