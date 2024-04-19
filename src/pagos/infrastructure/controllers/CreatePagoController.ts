import { Request,Response } from "express";
import { CreatePagoUseCase } from "../../app/CreatePagoUseCase";


export class CreatePagoController{
    constructor(readonly createPagoUseCase:CreatePagoUseCase){}
    async run (req: Request, res:Response):Promise <void>{
        const data = req.body;
        try {
            const pago = await this.createPagoUseCase.run(
                data.orden,
                data.total
            )
            if(pago)
            res.status(201).send({
                status:"succes",
                data:{
                    orden: pago.orden,
                    total: pago.total
                }
         })
        } catch (error) {
            res.status(204).send({
                status:"error",
                data:"Ocurrio un error",
                mesagges:error
            })
        }
    }
}