import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import authFetch from '../axios/interceptors'

const randomUserUrl = 'https://randomuser.me/api'

const Interceptors = () => {
  const fetchData = async () => {
    const data = await authFetch('/react-store-products')
    const data_second = await axios(randomUserUrl)
    console.log(data, data_second)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return <div></div>
}

export default Interceptors
