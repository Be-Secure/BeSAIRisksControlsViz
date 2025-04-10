// __tests__/utils/chordDataUtils.test.js

const { prepareChordData } = require('../../src/utils/chordDataUtils'); // Adjust path

describe('Chord Data Preparation', () => {
  let jsonData;

  beforeEach(() => {
    jsonData = `{
      "Mapping": [
        {
          "Domain": "Governance & Leadership",
          "Master": "GL-1",
          "Topic": "Executive Commitment and Accountability",
          "Control Statement": "The organisation's executive leadership...",
          "Standards": [
            {
              "name": "ISO42001",
              "references": [
                {
                  "section": "4.1",
                  "citation": "ISO42001:2019, Clause 4.1",
                  "description": "Context of the organization"
                }
              ]
            },
            {
              "name": "ISO27001",
              "references": [
                {
                  "section": "5.1",
                  "citation": "ISO27001:2013, Clause 5.1",
                  "description": "Policy"
                }
              ]
            }
          ]
        },
        {
          "Domain": "Risk Management",
          "Master": "RM-1",
          "Topic": "Risk Management Framework and Governance",
          "Control Statement": "The organisation shall establish...",
          "Standards": [
            {
              "name": "ISO42001",
              "references": [
                {
                  "section": "6.1",
                  "citation": "ISO42001:2019, Clause 6.1",
                  "description": "Actions to address risks"
                }
              ]
            },
            {
              "name": "NIST RMF",
              "references": [
                {
                  "function": "Govern",
                  "category": "Governance",
                  "control": "1.1",
                  "citation": "NIST AI RMF, Govern 1.1",
                  "description": "Establish AI governance"
                }
              ]
            }
          ]
        }
      ]
    }`;
  });

  test('prepareChordData should correctly extract labels and build matrix', () => {
    const expectedResult = {
      labels: ["ISO42001", "ISO27001", "NIST RMF", "GL-1", "RM-1"],
      matrix: [
        [0, 0, 0, 1, 1], // ISO42001 relates to GL-1 and RM-1
        [0, 0, 0, 1, 0], // ISO27001 relates to GL-1
        [0, 0, 0, 0, 1], // NIST RMF relates to RM-1
        [1, 1, 0, 0, 0], // GL-1 relates to ISO42001 and ISO27001
        [1, 0, 1, 0, 0]  // RM-1 relates to ISO42001 and NIST RMF
      ],
      mapping: JSON.parse(jsonData).Mapping
    };

    const result = prepareChordData(jsonData);

    expect(result.labels).toEqual(expectedResult.labels);
    expect(result.matrix).toEqual(expectedResult.matrix);
    expect(result.mapping).toEqual(expect.any(Array));
  });
});