import axios from "axios";

const url:string = "http://localhost/6789/api/author"

export const registerAuthor = async(data:any)=>{
    try {
        const config:{} = { 
            headers: { 'Content-Type': 'multipart/form-data' }
         }
        return await axios.post(`${url}/register`, data, config).then((res:any)=>{
            return res.data.data
        })
            
    } catch (error) {
        console.log(error)
        
    }
}
export const SigninAuthor = async(data:any)=>{
    try {
        return await axios.post(`${url}/signinAuthor`, data).then((res:any)=>{
            return res.data.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const getOneAuthor = async(authorID:any)=>{
    try {
        return await axios.get(`${url}/${authorID}/getOne`).then((res:any)=>{
            return res.data.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const getAllAuthor = async()=>{
    try {
        return await axios.get(`${url}/getall`).then((res:any)=>{
            return res.data.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}