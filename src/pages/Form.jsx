import "./Form.css"
import ItemCount from "../components/ItemCount";
import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';

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
    let imgInput = event.target.value;
    setImg(imgInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { title, description, price, user, location, img };
    productHandler.addProduct(newProduct);
    event.target.reset()
  };

  const onAdd=(quantity)=>{
    console.log(`Bought ${quantity} units`);

  }



  return (

    <div className="container-form">

      <form onSubmit={handleSubmit} itemID="form1">
        <h1>Cuéntanos que ofreces</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input name="title" type="text" className="form-control" placeholder="¿Qué ofreces...?" onChange={handleTitleChange} required />

        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input name="price" type="text" className="form-control" placeholder="¿A qué precio...?" onChange={handlePriceChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="description">Descripcion</label>
          <input name="description" type="text" className="form-control" id="input-description" required placeholder="Cuéntanos..." onChange={handleDescriptionChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="user" className="form-label">Usuario</label>
          <input name="user" type="text" className="form-control" required placeholder="¿Cómo te llamas...?" onChange={handleUserChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Localización</label>
          <input name="location" type="text" className="form-control" required placeholder="¿Zonas a las que llega tu servicio...?" onChange={handleLocationChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">Imagen</label>
          <input name="img" type="text" className="form-control" placeholder="Sube una foto..." onChange={handleImgChange} required />
        </div>
        <div className='item-count'>
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
        <button type="submit" className="btn btn-primary" id="btn-ad">Enviar</button>
      </form>
    </div>
  );
};

export default CreateProduct;