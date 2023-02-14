import { useLoaderData } from 'react-router-dom'

const Product = () => {
    const { Product } = useLoaderData()

    return (
        <>
            <h1>
                {Product.id} - {Product.title}
            </h1>
            <p>{Product.body}</p>
        </>
    );
};

export default Product;

export const loaderProduct = async ({ params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
        
    );

        if (!res.ok)
            throw {
                status: res.status,
                statusText: "No encontrado",
            };

    const post = await res.json();
    return { post };
};
