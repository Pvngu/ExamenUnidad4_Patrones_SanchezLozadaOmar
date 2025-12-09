import { IConnection } from "./connection";

export abstract class ConnectionDecorator implements IConnection {
    protected wrapped: IConnection;

    constructor(connection: IConnection) {
        this.wrapped = connection;
    }

    public get id(): string {
        return this.wrapped.id;
    }

    public connect(): void {
        this.wrapped.connect();
    }

    public disconnect(): void {
        this.wrapped.disconnect();
    }

    public sendData(data: string): void {
        this.wrapped.sendData(data);
    }
}

export class SecureConnection extends ConnectionDecorator {
    public sendData(data: string): void {
        const encryptedData = `[ENCRIPTADO] ${data.split('').reverse().join('')}`;
        console.log(`🔒 Encriptando datos para ${this.id}...`);
        super.sendData(encryptedData);
    }
}