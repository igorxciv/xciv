import { FC } from 'react'
import { Tabs } from '@ui-kit/molecules'
import { Tab } from '@ui-kit/atoms'
import { Styled } from '@ui-kit/types'
import classNames from 'classnames'

export const AboutMe: FC<Styled> = (props: Styled) => {
  const { className } = props

  const sectionClasses = classNames(className)

  return (
    <section className={sectionClasses}>
      <Tabs>
        <Tab active>
          Lirically
        </Tab>
        <Tab>
          On Business
        </Tab>
      </Tabs>
    </section>
  )
}
