import { Schema, model, Document } from 'mongoose'

const ProductsSchema = new Schema({
    nome: String,
    quantidade: String,
    preco: String,
    valor_estoque: String
},{})

export default model ('Product', ProductsSchema)