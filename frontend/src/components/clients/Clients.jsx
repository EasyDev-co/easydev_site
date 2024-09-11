import { clients } from '../../mockData/clients'
import styles from './styles/Clients.module.scss'

const Clients = () => {
  return (
    <div className={styles.container}>
      {clients.length
        ? clients.map((client) => (
            <div className={styles.box} key={client.id}>
              <img src={client.logo} alt={client.company} />
              <div>{client.company}</div>
            </div>
          ))
        : 'Скоро появится'}
    </div>
  )
}

export default Clients
