import "./Form.css"
import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import ItemCount from "../components/ItemCount";

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");
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
        let newProduct = {title, description, price, user, location, img};
        productHandler.addProduct(newProduct);
        event.target.reset()
    };
    const onAdd=(quantity)=>{
      console.log(`Bought ${quantity} units`);
  
    }
    return (
      <div className="container-form">
        <form onSubmit={handleSubmit} itemID="form1">
          <h1>What do you want to sell?</h1>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input name="title" type="text" className="form-control-1" placeholder="Product name" onChange={handleTitleChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input name="price" type="text" className="form-control-1" placeholder="How much does it cost?" onChange={handlePriceChange} required/>
  </div>
  <div className="mb-3">
    <label className="form-label" htmlFor="description">Description</label>
    <input name="description" type="text" className="form-control-1" id="input-description" required placeholder="Tell us about the product" onChange={handleDescriptionChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="user" className="form-label">User</label>
    <input name="user" type="text" className="form-control-1" required placeholder="What is your name?" onChange={handleUserChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Location</label>
    <input name="location" type="text" className="form-control-1" required placeholder="Where is your product?" onChange={handleLocationChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="img" className="form-label">Image</label>
    <input name="img" type="file" className="form-control-1" placeholder="Upload a picture" onChange={handleImgChange} required/>
  </div>
  {/* <div className='item-count'>
<ItemCount initial={1} stock={5} onAdd={onAdd} />
</div> */}
  <button type="submit" className="btn btn-primary" id="btn-ad">Submit</button>
</form>
</div>
    );
};
export default CreateProduct;
