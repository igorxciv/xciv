import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { Styled } from '@ui-kit/types'
import styles from './MobileMenu.module.scss'

type Props = Styled

export const MobileMenu = forwardRef<HTMLElement, Props>((props, ref) => {
  const { className } = props
  const navClasses = classNames(styles['mobile-menu'], className)
  const listClasses = classNames(styles['mobile-menu__list'])
  const itemClasses = classNames(styles['mobile-menu__item'])
  const linkClasses = classNames(styles['mobile-menu__link'])

  return (
    <nav ref={ref} className={navClasses}>
      <ul className={listClasses}>
        <li className={itemClasses}>
          <NavLink to="/courses" className={linkClasses}>
            Курсы
          </NavLink>
        </li>
        <li className={itemClasses}>
          <NavLink to="/shop" className={linkClasses}>
            Магазин
          </NavLink>
        </li>
        <li className={itemClasses}>
          <NavLink to="/videos" className={linkClasses}>
            Видео
          </NavLink>
        </li>
      </ul>
    </nav>
  )
})
