

const login = (accesToken)=>{
    return new Promise((accept, rejet)=>{
        fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&acces_token=${accesToken}')
        .then(res=> res.json())
        .then(data=> console.log(data))
    })
}

export default{
    login
}