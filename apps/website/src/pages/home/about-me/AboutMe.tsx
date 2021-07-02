import { FC, useState } from 'react'
import { Tabs } from '@ui-kit/molecules'
import { Tab } from '@ui-kit/atoms'
import { Styled } from '@ui-kit/types'
import classNames from 'classnames'

export const AboutMe: FC<Styled> = (props: Styled) => {
  const { className } = props
  const [activeTabId, setActiveTabId] = useState(0)

  const sectionClasses = classNames(className)

  const tabs = ['Lirically', 'On Business'].map((title, id) => {
    const handleClick = () => {
      setActiveTabId(id)
    }

    return (
      <Tab key={title} active={id === activeTabId} onClick={handleClick}>
        {title}
      </Tab>
    )
  })

  return (
    <section className={sectionClasses}>
      <Tabs>
        {tabs}
      </Tabs>
    </section>
  )
}
