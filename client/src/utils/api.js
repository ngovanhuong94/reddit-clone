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

        const response = await fetch(`${baseUrl}/${endpoint}`, options)
        const json = await response.json()

        if (!response.ok) {
            if (response.status === 423) {
                Object.keys(json).forEach(key => {
                    throw Error(json[key])
                })
            }
        }

        return json 
    }
}


export async function register (username, password) {
    const json = await methods.post('auth/register', { username, password })
    return json.token
}