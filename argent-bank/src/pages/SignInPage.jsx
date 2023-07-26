import '../styles/SignInPage.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as connectionActions from '../outils/connection';
import { axiosToken, axiosProfile } from '../database/callApi';

function SignInPage() {

  const dispatch = useDispatch()
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()
  const navigate = useNavigate()
  const stateReduxToken=useSelector((state)=>state.connection.token)

  async function  getUserAxios(){
    const axios=await axiosProfile(stateReduxToken)
    dispatch(connectionActions.getUser({firstName:axios.firstName,lastName:axios.lastName}))
  }

  async function submit(event){
    event.preventDefault()
    const responseAxios= await axiosToken({email,password})
    if(responseAxios){
      if(responseAxios.status === 400){
        alert("L'Email ou le mot de passe saisi est incorrect")
      } else {
        dispatch(connectionActions.getToken({token:responseAxios,email:email}))
      }
    }
  }

  useEffect(()=>{
    if(stateReduxToken){
      getUserAxios()
      navigate("/user")
    }
  },[stateReduxToken])

  return (
     <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e=>setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button  className="sign-in-button" onClick={event=>submit(event)}>Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignInPage
