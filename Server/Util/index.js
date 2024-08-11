"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateToken = exports.SanitizeArray = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../Config/db"));
function SanitizeArray(inputString) {
    if (Array.isArray(inputString)) {
        return inputString.map((value) => value.trim());
    }
    else if (typeof inputString === 'string') {
        return inputString.split(",").map((value) => value.trim());
    }
    else {
        console.error("Invalid input type");
        return [];
    }
}
exports.SanitizeArray = SanitizeArray;
function GenerateToken(user) {
    const payload = {
        id: user.id,
        DisplayName: user.displayName,
        username: user.username,
        EmailAddress: user.emailAddress
    };
    const jwtOptions = {
        expiresIn: 604800
    };
    return jsonwebtoken_1.default.sign(payload, db_1.default.secret, jwtOptions);
}
exports.GenerateToken = GenerateToken;
//# sourceMappingURL=index.js.map