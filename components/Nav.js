import Link from 'next/link'
import navStyles from '../styles/Nav.module.css';

export const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact?id=123'>Contact</Link>
        </li>
        <li>
          <Link href='/ad_update'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

export const AdminNav = () => {
  return <nav className={navStyles.nav}>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/ad_update'>Admin</Link>
      </li>
    </ul>
  </nav>
}
