import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link, Route} from 'react-router-dom';
import  VideoDeatail from './videoDeatail';
import  SearchBar from './searchBar';
import VideoListItem from './videoListItem';
export default class videoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
    }
    render() {
        // повал, я выносил за рендер, крашилось всё к чертям
        const sear = this.props.match.params.search;
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+ sear +"&type=video&key=AIzaSyC_f2p8D7ASlvE--ZhxUzKce7Dc1fjiWR4")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <MuiThemeProvider >

                    <SearchBar/>
                    <div className='listBottom'>
                        {items.map(item => (
                            <div>
                                <Route exact path="/vid/:id" component={VideoDeatail}/>
                                <Link key={item.etag} className={'videoY'} to={`/vid & ${item.id.videoId}`}>
                                    <VideoListItem item = {item}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

