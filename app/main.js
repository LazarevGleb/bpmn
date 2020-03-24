import $ from 'jquery';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import minimapModule from 'diagram-js-minimap';

$('#files').get(0).addEventListener('change', handleFileSelect, false);

const viewer = new BpmnModeler({
    container: $('#canvas'),
});

function handleFileSelect(evt) {
    console.log(evt);
    const files = evt.target.files;

    const reader = new FileReader();
    reader.readAsText(files[0]);

    reader.onload = file => {
        const xml = file.target.result;

        viewer.importXML(xml, error => {
            if (error) {
                console.error(error);
            } else {
                const canvas = viewer.get('canvas');
                canvas.zoom('fit-viewport');
            }
        });
    };
}
