import { useFilePicker } from 'use-file-picker';


function FilePicker() {

    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: '.db',
    });

    openFileSelector();

    return filesContent;
}

export default FilePicker