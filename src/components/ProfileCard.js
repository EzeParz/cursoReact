

function ProfileCard ({imagen, titulo, parrafo}){

    
    return (

        <div>
            <img src={imagen}/>
            <h1>{titulo}</h1>
            <p> {parrafo}</p>

        </div>
    )
}


export default ProfileCard;