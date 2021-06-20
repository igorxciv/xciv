import { FC } from 'react'
import classNames from 'classnames'
import styles from './Header.module.scss'

export const Header: FC = () => {
  const headerClasses = classNames(styles['header'])

  return (
    <header className={headerClasses}>
      header
    </header>
  )
}
