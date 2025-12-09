import { Connection } from './connection';

export interface IConnectionState {
    connect(context: Connection): void;
    disconnect(context: Connection): void;
    sendData(context: Connection, data: string): void;
}

export class ConnectedState implements IConnectionState {
    public connect(context: Connection): void {
        console.log(`⚠️ La conexión ${context.id} ya está establecida.`);
    }

    public disconnect(context: Connection): void {
        console.log(`🔌 Conexión ${context.id} cerrada.`);
        context.transitionTo(new DisconnectedState());
    }

    public sendData(context: Connection, data: string): void {
        console.log(`📡 [${context.id}] Enviando: "${data}"`);
    }
}

export class DisconnectedState implements IConnectionState {
    public connect(context: Connection): void {
        console.log(`🔌 Conexión ${context.id} establecida.`);
        context.transitionTo(new ConnectedState());
    }

    public disconnect(context: Connection): void {
        console.warn(`⚠️ La conexión ${context.id} ya está desconectada.`);
    }

    public sendData(context: Connection, data: string): void {
        console.error(`❌ Error: No se pueden enviar datos. La conexión ${context.id} está inactiva.`);
    }
}