import cn from 'classnames'

import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import styles from './MenuItems.module.scss'

import Dropdown from '../Dropdown/Dropdown'

import { menuItem } from '../HorizontalNavBar/HorizontalNavBar'

type MenuItemsProps = {
  item: menuItem
  submenuDepth: number
}

const MenuItems: React.FC<MenuItemsProps> = ({ item, submenuDepth }) => {
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  let ref: any = useRef()
  return (
    <li className={cn(styles.menu)} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {item.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <Link to={item.url}>{item.title}</Link>
            {submenuDepth > 0 ? <span>&raquo;</span> : <span className={cn(styles.arrow)} />}
          </button>
          <Dropdown submenuDepth={submenuDepth} dropdown={dropdown} submenu={item.submenu} />
        </>
      ) : (
        <Link to={item.url}>{item.title}</Link>
      )}
    </li>
  )
}

export default MenuItems
