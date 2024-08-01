# Banner Management Application(BannerAD)

This project is a React-based application that allows users to manage and edit banner advertisements. It features a component for displaying banners and a form for editing them, including functionality for uploading images and changing background colors.

## Features

- Display banner with title, description, CTA (Call to Action), image, and background.
- Edit banner details including title, description, CTA, image, and background color.
- Responsive design with modern styling.

## Components

- **BannerImageComp**: Displays the banner and includes an edit button.
- **EditBannerTemplateBs**: Provides a form to edit the banner details.

## Installation

1. **Clone the repository**:

   
    git clone https://github.com/your-username/BannerAD.git
    cd BannerAD
  

2. **Install dependencies**:

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   
    npm install
    

## Usage

1. **Start the development server**:

 
    npm start
    

    The application will be available at [http://localhost:3000](http://localhost:3000).

2. **Access the application**:

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the banner management interface.

3. **Edit a banner**:

    - Click on the ✎ (edit) button on the banner.
    - Modify the title, description,  image, and background color in the form that appears.
    - Click "Save" to apply changes or "Cancel" to discard.

## Folder Structure

- `src/`
  - `components/`
    - `BannerImageComp.tsx` - Component to display the banner.
    - `EditBannerTemplateBs.tsx` - Component to edit the banner.
  - `types/`
    - `index.ts` - TypeScript types for the application.
  - `App.tsx` - Main application component.
  - `index.tsx` - Entry point of the application.
  - `styles/`
    - `BannerImageComp.css` - CSS file for styling the banner component.

## Styling

- **CSS Framework**: Tailwind CSS is used for styling.
- **Custom Styles**: Defined in `BannerImageComp.css`.

## Testing

To run tests, use:

npm test

## Depolyment Link


