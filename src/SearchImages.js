import axios from "axios";


const searchImages = async (term) => {


    const response = await axios.get("https://api.unsplash.com/search/photos", {

        headers:{
            Authorization:" Client-ID Nlur17l7AUhYH4gbnWwbJA40Naj5_2hV7VhbCU2jqgQ"
        },
        params:{
            query:term
        }
    })


    return response.data.results

}

export default searchImages;