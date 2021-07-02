import { FC } from 'react'
import classNames from 'classnames'
import { Link as RouterLink, LinkProps, useLocation } from 'react-router-dom'
import styles from './Link.module.scss'

export const Link: FC<LinkProps> = (props: LinkProps) => {
  const { children, to, className, ...restProps } = props
  const { pathname } = useLocation()

  const linkClasses = classNames(className, { [styles['link--no-navigation']]: pathname === to })

  return (
    <RouterLink to={to} className={linkClasses} {...restProps}>
      {children}
    </RouterLink>
  )
}
