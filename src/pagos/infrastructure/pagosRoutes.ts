import express from 'express';
import { createPagoController } from './dependencies';
export const pagosRouter = express.Router()

pagosRouter.post(
    '/',
    createPagoController.run.bind(createPagoController)
)