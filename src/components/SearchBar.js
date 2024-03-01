import { useState } from "react";
import "./SearchBar.css";



function SearchBar({enSubmit}){

    const [term, setTerm] = useState("");

 
 
    function handleFormSubmit(e){
        e.preventDefault();
        enSubmit(term);

    }

    function handleChange(e){
        setTerm(e.target.value);

    }

    return (

        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Que andas buscando?</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>

    )

 

 

}

 

export default SearchBar;