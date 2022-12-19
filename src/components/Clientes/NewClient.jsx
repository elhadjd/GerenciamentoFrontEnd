import React, { useContext, useEffect, useState } from "react";
import styles from '../../assets/scss/Clients/NewClient.module.scss'
import { UserFormClient } from "../../hooks/useFormClient";
import { Buttons } from "./buttons";
import {RiImageEditFill} from 'react-icons/ri'
import {FcRemoveImage} from 'react-icons/fc'
import { Components } from "../dashboard/Dashboard";
import { UseComponents } from "../../hooks/useComponents";

export const NewClient = ((Client)=>{
    const {components} = Components()

    const {changeComponent} = UseComponents(components)

    
    const {useForm,onFileChangeImg,image,handleSubmitForm, handleUpdateInput} = UserFormClient()

    return (
        <section className={styles.Principal}>
            <header className={styles.header}>
                <h2>{!useForm.id ?'Novo liente' : 'Cliente'}</h2>
            </header>
            <div className={styles.form_container}>
                <form>
                    <div className={styles.buttons}>
                        <Buttons text="Guardar" type="submit" action={(e)=>handleSubmitForm(e)} style={styles.BtnSave}/>
                        <Buttons text="Descartar" action={(e)=>changeComponent(0)} type="button" style={styles.BtnCancel}/>
                    </div>
                    <div className={styles.form_content}>
                        <div className={styles.form_top}>
                            <div className={styles.form_left}>
                                <div className={styles.form_control_company}>
                                    <label htmlFor="company">Empresa:</label>
                                    <input type="text" value={useForm.company} onChange={(e)=>handleUpdateInput(e)} name="company" id="company" />
                                </div>
                                <div className={styles.form_inputs}>
                                    <div className={styles.form_control}>
                                        <label htmlFor="manager">Gerente:</label>
                                        <label htmlFor="Email">E-mail:</label>
                                    </div>
                                    <div className={styles.form_control}>
                                        <input type="text" value={useForm.manager} onChange={(e)=>handleUpdateInput(e)} name="manager" id="manager" />
                                        <input type="text" value={useForm.Email} onChange={(e)=>handleUpdateInput(e)} name="email" id="Email" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.form_right}>
                                <div className={styles.handleImg}>
                                    <div className={styles.editImg}>
                                        <label htmlFor="changeImg">
                                            <RiImageEditFill/>
                                            <input type="file" onChange={(e)=>onFileChangeImg(e)} name="changeImg" id="changeImg"/>
                                        </label>
                                        <FcRemoveImage/>
                                    </div>
                                    
                                </div>
                                <img src={image} alt="user.jpg" />
                            </div>
                        </div>
                        <div className={styles.form_bottom}>
                            <div>
                                <div className={styles.labels}>
                                    <label htmlFor="nif">Nif:</label>
                                    <label htmlFor="phone">Telefone:</label>
                                    <label htmlFor="city">Cidade:</label>
                                </div>
                                <div className={styles.inputs}>
                                    <input type="text" value={useForm.nif} onChange={(e)=>handleUpdateInput(e)} name="nif" id="nif" />
                                    <input type="text" value={useForm.phone} onChange={(e)=>handleUpdateInput(e)} name="phone" id="phone" />
                                    <input type="text" value={useForm.city} onChange={(e)=>handleUpdateInput(e)} name="city" id="city" />
                                </div>
                            </div>
                            <div>
                                <div className={styles.labels}>
                                    <label htmlFor="address">Morada:</label>
                                    <label htmlFor="road">Rua:</label>
                                    <label htmlFor="LicenseType">Planos:</label>
                                </div>
                                <div className={styles.inputs}>
                                    <input type="text" value={useForm.address} onChange={(e)=>handleUpdateInput(e)} name="address" id="address" />
                                    <input type="text" value={useForm.road} onChange={(e)=>handleUpdateInput(e)} name="road" id="road" />
                                    <select>
                                        <option>Selectiona o plano</option>
                                        <option>Basico</option>
                                        <option>Premuim</option>
                                        <option>Pro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
})