import { Link, useLoaderData } from 'react-router-dom'

const Profile = () => { 
    const {posts} = useLoaderData();
    console.log (posts)

    return (
        
        <><><ul className="Products">
            {posts.length > 0 ? (
                posts.map((profile) => (
                    <li key={profile.id}>
                        <Link to={`/profile/${profile.id}`}>
                            {profile.id} - {profile.title} - {profile.price} - {profile.material} - {profile.img}
                        </Link>
                    </li>
                ))
            ) : (
                <li>No product found</li>
            )}
        </ul><div className="buttonsCard">
                <button class="btn btn-outline-success me-2" id="btn-E">Edit</button>
            </div></><div className="buttonsCard">
                <button class="btn btn-outline-success me-2" id="btn-D">Delete</button>
            </div></>

    );
 };
 export default Profile;

