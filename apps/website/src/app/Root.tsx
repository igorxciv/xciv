import { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '@website/pages/home'
// import { Footer } from '../common/footer'
// import { Header } from '../common/header'

export const Root: FC = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}
