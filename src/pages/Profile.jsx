import { Link, useLoaderData } from 'react-router-dom'

const Profile = () => { 
    const {posts} = useLoaderData();

    return (
        <ul>
            {posts.length > 0 ? (
                posts.map((profile) => (
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
    const res = await fetch(' http://localhost:3000/Alumnxs')
   
    if (!res.ok)
            throw {
                status: res.status,
                statusText: "No encontrado",
            };
   
    const posts = await res.json() 

    return { posts };
 };
