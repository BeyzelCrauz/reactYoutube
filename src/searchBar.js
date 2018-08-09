import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
export  default  class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            value: ' ',
            items: [],
            sourse: []
        };
    }
    handleUpdateInput = (value) => {
        this.setState({
            value: value
        });
    };
    render() {
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+this.state.value+"&type=video&key=AIzaSyC_f2p8D7ASlvE--ZhxUzKce7Dc1fjiWR4")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result.items,
                });
            },
        );

        const value = this.state.value;
        this.state.sourse = this.state.items.map(item => (item.snippet.title));
        return (
            <MuiThemeProvider>
                <div className= 'searchBottom'>
                    <Paper
                        className = 'searchLeft'
                        zDepth={1}
                    >
                        <AutoComplete
                            className = 'autoComplete'
                            value={value}
                            maxSearchResults = {5}
                            onUpdateInput={this.handleUpdateInput}
                            hintText="Type your query"
                            fullWidth={true}
                            dataSource={this.state.sourse}
                            filter={(value, key) => (key.indexOf(value) !== -1)}
                        />
                    </Paper>
                    <Link to={`/list & ${value}`} className='linkSearch'>
                        <RaisedButton
                            className='searchButton'
                            label= 'Search'
                            overlayStyle = {{
                                height: '5vh',
                                lineHeight: '5vh',
                            }}
                        />
                    </Link>
                </div>
            </MuiThemeProvider>
        );
    }
}