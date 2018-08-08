import React, { Component } from 'react';
import YouTube from 'react-youtube';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import  SearchBar from './searchBar';

export default class VideoDeatail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            value: ' ',
            items: [],
            sourse: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue',
                'Purple',
                'Black',
                'White',
            ]
        };
    }


    componentDidMount() {

        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+this.props.match.params.id+"&key=AIzaSyC_f2p8D7ASlvE--ZhxUzKce7Dc1fjiWR4")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result.items,
                    });
                },
            );
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <MuiThemeProvider >
                <SearchBar/>
                <div className={'videowrapper'}>
                    <YouTube
                        videoId={this.props.match.params.id}
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
                <Paper
                    className={'videowrapper paperw'}
                    zDepth={1}>
                    {this.state.items.map(item => (
                        <div className={'texts'}>
                            <div className={'title'}>
                                {item.snippet.title}
                            </div>
                            <div className={'descr'}>
                                {item.snippet.description}
                            </div>
                        </div>
                    ))}
                </Paper>
            </MuiThemeProvider>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}