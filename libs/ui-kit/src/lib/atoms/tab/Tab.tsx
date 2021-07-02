import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './Tab.module.scss'
import { noop } from '../../utils'

type Props = {
  active?: boolean
  onClick?: () => void
}

export const Tab: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { active, onClick, children } = props

  const tabClasses = classNames(styles['tab'], { [styles['tab--active']]: active })
  const titleClasses = classNames(styles['tab__title'])

  const handleClick = () => {
    if (!active && onClick) {
      onClick()
    }
  }

  return (
    <li className={tabClasses}>
      <button role="tab" aria-selected={active} className={titleClasses} onClick={handleClick}>
        {children}
      </button>
    </li>
  )
}

Tab.defaultProps = {
  active: false,
  onClick: noop,
}
