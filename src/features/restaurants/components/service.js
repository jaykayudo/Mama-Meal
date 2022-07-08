import { mocks, mockImages } from "../../../apis"
import camelize from "camelize"
export const restaurantApi = (location = "51.219448,4.402464") =>{
    return new Promise((resolve, reject)=>{
        const mock = mocks[location]
        if(mock)
            resolve(mock)
        else
            reject("No mock data found")
    })
}
export const restaurantTranform = ({results = []}) =>{
    const newResult = camelize(results);
    const mappedResult = newResult.map(data =>{
        const image  = mockImages[Math.floor(Math.random() * (mockImages.length -1))]
        return {
            ...data,
            isClosed: data.businessStatus === "CLOSED_TEMPORARILY",
            isOpenNow: data.openingHours && data.openingHours.openNow,
            address: data.vicinity,
            photos: image
        }
    })
    return mappedResult;
}
