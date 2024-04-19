import { Pago } from "./Pago";

export interface PagoRepository{
    createPago(
        orden:string,
        total:number
    ):Promise<Pago|null>
}