import { Nav, AdminNav } from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

export const UserLayout = ({ children }) => {
  return <>
    <Meta />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
  </>
}

export const AdminLayout = ({ children }) => {
  return <>
    <Meta />
    <AdminNav />
    <div className={styles.container} style={{ background: 'red' }}>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
  </>
}

