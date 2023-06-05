import { App } from "./app.js";
import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";

const twitch = new Plataforma('Twitch','twicth.com', 'plataforma de moda para hacer directos', 'Twich INC')
const facebookGaming = new Plataforma('Facebook Gaming','facebook.com', 'plataforma para hacer stream en FB', 'META')
const raulAuron = new Streamer('Auron', 'Soy un español que inicio los videos en Youtube', 'Twitter:AuronPlays')
const auronPlay = new Canal('AuronPlay', 'Holasoyauron.com', 'Streamer de nacionalidad española', raulAuron)
const disparos = new Categoria('Shooters', 'Juegos de primera persona', 'imagendisparos.com')
const streamauron1 = new Stream(new Date, 'Dos horas', raulAuron)

const aplicacion = new App(twitch);
aplicacion.agregarPlataforma(facebookGaming)

//1- Mostrar el Listado de plataformas
aplicacion.mostrarPlataforma()

//2- Mostrar el detalle de una plataforma
twitch.mostrarDetalle()

twitch.agregarCanal(auronPlay)

//3- Mostrar el listado de canales
twitch.mostrarCanales()

//4- Mostrar el detalle de un canal
auronPlay.mostrarDetalleCanal()

//5- Mostrar el listado de streamers
twitch.mostrarListadoStreamer()

//6- Ver el detalle de un streamer
raulAuron.mostrarDetalleStreamer()

//7- Mostrar listado de streams
disparos.agregarStream(streamauron1)
disparos.mostrarStreams()

//8- Mostrar detalle de un stream
streamauron1.mostrarDetalleStream()









