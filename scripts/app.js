export class App {
    constructor(plataforma) {
        if (plataforma) {
            this.plataformas = [plataforma];
            plataforma.agregarAplicacion(this);
        }
        else {
            this.plataformas = [];
        }
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarAplicacion(this);
    }
    mostrarPlataforma() {
        console.log('Plataformas:');
        this.plataformas.forEach((plataforma) => {
            console.log(plataforma.nombre + '\n\n');
        });
    }
}
