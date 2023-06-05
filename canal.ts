import { Plataforma } from "./plataforma.js"
import { Streamer } from "./streamer.js"

export class Canal{
    nombre:string
    banner:string
    descripcion:string
    plataformas:Plataforma[]
    streamer:Streamer

    constructor(nombre:string, banner:string, descripcion:string, streamer:Streamer){
        this.nombre = nombre
        this.banner = banner
        this.descripcion = descripcion
        this.streamer = streamer
        streamer.agregarCanal(this)
        this.plataformas = []
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataformas.push(plataforma)
        plataforma.agregarCanal(this)
    }

    mostrarDetalleCanal(){
        console.log(`Detalle de un canal:`)
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Banner: ${this.banner}`)
        console.log(`Descripcion: ${this.descripcion}` + '\n\n')
    }

}