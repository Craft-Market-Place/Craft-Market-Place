import { Link, useLoaderData } from 'react-router-dom'

const Profile = () => { 
    const {products} = useLoaderData();

    return (
        <ul>
            {products.length > 0 ? (
                products.map((profile) => (
                  <li key={profile.id}>
                    <Link to={`/profile/${profile.id}`}>
                        {profile.id} - {profile.title} 
                    </Link>
                  </li>  
                ))
            ) : (
                <li>No product found</li>
            )}
        </ul>
    );
 };
 export default Profile;

 export const loaderProfile = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   
    if (!res.ok)
            throw {
                status: res.status,
                statusText: "No encontrado",
            };
   
    const products = await res.json() 

    return { products };
 };