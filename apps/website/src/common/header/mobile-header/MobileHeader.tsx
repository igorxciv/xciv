import { createRef, FC, useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { transitionClasses } from '@ui-kit/utils'
import { MobileMenu } from './mobile-menu'
import { Hamburger } from './hamburger'
import styles from './MobileHeader.module.scss'

export const MobileHeader: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = createRef<HTMLElement>()

  const handleHamburgerClick = useCallback(() => {
    setIsMobileMenuOpen((isOpen) => !isOpen)
  }, [])

  const mobileMenuTransitionClasses = transitionClasses(styles, 'mobile-header__mobile-menu')
  const mobileMenuClasses = classNames(styles['mobile-header__mobile-menu'])
  const hamburgerClasses = classNames(styles['mobile-header__hamburger'])

  return (
    <>
      <Hamburger crossed={isMobileMenuOpen} onClick={handleHamburgerClick} className={hamburgerClasses} />
      <CSSTransition in={isMobileMenuOpen} timeout={200} classNames={mobileMenuTransitionClasses} nodeRef={mobileMenuRef} unmountOnExit>
        <MobileMenu ref={mobileMenuRef} className={mobileMenuClasses} />
      </CSSTransition>
    </>
  )
}
