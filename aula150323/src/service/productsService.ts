import { writeFile, readFile } from 'fs/promises'
// import Product from '../schemas/Product'

const valorTotalEstoque = produto => produto.valor

class ProductService{
    async createProductList(data){
        try{
            console.log("Criando lista de produtos")
            await writeFile('products.json', JSON.stringify(data))

        } catch(err){
            throw new Error("Falha ao salvar ao lista de produtos")
        }
    }

    // async readProductList(data){
    //     try{
    //         console.log("Lendo lista de produtos")
    //         return readFile(data, 'utf-8')
            
    //     } catch(err){
    //         throw new Error("Falha ao ler lista de produtos")
    //     }
    // }
    async readProductList(){
        try{
            const productList = await readFile('products.json', "utf-8")
            return JSON.parse(productList)
        } catch(err){
            throw new Error("Falha ao ler lista de produtos")
        }
    }

    // async stockValueList(data){
    //     try{
    //         console.log("Calculando valor em estoque")
    //         return data.map(valorTotalEstoque)
    //     } catch(err){
    //         throw new Error('Falha ao calcular valor total do estoque')
    //     }
    // }

}

export default new ProductService()