import { useLoaderData } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Location from '../assets/location.png';
import Time from '../assets/time.png';
import './Post.css';

const Post = () => {
  const { post } = useLoaderData();

  return (
    <div id="div-post" className="container-ads d-flex">
      <img className="img-fluid " id="img-ad" src={post.img} alt="imagen" />
      <div className="ads p-2" id="container-text">
      
        <h1 className="title-ad">{post.title}</h1>
        <div className="ad-title d-flex justify-content-between">
          <h3><img src={Location} id="logo-location"/>{post.location}</h3>
          <h5 className="time"><img src={Time} id="logo-location"/>{post.time}</h5>
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
      <ContactForm />
      </div>
    </div>
  );
};

export default Post;
