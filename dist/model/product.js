"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var mongoose_1 = __importDefault(require("./../db/mongoose"));
var ProductSchema = new mongoose_1.default.Schema({
    productName: {
        type: 'String',
        require: 'true',
    },
    type: {
        type: 'String',
        required: 'true'
    }
});
var Product = mongoose_1.default.model('Product', ProductSchema);
exports.default = Product;
// module.exports = { User };
//# sourceMappingURL=product.js.map