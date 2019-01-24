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
  //Access Key:  d8bd8bf84026edb300bc8f60cd9ae03cc9a60887a4582edffeb1a902c07912f7
  //Secret Key: a9471f0ed9a3e280de2ba1f7fee28850ba73b454b68e98eab1dfff08c8b45526

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
