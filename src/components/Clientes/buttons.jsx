import React from 'react'
import { UseComponents } from '../../hooks/useComponents'
import { Dashboard } from '../dashboard/Dashboard'

export const Buttons = ({text,style,type,action}) => {
  const cancelar = ((key)=>{
    action(key)
  })
  return (
    <>
        <button className={style} onClick={cancelar} type={type}>{text}</button>
    </>
  )
}
