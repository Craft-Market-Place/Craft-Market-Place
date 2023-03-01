import { productService } from "../services/productService";

export const productHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = { 
            "id": "",
            "title": newProduct.title,
            "price": newProduct.time,
            "body": newProduct.body,
            "user": newProduct.user,
            "location": newProduct.location,
             "img": newProduct.img,
        }

        return productService.submitProduct(newProductStructure);
        
    },

    loadProducts(){
        return productService.getProducts();
    },
    loadProduct(id) {
        return productService.getProduct(id);
    },
    deleteProduct(id){
        return productService.deleteProduct(id);
    },
    updateProduct(newProduct){
        if(!newProduct){
            return;
        }
        let newProductModel = {
            "title": newProduct.name,
            "price": newProduct.time,
            "body": newProduct.body,
            "user": newProduct.user,
            "location": newProduct.location,
           "img" : newProduct.img,
        }
        let id = newProductModel.id;

        return taskService.updateTask(id, newProductModel);
    }
}

