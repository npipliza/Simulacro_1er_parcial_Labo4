export class Pelicula {
    public id: number;
    public nombre: string;
    public tipo: string;
    public fechaDeEstreno: string;
    public cantidadDePublico: number;
    public fotoDeLaPelicula: string;

    constructor(id:number,nombre:string,tipo:string,fechaDeEsteno:string,cantidadDePublico:number,fotoDeLaPelicula:string){
        this.id                = id;
        this.nombre            = nombre;
        this.tipo              = tipo;
        this.fechaDeEstreno    = fechaDeEsteno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula  = fotoDeLaPelicula;
    }
}
