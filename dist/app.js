"use strict";
// require('dotenv').config();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var product_1 = __importDefault(require("./model/product"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var port = 3000;
app.get('/', function (req, res) {
    res.send('Aloha crew mates !!');
});
app.get('/get', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_1.default.find()];
            case 1:
                products = _a.sent();
                res.send(products);
                return [2 /*return*/];
        }
    });
}); });
app.post('/add', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newProduct, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newProduct = new product_1.default(req.body);
                return [4 /*yield*/, newProduct.save()];
            case 1:
                product = _a.sent();
                res.send(product);
                return [2 /*return*/];
        }
    });
}); });
app.post('/update', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var existingProduct, updatedProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_1.default.findById(req.body.id)];
            case 1:
                existingProduct = _a.sent();
                if (!!existingProduct) return [3 /*break*/, 2];
                res.send('No such product exists for given id');
                return [3 /*break*/, 4];
            case 2:
                if (typeof req.body.productName === "string") {
                    existingProduct.productName = req.body.productName;
                }
                if (typeof req.body.type === "string") {
                    existingProduct.type = req.body.type;
                }
                return [4 /*yield*/, existingProduct.save()];
            case 3:
                updatedProduct = _a.sent();
                res.send(updatedProduct);
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.delete('/remove', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, product_1.default.findByIdAndDelete(req.body.id)];
            case 1:
                deleted = _a.sent();
                if (!deleted) {
                    res.send('No such product exists for given id');
                }
                else {
                    res.send(deleted);
                }
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log("Server is running on " + port);
});
//# sourceMappingURL=app.js.map