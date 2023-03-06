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
                id:"",
                title: 'Set of cushion covers',
                price: '25€',
                description: 'Handmade vintage fabric cushions. Backed with vintage French linen, with an envelope closure. The fabric was rescued from a pair of curtains and there are matching lampshades and a bed runner to make a complete bedroom set.',
                user:'Majealcero',
                units: '4',
                location:'Seville',
                img: 'https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-5f32fa0d-a323-4369-bbe8-2afa77699e94-Handmade-vintage-fabric-cushion-cover-Quilterdown/display'
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
                "id": 3,
                "title": "Doll",
                "price": "20€",
                "description": "Handmade crochet doll, fully crocheted with removable clothes and embroidered eyes. This is 'Candy Christmas'. She is filled with toy stuffing and comes from a smoke free home. She comes with her own stand so she can be displayed",
                "user": "Majealcero",
                "units": '4',
                "location": "Seville",
                "img": "https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-d2beea5a-08ee-4f26-9e36-e186bda45a89-Handmade-crochet-doll-Crochet-by-Traceyanne/display"
                
            },
            {
                "id": 4,
                "title": "Dress",
                "price": "30€",
                "description": "A bright blue dress splattered by warm raindrops. My handmade pinafore dresses are available in four colours, this is the Royal Blue version which I've added orange and pink raindrops and blue glitter ones too spread around the lower dress. It also has a lined bodice, orange piping round arm and neck and a feature orange zip at the back. The raindrops are added individually so each dress will have a slightly different soaking of raindrops. I've used a medium weight cotton twill so it's nice and strong. Machine washable up to 40 degrees, if you use things called 'irons', you will have to do so on the reverse side of dress.",
                "user": "Majealcero",
                "units": '4',
                "location": "Seville",
                "img": "https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-df30520f-8836-40c3-b646-2779f0801277-Pinafore-Dress-Royal-Blue-Ladies-with-pink-orange-and-blue-graphic-raindrop--44ideas/display"
                
            }];
            productService.getProducts.mockResolvedValue(expectedProducts);
            let result = await productHandler.loadProducts();
            expect(result).toEqual(expectedProducts);
            expect(productService.getProducts).toHaveBeenCalled();
        });
    });

    describe('loadProduct', () => {
        it('should return the product using the product service', async () => {
            const id = 3;
            const product = {
                "id": 3,
      "title": "Doll",
      "price": "20€",
      "description": "Handmade crochet doll, fully crocheted with removable clothes and embroidered eyes. This is 'Candy Christmas'. She is filled with toy stuffing and comes from a smoke free home. She comes with her own stand so she can be displayed",
      "user": "Majealcero",
      "units": '4',
      "location": "Seville",
      "img": "https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-d2beea5a-08ee-4f26-9e36-e186bda45a89-Handmade-crochet-doll-Crochet-by-Traceyanne/display"
                
            };
            productService.getProduct.mockResolvedValue(product);
            const result = await productHandler.loadProduct(id);
            expect(result).toEqual(product);
            expect(productService.getProduct).toHaveBeenCalledWith(id);
        });
    });

    describe('deleteProduct', () => {
        it('should delete the product using the product service', async () => {
            const id = 3;
            await productHandler.deleteProduct(id);
            expect(productService.deleteProduct).toHaveBeenCalledWith(id);
        });
    });

    describe('updateProduct', () => {
        it('should update the product using the product service', async () => {
            const id = 3;
            const updatedProduct = { title: 'Doll' };
            await productHandler.updateProduct(id, updatedProduct);
            expect(productService.updateProduct).toHaveBeenCalledWith(id, {
                "title": updatedProduct.title,
                "description": undefined,
                "price": undefined,
                "img": undefined,
                "user":undefined,
                "units": undefined,
                "location":undefined,
            });
        });

        it('should return undefined if no updated product is provided', async () => {
            const id = 3;
            const result = await productHandler.updateProduct(id, undefined);
            expect(result).toBeUndefined();
        });
    });
});