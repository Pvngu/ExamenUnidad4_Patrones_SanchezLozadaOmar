export enum ConnectionStatus {
    Connected = 'connected',
    Disconnected = 'disconnected',
}

export class Connection {
    public id: string;
    public status: ConnectionStatus = ConnectionStatus.Disconnected;

    constructor() {
        this.id = `conn_${Math.random().toString(36).substring(2, 9)}`;
        this.connect();
    }

    public connect(): void {
        this.status = ConnectionStatus.Connected;
        console.log(`🔌 Conexión ${this.id} establecida.`);
    }

    public disconnect(): void {
        this.status = ConnectionStatus.Disconnected;
        console.log(`🔌 Conexión ${this.id} cerrada.`);
    }

    public sendData(data: string): void {
        if (this.status === ConnectionStatus.Connected) {
            console.log(`📡 Enviando datos vía ${this.id}: "${data}"`);
        } else {
            console.error(`❌ No se pueden enviar datos. La conexión ${this.id} no está activa.`);
        }
    }
}