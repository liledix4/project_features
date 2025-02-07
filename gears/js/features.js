export function getListOfFeatures(arrayOfFiles) {
  let listOfFeatures = [];

  arrayOfFiles.forEach(file => {
    if (file.content && file.content.list_of_features)
      file.content.list_of_features.forEach(feature => {
        listOfFeatures.push(feature);
      })
  });

  return listOfFeatures;
}