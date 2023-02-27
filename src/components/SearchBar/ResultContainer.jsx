import React, { useRef, useState } from "react";
import "./Searchbarstyle.css"
import {Link} from 'react-router-dom';
import db from '../../../api/db.json';
import Advertisement from "../../pages/Advertisement";

export const ResultContainer = ({ onChange, suggestions }) => {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const boxRef = useRef();
  const handleChange = (e) => {
    setQ(e.target.value);
    onChange(e.target.value);
  };
  const data = db.products;

  const handleKeyUp = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 38: {
        if (active === 1) {
          setActive(0);
        } else if (active <= 0) {
          setActive(suggestions.length);
        } else {
          setActive((prev) => prev - 1);
        }
        if (active > 3) {
          boxRef.current.scrollTop -= 25;
        }
        break;
      }
      case 40: {
        if (active >= suggestions.length) {
          setActive(0);
        } else {
          setActive((prev) => prev + 1);
        }
        if (active > 3) {
          boxRef.current.scrollTop += 25;
        }
        break;
      }
      default: {
        return;
      }
    }
  };


  return (
    <div onKeyUp={handleKeyUp} className="container-bar">      
      <input className="searchStyle" placeholder="Busqueda Meraky" value={q} onChange={handleChange} />
      {q && (
        <div ref={boxRef} active={active} className="result-search">
          
          {suggestions.map((item, i) => (
            
            <div onMouseOver={() => setActive(i + 1)} key={item}>


             <Link to={`/advertisement/${item}`}> <p>{item}</p></Link>
             
              {/* Poner el item dentro de algo linkeable que conecte por ejemplo, con el id*/}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
