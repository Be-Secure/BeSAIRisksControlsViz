import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChordChart from '../../src/components/chordChart';
import { prepareChordData } from '../../src/utils/chordDataUtils';
import mockData from '../mockData.json';

describe('ChordChart Component', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect to return a fixed size
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 1000,
      height: 1000,
    }));
  });

  afterEach(() => {
    cleanup();
  });

  test('ChordChart renders an empty SVG when no data is provided', () => {
    const { container } = render(<ChordChart />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.childElementCount).toBe(0); // No child elements
  });

  test('renders labels from data', () => {
    const mockData = {
      labels: ["ISO42001", "ISO27001", "NIST RMF", "GL-1", "RM-1"],
      matrix: [
        [0, 0, 0, 1, 1], // ISO42001 relates to GL-1 and RM-1
        [0, 0, 0, 1, 0], // ISO27001 relates to GL-1
        [0, 0, 0, 0, 1], // NIST RMF relates to RM-1
        [1, 1, 0, 0, 0], // GL-1 relates to ISO42001 and ISO27001
        [1, 0, 1, 0, 0], // RM-1 relates to ISO42001 and NIST RMF
      ],
    };

    render(<ChordChart data={mockData} />);
    mockData.labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('renders chords based on the data matrix', () => {
    const mockData = {
      labels: ["ISO42001", "ISO27001", "NIST RMF", "GL-1", "RM-1"],
      matrix: [
        [0, 0, 0, 1, 1], // ISO42001 relates to GL-1 and RM-1
        [0, 0, 0, 1, 0], // ISO27001 relates to GL-1
        [0, 0, 0, 0, 1], // NIST RMF relates to RM-1
        [1, 1, 0, 0, 0], // GL-1 relates to ISO42001 and ISO27001
        [1, 0, 1, 0, 0], // RM-1 relates to ISO42001 and NIST RMF
      ],
    };

    const { container } = render(<ChordChart data={mockData} />);
    const pathElements = container.querySelectorAll('path');
    expect(pathElements.length).toBeGreaterThan(0); // Chords should be rendered
    pathElements.forEach((path) => {
      expect(path.getAttribute('d')).toBeTruthy(); // Ensure each path has a valid 'd' attribute
    });
  });

  test('renders chord chart with real JSON data', () => {
    // Transform the raw JSON data into the format required by ChordChart
    const transformedData = prepareChordData(mockData);

    // Render the ChordChart component with the transformed data
    const { container } = render(<ChordChart data={transformedData} />);

    // Verify that the SVG element is rendered
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();

    // Verify that the correct number of labels (<text> elements) are rendered
    const textElements = container.querySelectorAll('text');
    expect(textElements.length).toBe(transformedData.labels.length);

    // Verify that the correct number of chords (<path> elements) are rendered
    const pathElements = container.querySelectorAll('path');
    expect(pathElements.length).toBeGreaterThan(0); // Ensure chords are rendered
  });
});