import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the ImageUploader component
jest.mock('./components/ImageUploader', () => {
  return function MockImageUploader({ onImagesUploaded }) {
    return (
      <div data-testid="mock-image-uploader">
        <button onClick={() => onImagesUploaded([
          new File(['test'], 'test-image.png', { type: 'image/png' })
        ])}>
          Mock Upload
        </button>
      </div>
    );
  };
});

// Mock URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => 'mock-url');

describe('App Component', () => {
  test('renders the header and footer', () => {
    render(<App />);
    
    // Check if header and footer are rendered
    expect(screen.getByText(/Image Upload Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/A simple React application for uploading and previewing images/i)).toBeInTheDocument();
    expect(screen.getByText(/Demo Project - Image Upload Application/i)).toBeInTheDocument();
  });

  test('renders the ImageUploader component', () => {
    render(<App />);
    
    // Check if the ImageUploader component is rendered
    expect(screen.getByTestId('mock-image-uploader')).toBeInTheDocument();
  });

  test('initially has no uploaded images', () => {
    render(<App />);
    
    // Check that "Uploaded Images" is not in the document initially
    expect(screen.queryByText(/Uploaded Images/i)).not.toBeInTheDocument();
  });
});