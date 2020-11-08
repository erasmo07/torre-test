export const baseURL = "";

const urls = {
    search: `https://search.torre.co/people/_search/?size=3&lang=es&aggregate=false&offset=0`,
    user: `${process.env.PROXY_API}/user`,
};


export default urls;