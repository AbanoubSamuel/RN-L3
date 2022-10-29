import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "e1fa8e34f5cb08e8924a436cfe88cf0f",
    },
});
axiosInstance.interceptors.request.use(

    function (config)
    {
        //config.headers["a"]="dsdsd"
        return config;
    }
)

axiosInstance.interceptors.response.use(

    function (response)
    {
        return response;
    }
)