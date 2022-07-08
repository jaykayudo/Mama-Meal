import { locations } from "./location";
import camelize from "camelize";

export const locationRequest = (search)=>{
    return new Promise((resolve,reject)=>{
        const locationArea = locations[search]
        if(!locationArea)
            reject("Location Not Found")
        else
            resolve(locationArea)
    })
};
export const locationTransform = (result) =>{
    const formattedResult = camelize(result)
    const {geometry={} }= formattedResult.results[0]; 
    const {lat, lng} = geometry.location;
    return {
        lat,lng, viewport: geometry.viewport
    }
};