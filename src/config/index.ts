const URL_BACKEND_TOP =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://netcheflix.herokuapp.com/'

export default {
  URL_BACKEND_TOP
}
