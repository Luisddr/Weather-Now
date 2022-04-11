import React, {useState} from 'react';
import Style from "./SearchBar.module.css"


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("")
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input className={Style.inputbar}
        type="text"
        placeholder="find your city"
        value = {city}
        onChange = {e => setCity(e.target.value)}
      />
      <input className={Style.botonS} type="submit" value="find" />
    </form>
  );
}
