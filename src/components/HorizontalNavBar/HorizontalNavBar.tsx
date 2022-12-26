import cn from 'classnames'

import styles from './HorizontalNavBar.module.scss'
import { menuItems } from './menuItems'

import MenuItems from '../MenuItems/MenuItems'

export type submenuItem = {
  title: string
  url: string
}

export type menuItem = {
  title: string
  url: string
  submenu?: submenuItem[]
}

const HorizontalNavBar = () => {
  return (
    <nav className={cn(styles.container)}>
      <ul className={cn(styles.menus)}>
        {menuItems.map((menu: menuItem, index: number) => {
          const submenuDepth = 0
          return <MenuItems item={menu} key={index} submenuDepth={submenuDepth} />
        })}
      </ul>
    </nav>
  )
}

export default HorizontalNavBar
