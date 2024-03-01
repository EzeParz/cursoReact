import Frutas from "./Frutas";


function ProfileCard ({imagen}){

    
    return (

        <div>
            <img style={Frutas} src={imagen}/>

        </div>
    )
}


export default ProfileCard;