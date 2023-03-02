import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";


function EditProduct() {
    const { post } = useLoaderData();
    const id = post.id;
    const [title, setTitle] = useState(post.title);
    const [price, setPrice] = useState(post.price);
    const [description, setDescription] = useState(post.description);
    const [user, setUser] = useState(post.user);
    const [location, setLocation] = useState(post.location);
    const [img, setImg] = useState(post.img);
    
    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
 
    const handleUserChange = (event) => {
        let userInput = event.target.value;
        setUser(userInput);
    };

    const handleLocationChange = (event) => {
        let locationInput = event.target.value;
        setLocation(locationInput);
    };

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        setImg(reader.result)};
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedProduct = {title, description, price, user, location, img};
        productHandler.updateProduct(id,updatedProduct);
        event.target.reset()
    };



    return(
        <><h1>Editing product: {post.title}</h1>
        <div className="container-form">

            <form onSubmit={handleSubmit} itemID="form1">
                <h1>What do you want to sell?</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input name="title" type="text" className="form-control" placeholder={post.title}onChange={handleTitleChange}  />

                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input name="price" type="text" className="form-control" placeholder={post.price}onChange={handlePriceChange}  />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Description</label>
                    <input name="description" type="text" className="form-control" id="input-description"  placeholder={post.description} onChange={handleDescriptionChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="user" className="form-label">User</label>
                    <input name="user" type="text" className="form-control"  placeholder={post.user}onChange={handleUserChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input name="location" type="text" className="form-control"  placeholder={post.location}onChange={handleLocationChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image</label>
                    <input name="img" type="file" className="form-control" 
                    onChange={handleImgChange}  />
                </div>

               <button type="submit" className="btn btn-primary" id="btn-E">Update</button>
            </form>
        </div></>
    );
};
    


export default EditProduct;
