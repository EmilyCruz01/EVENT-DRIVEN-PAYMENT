import { json } from "stream/consumers";
import { Pago } from "../domain/Pago";
import { PagoRepository } from "../domain/PagoRepository";
import { NotificationPagoUseCase } from "./services/NotifiNewPago";
import { ISocket } from "../domain/services/ISocket";


export class CreatePagoUseCase{
    constructor(
        readonly PagoRepository:PagoRepository,
        readonly notification: NotificationPagoUseCase,
        readonly socket:ISocket
    ){}
    async run(
        orden:string,
        total:number
    ):Promise<Pago| null>{
        try {
            const pago = await this.PagoRepository.createPago(
                orden,
                total
            )
            if(pago)this.notification.run(pago)
            this.socket.emit("payment", pago);

            return pago;
        } catch (error) {
            return null;
        }
    }
}
