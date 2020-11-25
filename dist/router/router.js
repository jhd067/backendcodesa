"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/rol', (req, res) => {
    const query = `
    SELECT *
    FROM rol`;
    mysql_1.default.ejecutarQuery(query, (err, rol) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                rol: rol
            });
        }
    });
});
router.get('/rol/:id', (req, res) => {
    const id = req.params.id;
    const escapeId = mysql_1.default.instance.cnn.escape(id);
    const query = `
    SELECT *
    FROM rol
    where ID_ROL = ${escapeId}`;
    mysql_1.default.ejecutarQuery(query, (err, roles) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                roles: roles,
            });
        }
    });
});
exports.default = router;
