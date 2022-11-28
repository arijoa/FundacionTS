

const login = (accesToken)=>{
    return new Promise((accept, reject)=>{
        fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accesToken}`)
        .then(res => res.json())
        .then(data => accept(data))
        .catch(err => reject(err))
    })
}

export default{
    login
}