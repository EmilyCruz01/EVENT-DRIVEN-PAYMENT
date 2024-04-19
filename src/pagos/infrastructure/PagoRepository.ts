import {query} from '../../DB/database'
import { Pago } from '../domain/Pago'
import { PagoRepository } from '../domain/PagoRepository'

export class MysqlPagoRepository implements PagoRepository{
    async createPago(
        orden: string, 
        total: number
        ): Promise<Pago | null> {

        const sql = 'INSERT INTO Pagos(orden,total) VALUES (?,?)'
        const params:any[]= [orden,total];
        try {
            const [orden,total]: any = params;
            const pago: Pago = new Pago(orden,total);
            const [result] :any = await query(sql, params);
            return pago;
        } catch (error) {
            return null;
        }
    }
}