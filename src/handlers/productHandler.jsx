import { productService } from "../services/productService";

export const productHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = { 
            "id": "",
            "title": newProduct.title,
            "price": newProduct.price,
            "description": newProduct.description,
            "units": newProduct.units,
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
    updateProduct(id, updatedProduct){
        if(!updatedProduct){
            return;
        }
        let updatedProductStructure = {
            "title": updatedProduct.title,
            "price": updatedProduct.price,
            "description": updatedProduct.description,
            "units": updatedProduct.units,
            "user": updatedProduct.user,
            "location": updatedProduct.location,
           "img" : updatedProduct.img,
        }
       

        return productService.updateProduct(id, updatedProductStructure);
    }
}

