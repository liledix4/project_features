import { properLocationHash } from "../modules/js_proper_location_hash/proper_location_hash.js";
import { setEvents } from "./events.js";
import { lang } from "./lang.js";


const htmlSource = document.querySelector('.list-of-features');


export async function clearContent() {
    htmlSource.innerHTML = '';
}


export async function wrapContent(obj) {
    obj.forEach(objElement => {
        if (objElement.feature_title && objElement.id) {
            const featureTitle = `<div class='title'>${objElement.feature_title}</div>`;
            let featureRequires = '';

            if (objElement.subfeatures) {
                featureRequires += `
                    <div class='required-features'>
                        <div class='required-features-heading'>${lang.en.this_feature_requires}</div>`;
                objElement.subfeatures.forEach(singleSubfeature => {
                    featureRequires += `<div class='required-feature-title' feature_id='${singleSubfeature}'>${singleSubfeature}</div>`;
                });
                featureRequires += '</div>';
            }

            htmlSource.innerHTML += `
                <div class='feature' id='${objElement.id}'>
                    ${featureTitle}
                    ${featureRequires}
                </div>
            `;
        }
    });
    setEvents();
    properLocationHash();
}