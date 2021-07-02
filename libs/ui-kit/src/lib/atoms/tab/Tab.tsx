import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './Tab.module.scss'

type Props = {
  active?: boolean
}

export const Tab: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { active, children } = props

  const tabClasses = classNames(styles['tab'], { [styles['tab--active']]: active })
  const titleClasses = classNames(styles['tab__title'])

  return (
    <li className={tabClasses}>
      <a className={titleClasses}>
        {children}
      </a>
    </li>
  )
}

Tab.defaultProps = {
  active: false,
}
