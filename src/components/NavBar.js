import Nav2 from "./Nav2";
import Nav3 from "./Nav3.js";
import "bulma/css/bulma.css";




function NavBar (props){

    
    return (
        <section>
            <div style={Nav2} > 
                <a style={Nav3} >{props.titulo}</a>
                <a style={Nav3} >{props.titulo2}</a>
                <a style={Nav3} >{props.titulo3}</a>
                <a style={Nav3} >{props.titulo4}</a>

            </div>
        </section>
    )
}


export default NavBar;