# BeSAIRisksControlsViz

## Overview

A Utility to Vizualize AI Risk and Controls part of the Be-Secure Community Initiative. 

## Key Requirements

### Input Data Source

* **File:** Reads governance controls data directly from `Source Data.xlsx` in the repository.
* **Structure:**
    * Excel file must contain a sheet named "Mapping".
    * The "Mapping" sheet must include the following columns (case-sensitive):
        * `Domain`
        * `Master` (Unique Master Control IDs)
        * `Topic`
        * `Control Statement`
        * `ISO42001`
        * `ISO27001`
        * `ISO27701`
        * `EU AI ACT`
        * `NIST RMF`
        * `SOC2`
    * Each row represents a mapping between a Master Control and standard references.
    * Empty cells indicate no mapping for a specific standard.

### Filtering Functionality

* Users can filter data from `Source Data.xlsx` before generating the chord chart.
* Filtering criteria (populated dynamically from the "Mapping" sheet):
    * **Domain:** Select one or more Domains (e.g., Governance & Leadership, Risk Management).
    * **Topic:** Select one or more Topics within the chosen Domain(s) (e.g., Executive Commitment and Accountability, Risk Management Framework and Governance).
        * **Control Statement Popup (Optional):** When hovering over a Topic in the filter, a popup displays the corresponding "Control Statement(s)" associated with Master Controls within that Topic, providing context for selection.
    * **Standards:** Select one or more Governance Standards (e.g., ISO42001, EU AI ACT, NIST RMF, SOC2).

### Chord Chart Generation

* Generates an interactive chord diagram based on the filtered data.
* Processes Excel data into an internal data structure (e.g., JSON).
* Visually represents relationships between selected Governance Standards and Master Controls.
* Chord thickness indicates the presence of a relationship.

### Interactivity

* Interactive chord chart for detailed relationship exploration.
* Features:
    * Hovering over segments/chords: displays control/relationship information (Master Control name, standard reference).
    * Clicking on a segment: highlights connections (Master Controls to Standards, or vice versa).
    * **Control Statement Popup:** When hovering over a master control or related chord, a popup displays the corresponding "Control Statement" for clarity.
    * Ability to clear (hide) and restore all edges.

### Technology

* Single-page website built using:
    * React
    * Lightweight JavaScript (vanilla JS) with a charting library (e.g., D3.js).
  

### User Interface (UI)

* Clear and intuitive UI.
* User-friendly filtering options (dropdowns, selectable lists) populated from `Source Data.xlsx`.
* Prominent display of the generated chord chart.
* Clear instructions on using the filters.

### Output and Saving (Optional)

* Ability to save the generated chord chart as an image (SVG, PNG).

### Error Handling

* Basic error handling for missing or incorrectly structured `Source Data.xlsx`.
* Informative error messages for users.

### Responsiveness

* Responsive design for different screen sizes (desktop, tablet, mobile).

### Deployment

* Designed for easy deployment on common web hosting platforms (e.g., GitHub Pages, Netlify, Vercel).

## Development Process

This project is being developed using a Test-Driven Development (TDD) approach. For details on testing strategy, conventions, and implementation, please refer to the [Development Guidelines]() in the project's Wiki.
