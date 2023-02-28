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
<<<<<<< HEAD:src/handlers/productHandler.jsx
    updateProduct(id, updatedProduct){
        if (!updatedProduct) {
            return;
        }
        let updatedProductStructure = {
            "title": updatedProduct.title,
            "price": updatedProduct.price,
            "material": updatedProduct.material,
            "body": updatedProduct.body,
            "img": updatedProduct.img,
        }

        return productService.updateProduct(id, updatedProductStructure);
    }
    }
=======
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
>>>>>>> deploy:src/handlers/productHandler.js

