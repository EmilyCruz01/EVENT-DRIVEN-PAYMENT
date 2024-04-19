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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifiNewPago = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class NotifiNewPago {
    constructor() {
        this.options = {
            protocol: 'amqp',
            vhost: process.env.AMQP_VHOST,
            username: process.env.AMQP_USERNAME,
            password: process.env.AMQP_PASSWORD,
            port: process.env.AMQP_PORT,
        };
        this.url = process.env.AMQP_URL;
        this.exch = process.env.AMQP_EXCH;
    }
    sendNotification(pago) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield amqplib_1.default.connect(this.url);
                const ch = yield conn.createChannel();
                const status = ch.publish(this.exch, "", Buffer.from(JSON.stringify(pago)));
                return status;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.NotifiNewPago = NotifiNewPago;
