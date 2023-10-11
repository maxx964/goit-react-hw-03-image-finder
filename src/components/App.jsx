import React, { Component } from 'react';


import Searchbar from './Searchbar/';
import ImageGallery from './ImageGallery/ImageGallery';

import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {

  };



  render() {
    const { images, isLoading } = this.state;

    return (
     <div>
        <SearchBar onSubmit={this.handleImageSearch} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        <Modal />
      </div>
    );
  }
}

export default App;
