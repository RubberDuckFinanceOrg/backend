"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
// Port
const port = process.env.SERVERURL || 3000;
app_1.default.set("port", port);
// Create HTTP server.
const server = http_1.default.createServer(app_1.default);
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
