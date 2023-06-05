import { App } from "./app.js"
import { Canal } from "./canal.js"

export class Plataforma{

    nombre:string
    logo:string
    descripcion:string
    empresa:string
    aplicacion:App | undefined
    canales:Canal[]

    constructor(nombre:string, logo:string, descripcion:string, empresa:string){
        this.nombre = nombre
        this.logo = logo
        this.descripcion = descripcion
        this.empresa = empresa
        this.canales = []
    }

    agregarAplicacion(aplicacion:App){
        this.aplicacion = aplicacion
    }

    agregarCanal(canal:Canal){
        this.canales.push(canal)
        //canal.agregarPlataforma(this)
    }

    mostrarDetalle(){
        console.log('Detalle de la plataforma:')
        console.log(`Nombre:${this.nombre}`)
        console.log(`Logo:${this.logo}`)
        console.log(`Descripcion:${this.descripcion}`)
        console.log(`Empresa:${this.empresa} ` + '\n\n') 
    }

    mostrarCanales(){
        console.log('Canales: ')
        this.canales.forEach((canal) => {
            console.log(canal.nombre + '\n\n')
        })
    }

    mostrarListadoStreamer(){
        console.log('Streamers: ')
        this.canales.forEach((canal) => {
            console.log(canal.streamer.nickname + '\n\n')
        })
    }

}