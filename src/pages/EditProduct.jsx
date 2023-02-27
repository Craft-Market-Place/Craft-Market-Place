import { useLoaderData } from "react-router-dom"

function EditProduct() {
    const { product } = useLoaderData();

    return(
        <h1>estás editandoo el product: {product.title}</h1>
    )
}

export default EditProduct;
