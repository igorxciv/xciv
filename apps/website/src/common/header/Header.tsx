import classNames from 'classnames'
import { FC } from 'react'
import { Logo } from './logo'
import styles from './Header.module.scss'
import { MobileHeader } from './mobile-header'

export const Header: FC = () => {
  const headerClasses = classNames(styles['header'])

  return (
    <header className={headerClasses}>
      <Logo />

      <MobileHeader />
    </header>
  )
}
