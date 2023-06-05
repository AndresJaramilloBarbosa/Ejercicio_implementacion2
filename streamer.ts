import { Canal } from "./canal.js"
import { Stream } from "./stream.js"

export class Streamer{
    nickname:string
    descripcion:string
    redesSociales:string
    canales:Canal[]
    streams:Stream[]

    constructor(nickname:string, descripcion:string, redesSociales:string){
        this.nickname = nickname
        this.descripcion = descripcion
        this.redesSociales = redesSociales
        this.canales = []
        this.streams = []
    }

    agregarCanal(canal:Canal){
        this.canales.push(canal)
    }
    agregarStream(stream:Stream){
        this.streams.push(stream)
    }

    mostrarDetalleStreamer(){
        console.log(`Detalle de un streamer: `)
        console.log(`Nickname: ${this.nickname}`)
        console.log(`Descripcion: ${this.descripcion}`)
        console.log(`Redes sociales: ${this.redesSociales}` + '\n\n')
    }
    

}