import { useContext } from "react";
import { dataContext } from "../components/Context/DataContext";
import React from "react";


function Login() {
    const { data } = useContext(dataContext);
    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <h3>{product.title}</h3>
                <h3>{product.description}</h3>
                <h3>{product.price}</h3>
                <button onClick={() => editProduct(product)}>Editar</button>
                <button onClick={() => deleteProduct(product)}>Borrar</button>
            </div>
        );
    });
}
 export default Login;
