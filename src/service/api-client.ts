import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e3bd1d44d7ea4527a259d8f8209a4926'
    }
})