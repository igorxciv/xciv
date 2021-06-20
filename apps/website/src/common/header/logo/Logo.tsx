import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

export const Logo: FC = () => {
  const [appeared, setIsAppeared] = useState(false)

  const logoClasses = classNames(styles['logo'])
  const title1Classes = classNames(styles['logo__title1'], { [styles['logo__title1--appeared']]: appeared })
  const title2Classes = classNames(styles['logo__title2'], { [styles['logo__title2--appeared']]: appeared })

  useEffect(() => {
    setIsAppeared(true)
  }, [])

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
