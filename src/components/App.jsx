import React, { Component } from 'react';


import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
 state = {
  images: [], 
  isLoading: false, 
  page: 1, 
  searchQuery: '' 
};

 
  handleImageSearch = (query) => {
    this.setState({
      searchQuery: query,
      images: [], 
      page: 1, 
    });

  
  };

  
  loadMoreImages = () => {
    this.setState({ isLoading: true });

  
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleImageSearch} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        <Modal />
      </div>
    );
  }
}

export default App;