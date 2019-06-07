import React from 'react'
import { Switch,  Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/ Form/Form'
import List from '../../List/List'
import Product from './Components/Product/Product';


export default (
<Switch>
    <Route exact path="/" component={Header} />
    <Route exact path="/list" component={List} />
    <Route exact path="/form" component={Form} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/message/:id" component={Product} />

</Switch>

)

