import cn from 'classnames'

import styles from './HorizontalNavBarButtons.module.scss'

const HorizontalNavBarButtons = () => {
  return (
    <div className={cn(styles.container)}>
      <div className={styles.icon}>login</div>
      <div className={styles.icon}>drawer</div>
      <div className={styles.icon}>pivo</div>
      <div className={styles.icon}>pivo</div>
    </div>
  )
}

export default HorizontalNavBarButtons
