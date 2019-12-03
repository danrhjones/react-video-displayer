import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

require('dotenv').config();

export default class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({videos: response.data.items});
  };

  onVideoSelect = (video) => {
    console.log();
  };

  render() {
    return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <VideoList videos={this.state.videos}/>
        </div>
    )

  }
}
