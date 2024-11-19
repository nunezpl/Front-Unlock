export interface Evento {
    id: number;
    nombre: string;
    imagen_url: string;
    ciudad: string;
    estado: string;
    fecha_hora: Date;
    precio: number;
    aforo_evento: number;
    status: string;
}