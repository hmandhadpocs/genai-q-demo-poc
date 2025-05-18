import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageUploader from './ImageUploader';

// Mock react-dropzone
jest.mock('react-dropzone', () => {
  return {
    useDropzone: () => ({
      getRootProps: () => ({
        onClick: jest.fn(),
      }),
      getInputProps: () => ({
        onChange: jest.fn(),
      }),
      isDragActive: false,
      isDragReject: false,
    }),
  };
});

describe('ImageUploader Component', () => {
  test('renders the uploader with instructions', () => {
    const mockOnImagesUploaded = jest.fn();
    render(<ImageUploader onImagesUploaded={mockOnImagesUploaded} />);
    
    // Check if the component renders with the expected text
    expect(screen.getByText(/Drag & drop images here/i)).toBeInTheDocument();
    expect(screen.getByText(/Select Images/i)).toBeInTheDocument();
    expect(screen.getByText(/Instructions:/i)).toBeInTheDocument();
    expect(screen.getByText(/Supported formats:/i)).toBeInTheDocument();
  });

  test('displays the correct instructions', () => {
    const mockOnImagesUploaded = jest.fn();
    render(<ImageUploader onImagesUploaded={mockOnImagesUploaded} />);
    
    // Check if all instructions are displayed
    expect(screen.getByText(/Supported formats: JPG, PNG, GIF, WebP/i)).toBeInTheDocument();
    expect(screen.getByText(/You can upload multiple images at once/i)).toBeInTheDocument();
    expect(screen.getByText(/Images will appear in the gallery below/i)).toBeInTheDocument();
  });
});