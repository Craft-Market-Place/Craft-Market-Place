import { useEffect, useState } from "react";
import { ResultContainer} from "./ResultContainer"
import db from "../../../api/db.json"
import "./Searchbarstyle.css"


export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query !== "") {
      const out = db.products
        .filter((itemname) =>
          itemname.title.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((itemname) => <li className="listSearchBar">
        <a className="linkStyleSearchBar" href={itemname.image} target="_blank" rel="noopener noreferrer">{itemname.title}</a> 
      </li>);
      setSuggestions(out);
    }
  }, [query]);

  return (
    <div>
      <div className="searContainer">
      <div className="searchBarStyle">
      <ResultContainer suggestions={suggestions} onChange={(val) => setQuery(val)} />
      </div>
      </div>
    </div>
  );
}



