import React, { Component } from 'react';
import './vid.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
export default class VideoListItem extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Paper
                    className='wrapper'
                    zDepth={1}
                >
                    <div className='thumb'
                         style ={{
                             backgroundImage: "url(" + this.props.item.snippet.thumbnails.medium.url + ")",
                         }}
                    />
                    <div className='descr'>
                        <div className='title'>
                            {this.props.item.snippet.title}
                        </div>
                        <div className='text'>
                            {this.props.item.snippet.description}
                        </div>
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    }

}