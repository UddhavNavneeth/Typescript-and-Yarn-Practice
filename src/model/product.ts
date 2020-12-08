import mongoose from './../db/mongoose';

const ProductSchema = new mongoose.Schema({
    productName: {
        type: 'String',
        require: 'true',
    },
    
    type: {
        type: 'String',
        required: 'true'
    }
});

interface ProductSchemaType extends mongoose.Document {
    productName: string;
    type: string;
}

const Product = mongoose.model<ProductSchemaType>('Product', ProductSchema);

export { Product as default };
// module.exports = { User };