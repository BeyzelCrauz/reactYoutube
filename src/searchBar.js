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
    handleUpdateInput = (value) => {
        this.setState({
            value: value
        });
    };

    componentDidMount() {

        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=AIzaSyC_f2p8D7ASlvE--ZhxUzKce7Dc1fjiWR4")
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


        const value = this.state.value;
        return (
            <MuiThemeProvider>
                <div
                    style={{
                        display: 'flex',
                        marginTop: '10vh'
                    }}>
                    <Paper
                    zDepth={1}
                    style={{
                        width: '60vw',
                        marginLeft: '15vw',
                        marginRight: '3vw'
                    }}>
                        <AutoComplete
                            value={value}
                            maxSearchResults = {5}
                            onUpdateInput={this.handleUpdateInput}
                            hintText="Type your query"
                            fullWidth={true}
                            dataSource={this.state.items}
                            filter={(value, key) => (key.indexOf(value) !== -1)}
                            style={{
                                width: '96%',
                                marginLeft: '2%',
                                height: '5vh'
                            }}
                        />
                    </Paper>
                    <Link to={`/list & ${value}`}>
                        <RaisedButton
                        label= 'Search'
                        overlayStyle = {{
                            height: '5vh',
                            lineHeight: '5vh',
                        }}
                        style={{
                            width: '7vw',
                            lineHeight: '5vh',
                            margin: '0'
                        }}
                    />
                    </Link>
                </div>
            </MuiThemeProvider>
        );
    }
}