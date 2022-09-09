import { LoginI } from './login.interface';
export interface ResponseI {
    isSuccess: boolean;
    message: string;
    login: string;
    usuario_Id: number;
    token: string;
    valor_Calificacion: number;
    perfil_Id: number;
    data: any;
}