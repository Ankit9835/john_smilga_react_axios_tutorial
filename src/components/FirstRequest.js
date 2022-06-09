import React, { useEffect } from 'react'
import axios from 'axios'

const url = 'https://course-api.com/react-store-products'

const FirstRequest = async () => {

 const firstData = () => {
  try{
     const data = await axios(url);
     const response = data.response;
     console.log(response)
  } catch(err){
     console.log(err.response)
  }
 }
 
 useEffect(()=>{
  firstData()
 },[])

  return <div>test</div>
}

export default FirstRequest
