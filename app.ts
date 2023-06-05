import { Plataforma } from "./plataforma.js";

export class App{
    plataformas:Plataforma[]

    constructor(plataforma:Plataforma){
        if(plataforma){
            this.plataformas = [plataforma]
            plataforma.agregarAplicacion(this)
        }else{
            this.plataformas = []
        }  
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataformas.push(plataforma)
        plataforma.agregarAplicacion(this)
    }

    mostrarPlataforma(){
        console.log('Plataformas:')
        this.plataformas.forEach((plataforma) => {
            console.log(plataforma.nombre + '\n\n')
        })
    }


}