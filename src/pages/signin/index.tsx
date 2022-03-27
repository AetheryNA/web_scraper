import axios from 'axios'

const index = () => {
  const handleAuthLogin = () => {
    axios.get(`${import.meta.env.VITE_SCRAPER_API}/api/auth/google`)
      .then(response => {
        console.log('hello');

        if (response.status == 302) {
          console.log('gello');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <button onClick={handleAuthLogin}>Login with Google</button>
    </>
  )
}

export default index
