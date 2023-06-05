import { Stream } from "./stream.js"

export class Categoria{
    nombre:string
    descripcion:string
    imagen:string
    streams:Stream[]

    constructor(nombre:string, descripcion:string, imagen: string){
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.streams = []
    }

    agregarStream(stream:Stream){
        this.streams.push(stream)
    }

    mostrarStreams(){
        console.log(`Listado de streams:`)
        this.streams.forEach((stream) => {
            console.log(stream.streamer.nickname)
            console.log(stream.fecha)
            console.log(stream.duracion + '\n\n')
        })
    }

}