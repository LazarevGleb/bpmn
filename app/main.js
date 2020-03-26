import $ from 'jquery';
import minimapModule from 'diagram-js-minimap';
import BpmnJS from 'bpmn-js'

const canvas = $('#canvas').get(0);
canvas.style.visibility = 'hidden';

$('#files').get(0).addEventListener('change', handleFileSelect, false);

const viewer = new BpmnJS({
    container: canvas,
    additionalModules: [
        minimapModule
    ]
});

function handleFileSelect(evt) {
    const files = evt.target.files;

    const reader = new FileReader();
    reader.readAsText(files[0]);

    reader.onload = file => {
        const xml = file.target.result;
        viewer.clear();

        viewer.importXML(xml, error => {
            if (error) {
                console.error(error);
            } else {
                const diagram = viewer.get('canvas');
                diagram.zoom('fit-viewport');

                canvas.style.visibility = 'visible';
                viewer.get('minimap').open();
            }
        });
    };
}
