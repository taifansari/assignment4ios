"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../Controllers/auth");
router.post('/register', (req, res, next) => { (0, auth_1.ProcessRegistration)(req, res, next); });
router.post('/login', (req, res, next) => { (0, auth_1.ProcessLogin)(req, res, next); });
router.get('/logout', (req, res, next) => { (0, auth_1.ProcessLogout)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map