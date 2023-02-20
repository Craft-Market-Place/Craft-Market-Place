import { useLoaderData } from 'react-router-dom'

const Post = () => {
    const { post } = useLoaderData()

    return (
        <>
            <h1>
                {post.id} - {post.title}
            </h1>
            <p>{post.body}</p>
        </>
    );
};

export default Post;

// export const loaderPost = async ({ params }) => {
//     const res = await fetch(
//         `http://localhost:3000/Products/${params.id}`
//     );

//         if (!res.ok)
//             throw {
//                 status: res.status,
//                 statusText: "No encontrado",
//             };

//     const post = await res.json();
//     return { post };
// };
