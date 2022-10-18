import axios from "axios";

const link = 'http://localhost:9999'

class PatientsPortalApi {
    getInstance = () => {
        const instance = axios.create({
            baseURL: link,
            headers:{
                "Content-Type": "application/json",
            }
        })
        return instance
    }

    fetchData = async () => {
        const response = await this.getInstance().get('/patients').then((res) => res.data)
        console.log(response)
        return response
    }


}


export default  new PatientsPortalApi()