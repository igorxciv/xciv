import classNames from 'classnames'
import { FC } from 'react'
import { noop } from '@ui-kit/utils'
import { Styled } from '@ui-kit/types'
import styles from './Hamburger.module.scss'

type Props = {
  crossed?: boolean
  onClick?: () => void
} & Styled

export const Hamburger: FC<Props> = (props: Props) => {
  const { crossed, className, onClick } = props

  const buttonClasses = classNames(styles['hamburger'], className)
  const lineClasses = classNames(styles['hamburger__line'], { [styles['crossed']]: crossed })
  const topLineClasses = classNames(lineClasses, styles['hamburger__line--top'])
  const midLineClasses = classNames(lineClasses, styles['hamburger__line--mid'])
  const botLineClasses = classNames(lineClasses, styles['hamburger__line--bot'])

  return (
    <button className={buttonClasses} onClick={onClick} aria-label="Toggle navigation" aria-expanded={crossed}>
      <span className={topLineClasses} />
      <span className={midLineClasses} />
      <span className={botLineClasses} />
    </button>
  )
}

Hamburger.defaultProps = {
  crossed: false,
  onClick: noop,
}
