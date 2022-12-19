import styles from  '../../assets/scss/Clients/ClientsList.module.scss'
import { UserFormClient } from "../../hooks/useFormClient"
import { Dashboard } from '../dashboard/Dashboard'
const ClientsList = ()=>{
    
    const {clients,ShowClient} = UserFormClient()
    
    const {momentFormat} = UserFormClient()

    const {Mudar} = Dashboard()
    
    return(
        <div className={styles.ListLicense}>
            <div className={styles.ListLicenseTitolos}>
                <strong>Empresa</strong>
                <strong>Nif</strong>
                <strong>Gerente</strong>
                <strong>Tipo de Licença</strong>
                <strong>Licenças</strong>
                <strong>Licença ativa</strong>
                <strong>Data de expiração</strong>
                <strong>Estado</strong>
            </div>
            <div className={styles.ListLicenseContent}>
                { clients.length > 0 ?
                    (
                        clients.map((client)=>
                            <div key={client._id} onClick={()=>{Mudar(client)}} className={styles.List}>
                                <span>{client.company}</span>
                                <span>{client.nif}</span>
                                <span>{client.manager}</span>
                                <span>{client.name}</span>
                                <span>{!client.licenses ? 0:client.licenses}</span>
                                <span>{!client.ActiveLicense ? '?':client.ActiveLicense}</span>
                                <span>{!client.ExpirationDate ? 'Não ha licença ativa':momentFormat(new Date())}</span>
                                <span>{client.state}</span>
                            </div>
                        )
                    ):(
                        'dsd'
                    )
                }
            </div>
        </div>
    )
}
export default ClientsList