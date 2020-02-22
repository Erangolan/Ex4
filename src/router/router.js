import React from 'react'
import { Route } from 'react-router-dom'
import IdeaList from '../Components/IdeasList'
import MyIdeas from '../Components/MyIdeas'
import Header from '../Header'
import './router.css';

const ReactRouter = () => {
    return (
        <div id="wrapper">
        <React.Fragment id="container">   
            <Header />
            <Route exact path="/" component={IdeaList} />
        </React.Fragment>
        </div>
    )
}

export default ReactRouter