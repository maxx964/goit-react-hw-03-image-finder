import React, { Component } from 'react';


class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    
    const apiKey = '39358153-a46635e1a9ac8a2573ff17e3b';
    const initialQuery = 'cat';
      this.searchImages(initialQuery, apiKey);
  }

  searchImages = (query, apiKey) => {
    this.setState({ isLoading: true });
    const url = 'https://pixabay.com/api/?q=cat&page=1&key=39358153-a46635e1a9ac8a2573ff17e3b&image_type=photo&orientation=horizontal&per_page=12'
     fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ images: data.hits, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  };

 render() {
    const { images, isLoading, error } = this.state;

    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul className="gallery">
          {images.map((image) => (
            <li key={image.id} className="gallery-item">
              <img src={image.webformatURL} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;