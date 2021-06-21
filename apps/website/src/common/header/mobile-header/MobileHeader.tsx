import { createRef, FC, useCallback, useState } from 'react'
import classNames from 'classnames'
import { MobileMenu } from './mobile-menu'
import { Hamburger } from './hamburger'
import styles from './MobileHeader.module.scss'

export const MobileHeader: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = createRef<HTMLElement>()

  const handleHamburgerClick = useCallback(() => {
    setIsMobileMenuOpen((isOpen) => !isOpen)
  }, [])

  const mobileMenuClasses = classNames(styles['mobile-header__mobile-menu'])
  const hamburgerClasses = classNames(styles['mobile-header__hamburger'])

  const mobileMenu = isMobileMenuOpen ? <MobileMenu ref={mobileMenuRef} className={mobileMenuClasses} /> : null

  return (
    <>
      <Hamburger crossed={isMobileMenuOpen} onClick={handleHamburgerClick} className={hamburgerClasses} />
      {mobileMenu}
    </>
  )
}
