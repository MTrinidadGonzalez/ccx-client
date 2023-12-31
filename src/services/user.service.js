import AxiosClient from "./axios.client"
import {getJsonHeaders, getFormDataHeaders} from '../utils/http'

export default class UserService{
    constructor(){
        this.client= new AxiosClient()
        this.baseURL= `https://ccx-server.onrender.com/api/users`
    }

    getUsers=()=>{
        const requestInfo={
            url:`${this.baseURL}`,
            config:getJsonHeaders() 
        }
        return this.client.makeGetRequest(requestInfo)
    }
    getUserProfile=()=>{
        const requestInfo={
            url:`${this.baseURL}/profile`,
            config:getJsonHeaders()
        }
        return this.client.makeGetRequest(requestInfo)
    }
    getAuthToken=()=>{
        const requestInfo={
            url:`${this.baseURL}/authToken`,
            config:getJsonHeaders()
        }
        return this.client.makeGetRequest(requestInfo)
    }

    getUserByAlias=(body)=> {
        const requestInfo={
            url:`${this.baseURL}/user`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makePostRequest(requestInfo)
    }

    createUser=(body)=> {
        const requestInfo={
            url:`${this.baseURL}/register`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makePostRequest(requestInfo)
    }
    loginUser=(body)=> {
        const requestInfo={
            url:`${this.baseURL}/login`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makePostRequest(requestInfo)
    }

    updateUser=(body)=> {
        const requestInfo={
            url:`${this.baseURL}/updateUser`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makePutRequest(requestInfo)
    }
    
   

    emailToSendRestorePass=(body)=>{
        const requestInfo={
            url:`${this.baseURL}/emailToSendNewPsw`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makePostRequest(requestInfo)
    }

    newPassword=(body)=>{
        const requestInfo={
            url:`${this.baseURL}/newPassword`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makePostRequest(requestInfo)
    }


    convertToPremium=()=>{
        const requestInfo={
            url:`${this.baseURL}/convertToPremium`,
            config:getJsonHeaders()
        }
        return this.client.makeGetRequest(requestInfo)
    }

    revertPremium=()=>{
        const requestInfo={
            url:`${this.baseURL}/revertPremium`,
            config:getJsonHeaders()
        }
        return this.client.makeGetRequest(requestInfo)
    }

    deleteUser=(body)=>{
        const requestInfo={
            url:`${this.baseURL}/${body}`,
            body,
            config:getJsonHeaders()
        }
        return this.client.makeDeleteRequest(requestInfo)
    }


    updateImgProfile = (formData) => { 
        const requestInfo = {
            url: `${this.baseURL}/postImgProfile`,
            body: formData,
            config: getFormDataHeaders() 
        }
        return this.client.makePostRequest(requestInfo)
    }
   
    cerrarSession=()=>{
        const requestInfo={
            url:`${this.baseURL}/cerrarsession`,
            config:getJsonHeaders()
        }
        return this.client.makeGetRequest(requestInfo)
    }
}