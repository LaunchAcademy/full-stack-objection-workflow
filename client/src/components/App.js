import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
import ShowsList from "./ShowsList"
import NewShowForm from "./NewShowForm"
import ShowDetail from "./ShowDetail"

import CatList from "./CatList"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cats" component={CatList} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
