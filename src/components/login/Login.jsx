import React from 'react'
import {FaUserLock} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import styles from '../../assets/login/index.module.scss'
import { Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Logar } from '../../Apis/Apis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'
import { useEffect } from 'react'
export const Login = () => {

  const {login} = useContext(AuthContext)

  const [form,setForm] = useState({
    email: "",
    password: ""
  })

  const {authenticated} = useContext(AuthContext)


  const HandelUpdatedForm = ((e)=>{
    form[e.target.name] = e.target.value
    setForm({...form})
  })

  const HandelSubmitForm = ((e)=>{
    e.preventDefault()
    Logar(form)
    .then((response) => {
      login(response.data.user,response.data.token)
    }).catch((err) => {
      // toast(String(err.response.data.message))
      console.log(err);
    });
    
    
  })

  return (
    <div className={styles.Principal}>
      <ToastContainer/>
      <div className={styles.form_container}>
        <form onSubmit={(e)=>HandelSubmitForm(e)}>
          <div className={styles.form_icon}>
            <FaUserLock/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail: </label>
            <input type="text" value={form.email} onChange={(e)=>HandelUpdatedForm(e)} name="email" id="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="password">Senha: </label>
            <input type="password" onChange={(e)=>HandelUpdatedForm(e)} value={form.password} name="password" id="password" />
          </div>
          <div className={styles.form_submit}>
            <button type='submit'>Entrar</button>
          </div>
        </form>
        <div className={styles.form_redes}>
          <NavLink to='http://facebook.com' className={styles.facebook}>
            <FaFacebookF/>
          </NavLink>
          <NavLink to='http://google.com' className={styles.google}>
            <FcGoogle/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
