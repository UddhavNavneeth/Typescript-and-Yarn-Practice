"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default;
mongoose_1.default.Promise = global.Promise; // -----?-----
var mongoUri = 'mongodb+srv://UddhavNavneeth:Uddhavthegr8@cluster0.qoq5v.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose_1.default.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("Successfully connected to atlas mongodb");
    }
});
// module.exports = { mongoose };
//# sourceMappingURL=mongoose.js.map