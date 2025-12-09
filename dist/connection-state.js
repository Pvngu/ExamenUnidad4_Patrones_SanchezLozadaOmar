"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisconnectedState = exports.ConnectedState = void 0;
class ConnectedState {
    connect(context) {
        console.log(`⚠️ La conexión ${context.id} ya está establecida.`);
    }
    disconnect(context) {
        console.log(`🔌 Conexión ${context.id} cerrada.`);
        context.transitionTo(new DisconnectedState());
    }
    sendData(context, data) {
        console.log(`📡 [${context.id}] Enviando: "${data}"`);
    }
}
exports.ConnectedState = ConnectedState;
class DisconnectedState {
    connect(context) {
        console.log(`🔌 Conexión ${context.id} establecida.`);
        context.transitionTo(new ConnectedState());
    }
    disconnect(context) {
        console.warn(`⚠️ La conexión ${context.id} ya está desconectada.`);
    }
    sendData(context, data) {
        console.error(`❌ Error: No se pueden enviar datos. La conexión ${context.id} está inactiva.`);
    }
}
exports.DisconnectedState = DisconnectedState;
