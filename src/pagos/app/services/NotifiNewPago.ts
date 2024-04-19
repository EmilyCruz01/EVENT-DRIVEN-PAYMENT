import { NotifiNewPago} from "../../infrastructure/services/NotifiNewPago";
import { Pago } from "../../domain/Pago";

export class NotificationPagoUseCase{
    constructor(readonly serviceNotification:NotifiNewPago){}
    async run(pago:Pago){
        await this.serviceNotification.sendNotification(pago)
    }
}