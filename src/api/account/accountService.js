export const loginUser = async(data) => {
    try {
        const response = await fetch(`/api/account/login`, {
            method: 'POST',
            body: JSON.stringify[{
                ...data
            }]
        })
        return response
    } catch (error) {
        console.error('Login failed with: ' + error)
    }
}

export const loginUserJsonServer = async() => {
    try {
        const response = await fetch(`http://localhost:3000/users`,{
            method: 'GET'
        });
        return response.json();
    } catch (error) {
        console.error(error)
    }
}

export const logoutUser = async(token) => {
    try {
        const response = await fetch(`/api/account/logout`, {
            method: 'POST',
            'Authorization': 'Bearer ' + token
        })
        return response
    } catch (error) {
        console.error('Logout failed with: ' + error)
    }
}