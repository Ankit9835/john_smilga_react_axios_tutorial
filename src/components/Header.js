import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'

const Header = () => {
  const [joke, setJoke] = useState('text')

  const fetchData = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      setJoke(data.joke)
    } catch (err) {
      console.log(err.response)
    }
  }
  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchData}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}

export default Header
