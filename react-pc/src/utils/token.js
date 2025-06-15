
const TOKENKEY = 'user_token'
const setToken = (token) => {
    localStorage.setItem(TOKENKEY, token)
}
const getToken = () => {
    return localStorage.getItem(TOKENKEY) || ''
}

const removeToken = () => {
    localStorage.removeItem(TOKENKEY)
}

export {
    setToken,
    getToken,
    removeToken
}