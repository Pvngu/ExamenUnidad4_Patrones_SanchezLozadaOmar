"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.ConnectionStatus = void 0;
const connection_state_1 = require("./connection-state");
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Connected"] = "connected";
    ConnectionStatus["Disconnected"] = "disconnected";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
class Connection {
    constructor() {
        this.id = `conn_${Math.random().toString(36).substring(2, 9)}`;
        this.state = new connection_state_1.DisconnectedState();
        this.connect();
    }
    transitionTo(state) {
        this.state = state;
    }
    connect() {
        this.state.connect(this);
    }
    disconnect() {
        this.state.disconnect(this);
    }
    sendData(data) {
        this.state.sendData(this, data);
    }
}
exports.Connection = Connection;
