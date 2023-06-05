import { Categoria } from "./categoria.js"
import { Streamer } from "./streamer.js"

export class Stream{
    fecha:Date
    duracion:string
    streamer:Streamer
    categorias:Categoria[]

    constructor(fecha:Date, duracion:string, streamer:Streamer){
        this.fecha = fecha
        this.duracion = duracion
        this.streamer = streamer
        streamer.agregarStream(this)
        this.categorias = []
    }

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
        categoria.agregarStream(this)
    }

    mostrarDetalleStream(){
        console.log(`Detalle de un stream: `)
        console.log(`Fecha: ${this.fecha}`)
        console.log(`Duracion: ${this.duracion}`)
        console.log(`Streamer: ${this.streamer.nickname}`)
        
    }

}