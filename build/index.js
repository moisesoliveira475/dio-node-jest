"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const server = (0, express_1.default)();
const port = 3000;
server.use(express_1.default.json());
server.use(routes_1.routes);
server.listen(port, () => {
    console.log(`
    server running in http://localhost:${port}
    `);
});
