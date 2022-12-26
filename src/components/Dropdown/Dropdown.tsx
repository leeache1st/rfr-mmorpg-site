import cn from 'classnames'

import styles from './Dropdown.module.scss'

import { menuItem } from '../HorizontalNavBar/HorizontalNavBar'
import MenuItems from '../MenuItems/MenuItems'

type DropdownType = {
  submenu: menuItem[]
  dropdown: boolean
  submenuDepth: number
}

const Dropdown: React.FC<DropdownType> = ({ submenu, dropdown, submenuDepth }) => {
  submenuDepth += 1
  return (
    <ul
      className={cn(styles.dropdown, {
        [styles.hide]: !dropdown,
        [styles.show]: dropdown,
        [styles.dropdown_submenu]: submenuDepth > 1,
      })}
    >
      {submenu.map((submenu) => (
        <MenuItems item={submenu} submenuDepth={submenuDepth} />
      ))}
    </ul>
  )
}

export default Dropdown
