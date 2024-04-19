import socketClient from 'socket.io-client'
import { ISocket } from '../../domain/services/ISocket'

export class SocketIO implements ISocket {
  private socket: any

  constructor() {
    this.socket = socketClient('https://ws-5u2i.onrender.com')
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data)
  }
}