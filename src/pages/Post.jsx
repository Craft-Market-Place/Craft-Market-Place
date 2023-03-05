import { useLoaderData } from "react-router-dom";
import Location from '../assets/location.png';
import Price from '../assets/price.png';
import './Post.css';

const Post = () => {
  const { post } = useLoaderData();

  return (
  <section className="general-container">
    <div id="div-post" className="container-ads d-flex">
      <img className="img-fluid " id="img-ad" src={post.img} alt="imagen" />
      <div className="ads p-2" id="container-text">
      
        <h1 className="title-ad">{post.title}</h1>
        <div className="ad-title d-flex justify-content-between">
          <h3><img src={Location} id="logo-location"/>{post.location}</h3>
          <h3 className="price"><img src={Price} id="price1"/>{post.price}</h3>
          </div>
          <div>
          <h5 className="description">{post.description}</h5>
          </div>
          <h3 className="units">Units available: {post.units}</h3>
          <h4 className="user"> Seller:{post.user}</h4>
        
        
      </div>
    </div>
  </section>  
  );
};

export default Post;
