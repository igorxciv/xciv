import classNames from 'classnames'
import { FC } from 'react'
import { AboutMe } from './about-me'
import { HomeTitle } from './home-title'
import styles from './Home.module.scss'

export const Home: FC = () => {
  const pageClasses = classNames(styles['home'])
  const aboutClasses = classNames(styles['home__about'])

  return (
    <main className={pageClasses}>
      <HomeTitle />
      <AboutMe className={aboutClasses} />
    </main>
  )
}
