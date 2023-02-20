import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/Products',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const productService = {
    async getProducts() {
        let response = await apiClient.get("/");
        if (!response==200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let allProducts = response.data;

        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/" + id);
        if (!response==200)
        throw {
            status: response.status,
            statusText: "Not found",
        };
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct){
        await apiClient.post("/", newProduct)
    },
    async deleteProduct(id){
        await apiClient.delete("/" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/" + id, updatedProduct)
    }
}

