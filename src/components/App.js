import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  onSeachSubmit = async (term) => {
    const response = await unsplash(term);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={this.onSeachSubmit}/>
      found: {this.state.images.length} images
      <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
