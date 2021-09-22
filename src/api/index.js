import axios from "axios";



export const getPlacesData=async(type,sw,ne)=>{
    try {
        const {data:{data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{

            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '43d6a8e3e8msh9f80bda0c0b6a4cp1f637djsnc6c3aba3e48c'
            }
        })

        return data
    }
    catch (error){
        console.log(error)
    }
}