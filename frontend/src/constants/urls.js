let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000/'
} else {
    baseUrl = 'https://sagittarius-luna.propulsion-learn.ch/'
}

export default baseUrl
