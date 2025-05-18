# Image Upload Demo

A simple React application for uploading and previewing images. This demo project showcases how to implement image upload functionality in a React application with a clean and user-friendly interface.

## Features

- Drag and drop interface for easy image uploading
- Support for multiple image uploads
- Image preview gallery
- Responsive design
- Support for various image formats (JPG, PNG, GIF, WebP)

## Technologies Used

- React.js
- react-dropzone for drag and drop functionality
- CSS for styling
- Jest and React Testing Library for testing

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/image-upload-demo.git
   cd image-upload-demo
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Running Tests

To run the tests:
```
npm test
```
or
```
yarn test
```

## Project Structure

```
src/
  ├── components/
  │   ├── ImageUploader.js       # Component for handling image uploads
  │   ├── ImageUploader.css      # Styles for the uploader component
  │   └── ImageUploader.test.js  # Tests for the uploader component
  ├── App.js                     # Main application component
  ├── App.css                    # Styles for the main application
  ├── App.test.js                # Tests for the main application
  ├── index.js                   # Entry point for React
  └── index.css                  # Global styles
```

## How It Works

1. Users can drag and drop images onto the designated area or click to select files
2. The application validates that only image files are accepted
3. Uploaded images are displayed in a gallery below the uploader
4. Each image is shown with its filename

## Future Enhancements

- Add image compression options
- Implement image editing features
- Add cloud storage integration
- Implement image categorization

## License

This project is licensed under the MIT License - see the LICENSE file for details.
