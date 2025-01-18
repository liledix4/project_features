import { checkIfFilesAreLoaded, fileData, loadSeriesOfFiles } from "../modules/js_load_series_of_files/load_series_of_files.js";
import { wrapContent } from "./content.js";
import { getListOfFeatures } from "./features.js";


loadSeriesOfFiles('../../json/main.json', () => {
    checkIfFilesAreLoaded(() => {
        wrapContent( getListOfFeatures(fileData) );
    });
});