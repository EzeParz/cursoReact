import Frutas from "./Frutas";


function ProfileCard ({imagen, titulo, parrafo}){

    
    return (

        <div>
            <img style={Frutas} src={imagen}/>

        </div>
    )
}


export default ProfileCard;