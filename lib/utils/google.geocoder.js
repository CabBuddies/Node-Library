"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLookup = exports.loadAPI = void 0;
const NodeGeocoder = require("node-geocoder");
let nodeGeocoder;
function loadAPI(API_KEY) {
    nodeGeocoder = NodeGeocoder({
        provider: 'google',
        apiKey: API_KEY,
        formatter: null
    });
}
exports.loadAPI = loadAPI;
function reverseLookup(lat, lng) {
    return nodeGeocoder.reverse({ lat: lat, lon: lng });
    ;
}
exports.reverseLookup = reverseLookup;
