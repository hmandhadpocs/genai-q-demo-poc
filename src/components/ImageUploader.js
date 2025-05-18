import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageUploader.css';

const ImageUploader = ({ onImagesUploaded }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Filter for image files only
    const imageFiles = acceptedFiles.filter(file => 
      file.type.startsWith('image/')
    );
    
    if (imageFiles.length > 0) {
      onImagesUploaded(imageFiles);
    }
  }, [onImagesUploaded]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    multiple: true
  });

  return (
    <div className="image-uploader-container">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''} ${isDragReject ? 'reject' : ''}`}
      >
        <input {...getInputProps()} />
        
        <div className="dropzone-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          
          {isDragActive ? (
            <p>Drop the images here...</p>
          ) : (
            <p>Drag & drop images here, or click to select files</p>
          )}
          
          {isDragReject && <p className="error-text">Some files are not images!</p>}
          
          <button type="button" className="select-button">
            Select Images
          </button>
        </div>
      </div>
      
      <div className="upload-instructions">
        <h3>Instructions:</h3>
        <ul>
          <li>Supported formats: JPG, PNG, GIF, WebP</li>
          <li>You can upload multiple images at once</li>
          <li>Images will appear in the gallery below</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUploader;