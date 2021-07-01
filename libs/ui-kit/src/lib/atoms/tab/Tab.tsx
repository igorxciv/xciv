import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './Tab.module.scss'

type Props = {
  title: string
  active?: boolean
}

export const Tab: FC<Props> = (props: PropsWithChildren<Props>) => {
  const { title, active, children } = props

  const tabClasses = classNames(styles['tab'], { [styles['tab--active']]: active })
  const titleClasses = classNames(styles['tab__title'])

  const content = active ? (
    <div>
      {children}
    </div>
  ) : null

  return (
    <li className={tabClasses}>
      <a className={titleClasses}>
        {title}
      </a>
      {content}
    </li>
  )
}

Tab.defaultProps = {
  active: false,
}
