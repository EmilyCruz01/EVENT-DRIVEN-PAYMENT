import { Pago } from "../Pago";

export interface INotifiNewPago {
    sendNotification(pago:Pago):Promise<boolean>;
}