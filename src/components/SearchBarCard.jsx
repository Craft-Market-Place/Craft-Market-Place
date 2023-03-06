import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBarCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";




function SearchBarCard() {
 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const { products} = useLoaderData();
  const [productsData, setProductsData] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const data = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const deleteProduct = async (id) => {
    await productHandler.deleteProduct(id);
    setProductsData(productsData.filter(post => post.id !== id))
}


  return (
    <div className="container-gn" id="text">
      <h1>Welcome to your Dahsboard Majealcero</h1>
    <>
      <div className="container-bar">
        <input
          className="searchStyle"
          type="text"
          placeholder="🔍 Search by product or price"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cards">
        {data.map((product) => {
          return (
            <div key={product.id} className="card" style={{ width: '18rem' }}>
              <Card.Img variant="top"className="img-size" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <Card.Text>{product.location}</Card.Text>
                <Link to={`/advertisement/${product.id}`}>
                  <Button className="btn-ad" id="btn-edit">More information</Button>
                </Link>
                <Link to={`editProduct/${product.id}`}><Button className="btn-E" id="btn-edit">✏</Button></Link>
               <Button  className="btn-D" id="btn-edit" onClick={() =>deleteProduct(product.id)}>❌</Button>
               
              </Card.Body>
            </div>
          );
        })}
      </div>
    </>
    </div>
  );
}

export default SearchBarCard;

