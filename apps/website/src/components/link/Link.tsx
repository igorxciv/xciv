import { FC, useCallback, MouseEvent } from 'react'
import { Link as RouterLink, LinkProps, useLocation } from 'react-router-dom'

export const Link: FC<LinkProps> = (props: LinkProps) => {
  const { children, to, onClick, ...restProps } = props
  const { pathname } = useLocation()

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === to) {
      event.preventDefault()
    }
    if (onClick) {
      onClick(event)
    }
  }, [onClick, to, pathname])

  return (
    <RouterLink to={to} onClick={handleClick} {...restProps}>
      {children}
    </RouterLink>
  )
}
