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
          <h5 className="price"><img src={Price} id="logo-location"/>{post.price}</h5>
          </div>
          <div>
          <h5 className="description">{post.description}</h5>
          
          </div>
          <h5 className="user">{post.user}</h5>
        
        <p style={{lineHeight: 1}}>{post.body}</p>
        <div className="ads-user">
            <img className="rounded-circle" src={post.user} alt="" />
          <h6> {post.userName}</h6>
        </div>
      </div>
    </div>
  </section>  
  );
};

export default Post;
