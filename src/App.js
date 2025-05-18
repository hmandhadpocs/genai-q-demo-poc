import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImagesUploaded = (newImages) => {
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Upload Demo</h1>
        <p>A simple React application for uploading and previewing images</p>
      </header>
      
      <main className="App-main">
        <ImageUploader onImagesUploaded={handleImagesUploaded} />
        
        {uploadedImages.length > 0 && (
          <div className="image-gallery">
            <h2>Uploaded Images</h2>
            <div className="image-grid">
              {uploadedImages.map((image, index) => (
                <div key={index} className="image-item">
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt={`Uploaded ${index + 1}`} 
                  />
                  <p>{image.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <footer className="App-footer">
        <p>Demo Project - Image Upload Application</p>
      </footer>
    </div>
  );
}

export default App;