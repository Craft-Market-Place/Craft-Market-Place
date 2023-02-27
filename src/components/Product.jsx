import "./Product.css";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function Product({ product }) {

    const { title, time } = product;

    return (
        <div className="productCard">
            <div className="productCard--info">
                <h1>{title}</h1>
                <p>tiempo: {time}</p>
            </div>
            <div className="productCard--buttons">
                <DeleteIcon fontSize="large" />
                <Link className="edit--link" to={`/editProduct/${product.id}`}>
                    <EditIcon fontSize="large" color="inherit" />
                </Link>
            </div>
        </div>
    )
}

export default Product

