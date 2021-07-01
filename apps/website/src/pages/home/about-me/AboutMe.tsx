import { FC } from 'react'
import { Tabs } from '@ui-kit/molecules'
import { Tab } from '@ui-kit/atoms'

export const AboutMe: FC = () => {
  return (
    <section>
      <Tabs>
        <Tab title="Lirically" active>
          Igor C - Me
        </Tab>
        <Tab title="On Business" />
      </Tabs>
    </section>
  )
}
