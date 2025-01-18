export function getListOfFeatures(arrayOfFiles) {
    let listOfFeatures = [];

    arrayOfFiles.forEach(file => {
        file.list_of_features.forEach(feature => {
            listOfFeatures.push(feature);
        })
    });

    return listOfFeatures;
}