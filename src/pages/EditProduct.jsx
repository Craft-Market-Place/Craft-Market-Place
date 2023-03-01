import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import {Link} from 'react-router-dom';

function EditProduct() {
    const { post } = useLoaderData();
    const id = post.id;
    const [title, setTitle] = useState(post.title);
    const [time, setTime] = useState(post.time);
    const [description, setDescription] = useState(post.description);
    const [user, setUser] = useState(post.user);
    const [location, setLocation] = useState(post.location);
    const [img, setImg] = useState(post.img);
    
    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleTimeChange = (event) => {
        let timeInput = event.target.value;
        setTime(timeInput);
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
        let imgInput = event.target.value;
        setImg(imgInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedProduct = {title, description, time, user, location, img};
        productHandler.updateProduct(id,updatedProduct);
        event.target.reset()
    };



    return(
        <><h1>estás editando el product: {post.title}</h1>
        <div className="container-form">

            <form onSubmit={handleSubmit} itemID="form1">
                <h1>Cuéntanos que ofreces</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input name="title" type="text" className="form-control" placeholder={post.title}onChange={handleTitleChange} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Tiempo</label>
                    <input name="price" type="text" className="form-control" placeholder={post.time}onChange={handleTimeChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Descripcion</label>
                    <input name="description" type="text" className="form-control" id="input-description" required placeholder={post.description} onChange={handleDescriptionChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Usuario</label>
                    <input name="user" type="text" className="form-control" required placeholder={post.user}onChange={handleUserChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Localización</label>
                    <input name="location" type="text" className="form-control" required placeholder={post.location}onChange={handleLocationChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Imagen</label>
                    <input name="img" type="text" className="form-control" 
                    onChange={handleImgChange} required />
                </div>

               <button type="submit" className="btn btn-primary" id="btn-E">Update</button>
            </form>
        </div></>
    );
};
    


export default EditProduct;
