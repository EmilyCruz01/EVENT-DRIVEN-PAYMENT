import socketClient from 'socket.io-client'
import { ISocket } from '../../domain/services/ISocket'

export class SocketIO implements ISocket {
  private socket: any

  constructor() {
    this.socket = socketClient('https://event-driven-socket.onrender.com')
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data)
  }
}