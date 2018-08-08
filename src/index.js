import React from 'react';
import ReactDOM from 'react-dom';
import videoList from './VideoList';
import { Route,  Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import  SearchBar from './searchBar';
import  VideoDeatail from './videoDeatail';
import registerServiceWorker from './registerServiceWorker';

const history =  createBrowserHistory();

    ReactDOM.render(
        <Router history={history}>
            <div>
                    <Route exact path="/" component = {SearchBar}/>
                    <Route exact path="/list & :search" component = {videoList}/>
                    <Route exact path="/vid & :id" component={VideoDeatail}/>
            </div>

        </Router>,
        document.getElementById('root'));
registerServiceWorker();

