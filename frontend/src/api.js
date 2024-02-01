const customAxiosAndBaseURL = axios.create({
    baseUrl: import.meta.env.PROD ? import.meta.env.VITE_API : "http://localhost:3216"
});

export default customAxiosAndBaseURL;