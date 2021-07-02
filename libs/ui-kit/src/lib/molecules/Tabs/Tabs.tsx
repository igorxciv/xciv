import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './Tabs.module.scss'

export const Tabs: FC<unknown> = (props: PropsWithChildren<unknown>) => {
  const { children } = props

  const tabsClasses = classNames(styles['tabs'])

  return (
    <ul role="tablist" className={tabsClasses}>
      {children}
    </ul>
  )
}
