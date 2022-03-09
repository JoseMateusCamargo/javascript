// Documentation: https://axios-http.com/ptbr/docs/example

//--------------------[Headers in an Axios POST request]
const username = ''
const password = ''
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
const url = 'https://...'
const data = {...}

axios.post(url, data, {headers: {'Authorization': `Basic ${token}`},})

//--------------------[Headers in an Axios GET request]
axios.get('https://api.github.com/user',
    {
        headers: {'Authorization': `token ${access_token}`}
    }
).then((res) => {
    console.log(res.data)
}).catch((error) => {
    console.error(error)
})