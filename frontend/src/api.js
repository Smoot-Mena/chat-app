const customAxiosAndBaseURL = axios.create({
    baseUrl: import.meta.env.PROD ? import.meta.env.VITE_API : ""
});

export default customAxiosAndBaseURL;