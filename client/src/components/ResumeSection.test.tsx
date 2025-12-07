import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResumeSection } from './ResumeSection';
import { ThemeProvider } from '../contexts/ThemeContext';

describe('ResumeSection', () => {
  it('renders title and children correctly', () => {
    render(
      <ThemeProvider>
        <ResumeSection title="Test Section">
          <p>Test Content</p>
        </ResumeSection>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Section')).toBeDefined();
    expect(screen.getByText('Test Content')).toBeDefined();
  });
});
