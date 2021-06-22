import classNames from 'classnames'
import { FC } from 'react'
import styles from './HomeTitle.module.scss'

export const HomeTitle: FC = () => {
  const titleClasses = classNames(styles['title'])

  return (
    <h1 className={titleClasses}>
      <span>
        Software
      </span>
      {' '}
      <span>
        Engineer
      </span>
    </h1>
  )
}
