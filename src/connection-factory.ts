import { Connection, IConnection } from "./connection";

export abstract class ConnectionFactory {
    public abstract createConnection(): IConnection;
}

export class StandardConnectionFactory extends ConnectionFactory {
    public createConnection(): IConnection {
        return new Connection();
    }
}