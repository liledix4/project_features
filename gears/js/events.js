export async function setEvents() {
    document.querySelectorAll('.required-feature-title').forEach(element => {
        element.addEventListener('mouseenter', (event) => {
            const featureID = event.currentTarget.getAttribute('feature_id');
            document.getElementById(featureID).classList.add('highlighted');
        });
        element.addEventListener('mouseleave', () => {
            document.querySelector('.feature.highlighted').classList.remove('highlighted');
        });
        element.addEventListener('click', (event) => {
            const featureID = event.currentTarget.getAttribute('feature_id');
            location.hash = featureID;
        });
    });
}