import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'
import styles from '../../assets/scss/dashboard/menu.module.scss'
import {CiSearch} from 'react-icons/ci';
import {BsBell} from 'react-icons/bs'
import {GrLicense,GrUserAdmin} from 'react-icons/gr'
import {TbLockAccess} from 'react-icons/tb'
import {RiUserStarLine} from 'react-icons/ri'
import {BiUserCircle} from 'react-icons/bi'
import ClientsList from '../Clientes/ClientesList'
import { NewClient } from '../Clientes/NewClient'
import { UseComponents } from '../../hooks/useComponents'
import { UserFormClient } from '../../hooks/useFormClient';
import { Licenses } from '../licenses/Licenses';
export const Components = (()=>{
  const components = [
    <ClientsList/>,
    <NewClient/>,
    <Licenses/>
  ]
  return {
    components
  }
})


export const Dashboard = () => {

  const { User , HandleLogOut } = useContext(AuthContext)
  
  const {components} = Components()

  const {clients} = UserFormClient()

  const {changeComponent,activeComponent} = UseComponents(components)

  return (
    <>
    <section className={styles.Dashboard}>
        <div className={styles.MenuLateral}>
          <div className={styles.logo}>
            <h2>SISGESC LICENSE 1.0</h2>
          </div>

          <div className={styles.navbar}>
            <ul>
              <li onClick={(e)=>changeComponent(0)}>Dashboard</li>
              <li onClick={(e)=>changeComponent(1)}>Adicionar cliente</li>
              <li onClick={(e)=>changeComponent(2)}>Gerenciar Licença</li>
              <li>Usuarios</li>
              <li>Administradores</li>
              <li onClick={HandleLogOut}>Sair</li>
            </ul>
          </div>
        </div>

        <div className={styles.Menu}>
          <div className={styles.menu}>
            <div className={styles.pesquisa}>
              <span>
                <input type="text" placeholder="search" />{" "}
                <CiSearch className={styles.searchIcone} />
              </span>
            </div>

            <div className={styles.user}>
              <BsBell className={styles.IconsNotice} />
              <span>
                {User.level == "Admin"?<TbLockAccess className={styles.iconAdmin}/>: ''}
                {!User.image?<BiUserCircle className={styles.userDefault}/>:<img src={'image/'+User.image}/>}
              </span>
              
              <strong>{User.name}</strong>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.CardTop}>
                  <div className={styles.cardContent}>
                    <span>Total de Licenças Gerada</span>
                    <span>900</span>
                  </div>

                  <div className={styles.IconsLicense}>
                  <GrLicense/>
                  </div>
                </div>

                <div className={styles.CardFooter}>
                  <strong>+8797 nos ultimos dias</strong>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.CardTop}>
                  <div className={styles.cardContent}>
                    <span>Total de Clientes</span>
                    <span>{clients.length}</span>
                  </div>

                  <div className={styles.IconsLicense}>
                    <RiUserStarLine/>
                  </div>
                </div>

                <div className={styles.CardFooter}>
                  <strong>+8797 nos ultimos dias</strong>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.CardTop}>
                  <div className={styles.cardContent}>
                    <span>Total de Administradores</span>
                    <span>900</span>
                  </div>

                  <div className={styles.IconsLicense}>
                    <GrUserAdmin/>
                  </div>
                </div>

                <div className={styles.CardFooter}>
                  <strong>+8797 nos ultimos dias</strong>
                </div>
              </div>
            </div>
            <div className={styles.ClientsList}>
              {activeComponent}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
