import amqplib from 'amqplib'
import { INotifiNewPago } from '../../domain/services/INotifiNewPago'
import { Pago } from '../../domain/Pago'
import { buffer } from 'stream/consumers';


export class NotifiNewPago implements INotifiNewPago{

    private options: any;
    private url: any;
    private exch: any;
    private server: any;
    constructor() {
        this.options = {
          protocol:'amqp',
          vhost: process.env.AMQP_VHOST,
          username: process.env.AMQP_USERNAME,
          password: process.env.AMQP_PASSWORD,
          port: process.env.AMQP_PORT,
            
        };
        this.url = process.env.AMQP_URL;
        this.exch = process.env.AMQP_EXCH;
      }

      async  sendNotification(pago: Pago): Promise<boolean> {
        try {
        const conn = await amqplib.connect(this.url);
        const ch =await conn.createChannel();
        
        const status = ch.publish(this.exch,"", Buffer.from(JSON.stringify(pago)))
       
        return status;
        } catch (error) {
          return false;
        }

      }
}