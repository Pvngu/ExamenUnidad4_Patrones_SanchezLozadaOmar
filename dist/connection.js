"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.ConnectionStatus = void 0;
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Connected"] = "connected";
    ConnectionStatus["Disconnected"] = "disconnected";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
class Connection {
    constructor() {
        this.status = ConnectionStatus.Disconnected;
        this.id = `conn_${Math.random().toString(36).substring(2, 9)}`;
        this.connect();
    }
    connect() {
        this.status = ConnectionStatus.Connected;
        console.log(`🔌 Conexión ${this.id} establecida.`);
    }
    disconnect() {
        this.status = ConnectionStatus.Disconnected;
        console.log(`🔌 Conexión ${this.id} cerrada.`);
    }
    sendData(data) {
        if (this.status === ConnectionStatus.Connected) {
            console.log(`📡 Enviando datos vía ${this.id}: "${data}"`);
        }
        else {
            console.error(`❌ No se pueden enviar datos. La conexión ${this.id} no está activa.`);
        }
    }
}
exports.Connection = Connection;
