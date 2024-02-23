import Nav2 from "./Nav2";




function NavBar (props){

    
    return (

        <div style={Nav2}>
            <h2 style={Nav2}>{props.titulo}</h2>
            <h2 style={Nav2}>{props.titulo2}</h2>
            <h2 style={Nav2}>{props.titulo3}</h2>
            <h2 style={Nav2}>{props.titulo4}</h2>

        </div>
    )
}


export default NavBar;