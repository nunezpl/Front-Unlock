import { Alojamiento } from "../alojamiento/alojamiento";
import { Evento } from "../evento/evento";
import { Usuario } from "../usuario/usuario";

export interface Acceso{
    id:number;
    usuario: Usuario ;
    alojamiento?: Alojamiento ;
    evento?: Evento ;
    tipoAcceso: string;
    fechaAcceso: string;
}