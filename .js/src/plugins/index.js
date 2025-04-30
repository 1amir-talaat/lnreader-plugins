"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dilartube_1 = __importDefault(require("./arabic/dilartube"));
var rewayatclub_1 = __importDefault(require("./arabic/rewayatclub"));
var sunovels_1 = __importDefault(require("./arabic/sunovels"));
var truthnovel_1 = __importDefault(require("./arabic/truthnovel"));
var PLUGINS = [dilartube_1.default, rewayatclub_1.default, sunovels_1.default, truthnovel_1.default];
exports.default = PLUGINS;
