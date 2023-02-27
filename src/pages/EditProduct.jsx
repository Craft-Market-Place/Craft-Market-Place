import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";

function EditProduct() {
    const { post } = useLoaderData();
    const id = post.id;
    const [title, setTitle] = useState(post.title);
    const [price, setPrice] = useState(post.price);
    const [material, setMaterial] = useState(post.material);
    const [body, setBody] = useState(post.body);
    const [img, setImg] = useState(post.img);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImg(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleMaterialChange = (event) => {
        let materialInput = event.target.value;
        setMaterial(materialInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };
    const handleBodyChange = (event) => {
        let bodyInput = event.target.value;
        setBody(bodyInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedProduct = {title, material, price,body, img};
        productHandler.updateProduct(id, updatedProduct);
    };

    return (
        <>
            <h1>estás editando el product: {post.title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleImageChange} />
                <label htmlFor="title">Title</label>
                <input name="title" type="text" onChange={handleTitleChange} placeholder={post.title} />
                <label htmlFor="material">Description</label>
                <input name="material" type="text" onChange={handleMaterialChange} placeholder={post.material} />
                <label htmlFor="body">Body</label>
                <input name="body" type="text" onChange={handleBodyChange} placeholder={post.body} />
                <label htmlFor="price">Price</label>
                <input name="price" type="text" onChange={handlePriceChange} placeholder={post.price}/>
                <button type="submit">
                    Upload
                </button>
            </form>
        </>
    )
}

export default EditProduct;