const baseUrl = 'http://localhost:5000/api'

const methods = {
    post: async function (endpoint, body) {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        
        // send data to server
        const response = await fetch(`${baseUrl}/${endpoint}`, options)
        // json format
        const json = await response.json()

        // failure 
        if (!response.ok) {
            // failure in fields
            if (response.status === 423) {
                Object.keys(json).forEach(key => {
                    throw Error(json[key])
                })
            }
            // failure messages
            throw Error(json.message)
        }

        return json 
    }
}


export async function register (username, password) {
    const json = await methods.post('auth/register', { username, password })
    return json.token
}

export async function login (username, password) {
    const json = await methods.post('auth/login', { username, password})
    return json.token
}