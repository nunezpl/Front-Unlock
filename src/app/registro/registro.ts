import { Evento } from "../evento/evento";
import { Usuario } from "../usuario/usuario";

export interface Registro{
    id:number;
    usuario: Usuario ;
    evento: Evento ;
    fechaRegistro: string;
    estadoPago: string;
}