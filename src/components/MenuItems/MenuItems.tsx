import cn from 'classnames'

import { useState } from 'react'

import styles from './MenuItems.module.scss'

import Dropdown from '../Dropdown/Dropdown'

import { menuItem } from '../HorizontalNavBar/HorizontalNavBar'

type MenuItemsProps = {
  item: menuItem
  submenuDepth: number
}

const MenuItems: React.FC<MenuItemsProps> = ({ item, submenuDepth }) => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <li className={cn(styles.menu)}>
      {item.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {item.title} {submenuDepth > 0 ? <span>&raquo;</span> : <span className={cn(styles.arrow)} />}
          </button>
          <Dropdown submenuDepth={submenuDepth} dropdown={dropdown} submenu={item.submenu} />
        </>
      ) : (
        <a href={item.url}>{item.title}</a>
      )}
    </li>
  )
}

export default MenuItems
