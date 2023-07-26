import "../styles/UserPage.css"
import UserPageCard from "../components/UserPageCard"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosPutUser } from '../database/callApi';
import * as connectionActions from '../outils/connection';
import {useNavigate} from "react-router-dom"

function UserPage(){
  const stateReduxFirstName= useSelector((state)=>state.connection.firstName)
  const stateReduxLastName= useSelector((state)=>state.connection.lastName)
  const stateReduxToken= useSelector((state)=>state.connection.token)
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [displayEditName, setdisplayEditName] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function displayFormEdit(){
    setdisplayEditName(!displayEditName)
  }

 async function editUser(){
    const axios=await axiosPutUser(stateReduxToken,{firstName,lastName})
    dispatch(connectionActions.getUser({firstName:axios.firstName,lastName:axios.lastName}))
    setdisplayEditName(!displayEditName)
  }

  if(stateReduxToken){
    return(
      <main className="main bg-dark">
        <div className="header">
          {
            displayEditName? (
              <>
                  <h1>Welcome back</h1>
                  <form >
                      <div className='form-first-line'>
                          <label htmlFor="fisrtName">
                              <input type="text" id="firstName" className='input-new' onChange={(e)=>setFirstName(e.target.value)}/>
                          </label>

                          <label htmlFor="lastName">
                              <input type="text" id="lastName" className='input-new' onChange={(e)=>setLastName(e.target.value)}/>
                          </label>
                      </div>
                      <div className='form-second-line'>
                          <button type='button' className='button-edit' onClick={()=>editUser()}>
                              Save
                          </button>
                          <button type='button' className='button-edit' onClick={()=>displayFormEdit()}>
                              Cancel
                          </button>
                      </div>
                  </form>
              </>
          ):(
              <>
                  <h1>Welcome back<br />{stateReduxFirstName+" "+stateReduxLastName} !</h1>
                  <button className="edit-button" onClick={()=>displayFormEdit()}>Edit Name</button>
              </>
          )
        }
        </div>
        <h2 className="sr-only">Accounts</h2>
        <UserPageCard
          title="Argent Bank Checking (x8349)</"
          amount="$2,082.79"
          description="Available Balance"
          />
          <UserPageCard
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          />
          <UserPageCard
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          />
      </main>
    )
  } else {
      navigate("/signIn")
  }
}

export default UserPage
