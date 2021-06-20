import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

export const Logo: FC = () => {
  const logoClasses = classNames(styles['logo'])
  const title1Classes = classNames(styles['logo__title1'])
  const title2Classes = classNames(styles['logo__title2'])

  return (
    <Link to="/" className={logoClasses}>
      <span className={title1Classes}>
        Igor
      </span>
      <span className={title2Classes}>
        Cheliadinski
      </span>
    </Link>
  )
}
