"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePagoUseCase = void 0;
class CreatePagoUseCase {
    constructor(PagoRepository, notification, socket) {
        this.PagoRepository = PagoRepository;
        this.notification = notification;
        this.socket = socket;
    }
    run(orden, total) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pago = yield this.PagoRepository.createPago(orden, total);
                if (pago)
                    this.notification.run(pago);
                this.socket.emit("payment", pago);
                return pago;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreatePagoUseCase = CreatePagoUseCase;
