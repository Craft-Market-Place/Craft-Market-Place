import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { Link } from 'react-router-dom';

function Trending({ products, deleteProduct }) {
  
  const randomIndex = Math.floor(Math.random() * (products.length - 3));
  const resultTrending = products.slice(randomIndex, randomIndex + 3);

  return (
    <div className="cards">

      {resultTrending.map(product => {
        return (
          <div key={product.id} className="card">
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.location}
              </Card.Text>
              <Link to={`/advertisement/${product.id}`}><Button className='btn-ad'>More information</Button></Link>
            </Card.Body>
          </div>
        )
      })}
    </div>
  );
}

export default Trending;
