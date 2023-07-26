import axios from 'axios'
const apiUrl=`http://localhost:3001/api/v1`;

//get the token
export async function axiosToken(params){
  try {
    let response = await axios.post(apiUrl+'/user/login', params)
    return response.data.body.token
  } catch(error) {
    return error.response
  }
}

//get the user name
export async function axiosProfile(token){
  try {
    let response = await axios.post(apiUrl+'/user/profile',{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data.body
  } catch(error) {
    return error.response
  }
}

//change the user name
export async function axiosPutUser(token,newUser){
  try {
    let response = await axios.put(apiUrl+'/user/profile',newUser,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data.body
  } catch(error) {
    return error.response
  }
}
