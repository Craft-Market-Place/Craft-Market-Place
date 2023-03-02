import { productHandler } from '../src/handlers/productHandler';
import { productService } from '../src/services/productService';

jest.mock('../src/services/productService');

describe('productHandler', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('addProduct', () => {
        it('should submit the product using the product service', async () => {
            const newProduct = {
                title: 'Test Product',
                description: 'This is a test product.',
                price: 9.99,
                image: 'http://example.com/product.jpg'
            };
            await productHandler.addProduct(newProduct);
            expect(productService.submitProduct).toHaveBeenCalledWith(newProduct);
        });

        it('should return undefined if no new product is provided', async () => {
            const result = await productHandler.addProduct(undefined);
            expect(result).toBeUndefined();
        });
    });

    describe('loadProducts', () => {
        it('should return the products using the product service', async () => {
            const expectedProducts = [{
                "title": "Test Product 1",
                "description": "This is a test product",
                "price": 5.99,
                "image": "http://example.com/product1.jpg",
                "id": 1
            },
            {
                "title": "Test Product 2",
                "description": "This is a test product",
                "price": 9.99,
                "image": "http://example.com/product2.jpg",
                "id": 2
            }];
            productService.getProducts.mockResolvedValue(expectedProducts);
            let result = await productHandler.loadProducts();
            expect(result).toEqual(expectedProducts);
            expect(productService.getProducts).toHaveBeenCalled();
        });
    });

    describe('loadProduct', () => {
        it('should return the product using the product service', async () => {
            const id = 1;
            const product = {
                "title": "Test Product 1",
                "description": "This is a test product",
                "price": 5.99,
                "image": "http://example.com/product1.jpg",
                "id": 1
            };
            productService.getProduct.mockResolvedValue(product);
            const result = await productHandler.loadProduct(id);
            expect(result).toEqual(product);
            expect(productService.getProduct).toHaveBeenCalledWith(id);
        });
    });

    describe('deleteProduct', () => {
        it('should delete the product using the product service', async () => {
            const id = 1;
            await productHandler.deleteProduct(id);
            expect(productService.deleteProduct).toHaveBeenCalledWith(id);
        });
    });

    describe('updateProduct', () => {
        it('should update the product using the product service', async () => {
            const id = 1;
            const updatedProduct = { title: 'Updated Product' };
            await productHandler.updateProduct(id, updatedProduct);
            expect(productService.updateProduct).toHaveBeenCalledWith(id, {
                "title": updatedProduct.title,
                "description": undefined,
                "price": undefined,
                "image": undefined
            });
        });

        it('should return undefined if no updated product is provided', async () => {
            const id = 1;
            const result = await productHandler.updateProduct(id, undefined);
            expect(result).toBeUndefined();
        });
    });
});