import {Request, Response} from 'express'
import productsService from '../service/productsService'

class ProductsController{

    async writeProducts(req: Request, res: Response){
        const products = productsService.createProductList(req.body)

        return res.status(201).send()
    }

    // async readProducts(req: Request, res: Response){
    //     const products = await productsService.readProductList('.\\products.json')
        
    //     return res.send(products)
    // }

    async readProducts(){
        const products = productsService.readProductList()

        return products
    }

    // async getStockValue(req: Request, res: Response){
    //     const stockValue = await productsService.stockValueList('.\\products.json')
    // }

    async getStockValue(){
        try {
            const productList = await this.readProducts()

            const listaEstoque = productList.map(produto => {
                let obj = {
                    nome: produto.nome,
                    quantidade: produto.quantidade,
                    preco: produto.preco,
                    valor_estoque: produto.quantidade * produto.preco
                }
                return obj
            })

            return listaEstoque
        } catch (error) {
            throw new Error(error);
            
        }
        // const stockValue = await productsService.stockValueList('.\\products.json')
    }
}

export default new ProductsController()