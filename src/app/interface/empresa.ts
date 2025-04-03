export interface Empresa {

    idEmpresa: number;
    cif: string;
     nombre: string;
    direccion: string;
    pais: string;
    usuario: {
        email: string;
        nombre: string;
        apellidos: string;
    };
    
}
