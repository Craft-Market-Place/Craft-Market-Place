import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import "./SearchBarCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import db from "../../api/db.json";
import { Link } from "react-router-dom";

function Cards({deleteProduct}) {
  const [post] = useState(db.products);
  const { id, title, price,description,user,location,img, } = post;
  const [searchQuery, setSearchQuery] = useState("");
  const data = db.products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
 

  return (
    <>
      <div className="container-bar">
        <input
          className="searchStyle"
          type="text"
          placeholder="Search by product or location"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cards">
        {data.map((product) => {
          return (
            <div key={product.id} className="card">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <Card.Text>{product.location}</Card.Text>
                <Link to={`/advertisement/${product.id}`}>
                  <Button className="btn-ad">More information</Button>
                </Link>
                <Link to={`editProduct/${product.id}`}><Button className="btn-E">Edit</Button></Link>
               <Button className="btn-D"onClick={() =>deleteProduct(id)}>Delete</Button>
               
              </Card.Body>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;