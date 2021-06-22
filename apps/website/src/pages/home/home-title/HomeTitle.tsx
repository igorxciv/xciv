import { calculateDiffInYears } from '@website/libs/date'
import classNames from 'classnames'
import { FC } from 'react'
import styles from './HomeTitle.module.scss'

const CAREER_START_DATE = new Date(2014, 3)

export const HomeTitle: FC = () => {
  const titleClasses = classNames(styles['title'])
  const occupationClasses = classNames(styles['title__occupation'])
  const experienceClasses = classNames(styles['title__experience'])

  const experience = `with >${calculateDiffInYears(CAREER_START_DATE, new Date())} years' experience`

  return (
    <div className={titleClasses}>
      <h1 className={occupationClasses}>
        Software Engineer
      </h1>
      <span className={experienceClasses}>
        {experience}
      </span>
    </div>
  )
}
