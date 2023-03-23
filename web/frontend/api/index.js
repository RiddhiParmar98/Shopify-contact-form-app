import axios from 'axios'

const Api = axios.create({
    baseURL: "https://563b-122-170-99-65.in.ngrok.io/api/",
    headers:{
        "Application-Type": "application/json",
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // "Access-Control-Allow-Origin": "*"
    }
})

export default Api
