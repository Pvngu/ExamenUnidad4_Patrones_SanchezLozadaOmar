import { IConnectionState, DisconnectedState } from "./patterns/state/connection-state";

export interface IConnection {
    id: string;
    connect(): void;
    disconnect(): void;
    sendData(data: string): void;
}

export enum ConnectionStatus {
    Connected = 'connected',
    Disconnected = 'disconnected',
}

export class Connection implements IConnection {
    public id: string;
    public state: IConnectionState;

    constructor() {
        this.id = `conn_${Math.random().toString(36).substring(2, 9)}`;
        this.state = new DisconnectedState();
        this.connect();
    }

    public transitionTo(state: IConnectionState): void {
        this.state = state;
    }

    public connect(): void {
        this.state.connect(this);
    }

    public disconnect(): void {
        this.state.disconnect(this);
    }

    public sendData(data: string): void {
        this.state.sendData(this, data);
    }
}