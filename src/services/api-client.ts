

import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '624ccdaa331d4a32bcbb493a3e0122c2'
    }
})

