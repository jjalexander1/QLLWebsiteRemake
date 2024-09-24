// Footer.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; // Adjust the import based on your file structure

describe('Footer', () => {
  test('renders footer with correct text', () => {
    render(<Footer />);
    
    // Check if the copyright text is in the document
    const copyrightText = screen.getByText(/Copyright © 2001-2024 The Quiz League of London/i);
    expect(copyrightText).toBeInTheDocument();
    
    // Check if the website link is present
    const websiteLink = screen.getByText(/www.quizleagueoflondon.co.uk/i);
    expect(websiteLink).toBeInTheDocument();
    
    // Check if the contact link is present
    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();

    // Check if the social media icons are present
    const facebookLink = screen.getByLabelText(/Facebook/i);
    expect(facebookLink).toBeInTheDocument();

    const twitterLink = screen.getByLabelText(/Twitter/i);
    expect(twitterLink).toBeInTheDocument();
  });
});
