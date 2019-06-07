import React from 'react'
import { Switch,  Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header'
import Form from './ Form/Form'
import List from '../List/List'
import Product from './Product/Product';


export default (
<Switch>
    <Route exact path="/" component={Header} />
    <Route path="/list" component={List} />
    <Route path="/form" component={Form} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/message/:id" component={Product} />

</Switch>

)

