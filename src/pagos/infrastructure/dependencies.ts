import { CreatePagoUseCase } from "../app/CreatePagoUseCase";
import { MysqlPagoRepository } from "./PagoRepository";
import { CreatePagoController } from "./controllers/CreatePagoController";
import { NotifiNewPago } from "./services/NotifiNewPago";
import { NotificationPagoUseCase } from "../app/services/NotifiNewPago";
import { SocketIO } from "./services/socketio";

const socketio= new SocketIO();

export const mysqlPagoRepository=new MysqlPagoRepository();
export const servicesNotification= new NotifiNewPago();
export const notifiUseCase= new NotificationPagoUseCase(servicesNotification);
export const createPagoUseCase= new CreatePagoUseCase(mysqlPagoRepository,notifiUseCase,socketio);
export const createPagoController= new CreatePagoController(createPagoUseCase);

