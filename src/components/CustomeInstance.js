import React, { useEffect } from 'react'
import axios from 'axios'
import authFetch from '../axios/custom-instance'

const randomUserUrl = 'https://randomuser.me/api'

const CustomeInstance = () => {
  const fetchData = async () => {
    try {
      const data = await authFetch('/react-store-products')
      const secondData = await axios(randomUserUrl)
      console.log(data, secondData)
    } catch (err) {
      console.log(err.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return <div></div>
}

export default CustomeInstance
