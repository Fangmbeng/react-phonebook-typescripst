let token = 'kefioefvpeoqvpoqeo'
{/*a set of rules to connect with the backend routes*/}

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts`,
        {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fztch Data from Browser")
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            },
            body: JSON.stringify(data)
        });
        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*"
            }
        })
    }
}
    /*edit: async (data: any={}) => {
        const response = await fetch(`http`,
        {
            method: `GET`,
            headers: {
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            },
            
            body: JSON.stringify(data)
        }),
        if (!response.ok) {
            throw new Error("Failed to fztch Data from Browser")
        }

        return await response.json()
    },

    post: async (data: any={}) => {
        const response = await fetch(`http`,
        {
            method: `GET`,
            headers: {
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            },
            
            body: JSON.stringify(data)
        }),
        if (!response.ok) {
            throw new Error("Failed to fztch Data from Browser")
        }

        return await response.json()
    },

    create: async (data: any={}) => {
        const response = await fetch(`http`,
        {
            method: `GET`,
            headers: {
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            },
            
            body: JSON.stringify(data)
        })
    },

    delete: async () => {
        const response = await fetch(`http`,
        {
            method: `GET`,
            headers: {
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            },
            
            body: JSON.stringify(data)
        })
    }
    ----------------------------------------------------------------------------------------------------
let token = 'b260bbb5f18c6bed689db9884aa53bab5b4affb1e240ebbb'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}*/