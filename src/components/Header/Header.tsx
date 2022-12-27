import cn from 'classnames'

import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import HorizontalNavBar from '../HorizontalNavBar/HorizontalNavBar'
import HorizontalNavBarButtons from '../HorizontalNavBarButtons/HorizontalNavBarButtons'

const Header = () => {
  return (
    <header>
      <div className={cn(styles.header)}>
        <Link to='/' className='logo'>
          Logo
        </Link>
        <HorizontalNavBar />
        <HorizontalNavBarButtons />
      </div>
    </header>
  )
}

export default Header
