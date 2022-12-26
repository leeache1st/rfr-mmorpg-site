import cn from 'classnames'

import styles from './Header.module.scss'

import HorizontalNavBar from '../HorizontalNavBar/HorizontalNavBar'
import HorizontalNavBarButtons from '../HorizontalNavBarButtons/HorizontalNavBarButtons'

const Header = () => {
  return (
    <header>
      <div className={cn(styles.header)}>
        <a href='/' className={styles.logo}>
          Logo
        </a>
        <HorizontalNavBar />
        <HorizontalNavBarButtons />
      </div>
    </header>
  )
}

export default Header
