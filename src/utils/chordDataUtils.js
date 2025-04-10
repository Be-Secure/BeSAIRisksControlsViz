function prepareChordData(jsonData) {
  const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

  const mappingData = data.Mapping || [];
  const standards = [];
  const masterControls = [];
  const relationships = {};

  mappingData.forEach(item => {
    const master = item.Master;
    if (!masterControls.includes(master)) {
      masterControls.push(master);
    }

    if (item.Standards) {
      item.Standards.forEach(standard => {
        const standardName = standard.name;
        if (!standards.includes(standardName)) {
          standards.push(standardName);
          relationships[standardName] = [];
        }
        relationships[standardName].push(master);
      });
    }
  });

  const labels = [...standards, ...masterControls];
  const matrix = Array(labels.length).fill(null).map(() => Array(labels.length).fill(0));

  for (let i = 0; i < standards.length; i++) {
    for (let j = 0; j < labels.length; j++) {
      const source = standards[i];
      const target = labels[j];
      if (relationships[source] && relationships[source].includes(target)) {
        matrix[i][j] = 1;
        matrix[j][i] = 1;
      }
    }
  }

  console.log('Transformed Data:', { labels, matrix, mapping: mappingData }); // Debugging
  return { labels, matrix, mapping: mappingData };
}

module.exports = { prepareChordData };