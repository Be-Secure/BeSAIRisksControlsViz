import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function ChordChart({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data) {
      console.log('No data provided to ChordChart');
      return;
    }

    const { labels, matrix } = data;

    // Validate labels and matrix
    if (!labels || !matrix || labels.length !== matrix.length) {
      console.error('Labels and matrix are not aligned');
      return;
    }

    console.log('Labels:', labels); // Debugging

    const svg = d3.select(svgRef.current);

    // Clear previous elements to avoid duplication
    svg.selectAll('*').remove();

    // Get the size of the SVG element
    const boundingBox = svgRef.current.getBoundingClientRect();
    const width = boundingBox.width;
    const height = boundingBox.height;

    const outerRadius = Math.min(width, height) * 0.5 - 60;
    const innerRadius = outerRadius - 40;

    // Create the chord layout
    const chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending)(matrix);

    // Create the arc generator for the groups
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    // Create the ribbon generator for the chords
    const ribbon = d3.ribbon().radius(innerRadius);

    // Set up the SVG dimensions
    svg.attr('viewBox', [-width / 2 - 150, -height / 2 - 150, width + 300, height + 300]);

    // Draw the chords
    svg.append('g')
      .selectAll('path')
      .data(chord)
      .join('path')
      .attr('d', ribbon)
      .attr('fill', (d) => d3.schemeCategory10[d.target.index % 10]) // Dynamic fill color
      .attr('stroke', '#000') // Stroke color for chords
      .attr('stroke-width', 0.2); // Stroke width for chords

    // Draw the group arcs
    const group = svg.append('g')
      .selectAll('g')
      .data(chord.groups)
      .join('g');

    group.append('path')
      .attr('d', arc)
      .attr('fill', 'none') // No fill for arcs
      .attr('stroke', '#c0cea5') // Stroke color for arcs
      .attr('stroke-width', 0.5); // Stroke width for arcs

    // Add labels
    group.append('text')
      .each((d) => { d.angle = (d.startAngle + d.endAngle) / 2; })
      .attr('dy', '.35em')
      .attr('transform', (d) => {
        const angle = (d.angle * 180) / Math.PI - 90;
        const translate = outerRadius + 50; // Adjusted for better label positioning
        console.log(`Label: ${labels[d.index]}, Angle: ${angle}, Translate: ${translate}`);
        return `
          rotate(${angle})
          translate(${translate})
          ${d.angle > Math.PI ? 'rotate(180)' : ''}
        `;
      })
      .attr('font-size', '14px') // Font size for labels
      .attr('fill', 'black') // Text color
      .attr('text-anchor', (d) => (d.angle > Math.PI ? 'end' : 'start')) // Align text properly
      .text((d) => labels[d.index]); // No fallback for undefined labels
  }, [data]);

  return <svg ref={svgRef} width="1000" height="1000"></svg>;
}

export default ChordChart;