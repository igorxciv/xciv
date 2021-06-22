import classNames from 'classnames'
import { FC } from 'react'
import styles from './Home.module.scss'

export const Home: FC = () => {
  const pageClasses = classNames(styles['home'])

  return (
    <main className={pageClasses}>
      Home page
    </main>
  )
}
